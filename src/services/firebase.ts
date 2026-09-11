import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  onSnapshot,
  Firestore,
  doc,
  setDoc,
  increment,
} from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyCzgYL_d2_R20XSleqkq5gWpkiUO2lduEo',
  authDomain: 'site-af305.firebaseapp.com',
  projectId: 'site-af305',
  storageBucket: 'site-af305.firebasestorage.app',
  messagingSenderId: '207332062619',
  appId: '1:207332062619:web:84e9f79f84f27ba0911d3e',
  measurementId: 'G-P6Z59SZ9KT',
};

// Singleton instances
let appInstance: ReturnType<typeof initializeApp> | null = null;
let dbInstance: Firestore | null = null;

export function getFirebaseApp() {
  if (!appInstance) {
    if (getApps().length > 0) {
      appInstance = getApp();
    } else {
      appInstance = initializeApp(firebaseConfig);
    }
  }
  return appInstance;
}

export function getFirebaseDb(): Firestore | null {
  if (!dbInstance) {
    try {
      const app = getFirebaseApp();
      dbInstance = getFirestore(app);
    } catch (err) {
      console.warn('Firebase Firestore initialization notice:', err);
      return null;
    }
  }
  return dbInstance;
}

// Session Generator
export function getOrCreateSessionId(): string {
  const SESSION_KEY = 'vapofil_session_id';
  let sessionId = '';
  try {
    sessionId = sessionStorage.getItem(SESSION_KEY) || '';
    if (!sessionId) {
      sessionId = 'sess_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now();
      sessionStorage.setItem(SESSION_KEY, sessionId);
    }
  } catch {
    sessionId = 'sess_' + Math.random().toString(36).substring(2, 10);
  }
  return sessionId;
}

export interface CustomerActivityLog {
  id?: string;
  sessionId: string;
  eventType: 'page_view' | 'scroll' | 'section_view' | 'click' | 'affiliate_click' | 'heartbeat';
  targetElement?: string;
  targetLabel?: string;
  scrollDepth?: number;
  sectionName?: string;
  url?: string;
  deviceType?: 'mobile' | 'desktop' | 'tablet';
  screenWidth?: number;
  screenHeight?: number;
  timestamp?: any;
  createdAtClient?: string;
}

export interface AffiliateClickRecord {
  id?: string;
  sessionId: string;
  buttonName: string;
  targetUrl: string;
  isClaimDiscount: boolean;
  deviceType: 'mobile' | 'desktop' | 'tablet';
  timestamp?: any;
  createdAtClient: string;
}

export interface AnalyticsSummary {
  totalVisits: number;
  totalAffiliateClicks: number;
  claimDiscountClicks: number;
  uniqueSessionsCount: number;
  buttonCounts: Record<string, number>;
  lastUpdated?: any;
}

// Local storage buffer fallback for offline resilience
const LOCAL_STORAGE_LOGS_KEY = 'vapofil_local_activity_logs';
const LOCAL_STORAGE_SUMMARY_KEY = 'vapofil_local_summary_counters';
const LOCAL_STORAGE_AFFILIATE_CLICKS_KEY = 'vapofil_local_affiliate_clicks';

export function getLocalFallbackLogs(): CustomerActivityLog[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_LOGS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getLocalSummary(): AnalyticsSummary {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_SUMMARY_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    totalVisits: 1,
    totalAffiliateClicks: 0,
    claimDiscountClicks: 0,
    uniqueSessionsCount: 1,
    buttonCounts: {},
  };
}

export function getLocalAffiliateClicks(): AffiliateClickRecord[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_AFFILIATE_CLICKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocalLog(log: CustomerActivityLog) {
  try {
    const existing = getLocalFallbackLogs();
    const updated = [log, ...existing].slice(0, 250);
    localStorage.setItem(LOCAL_STORAGE_LOGS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving local fallback log:', err);
  }
}

function updateLocalSummary(mutator: (prev: AnalyticsSummary) => AnalyticsSummary) {
  try {
    const current = getLocalSummary();
    const updated = mutator(current);
    localStorage.setItem(LOCAL_STORAGE_SUMMARY_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error updating local summary:', err);
  }
}

function saveLocalAffiliateClick(click: AffiliateClickRecord) {
  try {
    const current = getLocalAffiliateClicks();
    const updated = [click, ...current].slice(0, 100);
    localStorage.setItem(LOCAL_STORAGE_AFFILIATE_CLICKS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving local affiliate click:', err);
  }
}

/**
 * Record a page visit in Firestore and update atomic counters
 */
export async function recordVisitEvent() {
  const sessionId = getOrCreateSessionId();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const isTablet = typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false;
  const deviceType: 'mobile' | 'desktop' | 'tablet' = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

  // Update local counter
  updateLocalSummary((prev) => ({
    ...prev,
    totalVisits: (prev.totalVisits || 0) + 1,
  }));

  const visitPayload = {
    sessionId,
    deviceType,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    referrer: typeof document !== 'undefined' ? document.referrer : '',
    landingPage: typeof window !== 'undefined' ? window.location.href : '',
    screenWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    screenHeight: typeof window !== 'undefined' ? window.innerHeight : 0,
    createdAtClient: new Date().toISOString(),
  };

  try {
    const db = getFirebaseDb();
    if (db) {
      // 1. Add to visits collection
      await addDoc(collection(db, 'visits'), {
        ...visitPayload,
        timestamp: serverTimestamp(),
      });

      // 2. Increment global counters in summary document
      const summaryRef = doc(db, 'analytics_summary', 'counters');
      await setDoc(
        summaryRef,
        {
          totalVisits: increment(1),
          lastUpdated: serverTimestamp(),
        },
        { merge: true }
      );
    }
  } catch (err) {
    console.warn('Firestore visit logging notice (fallback to local):', err);
  }
}

/**
 * Record specifically an Affiliate Link Click ("Claim Your Discount", etc.)
 */
export async function recordAffiliateClick(buttonName: string, targetUrl: string) {
  const sessionId = getOrCreateSessionId();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const isTablet = typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false;
  const deviceType: 'mobile' | 'desktop' | 'tablet' = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

  const isClaimDiscount = /claim|desconto|garantir|discount/i.test(buttonName);

  const clickRecord: AffiliateClickRecord = {
    sessionId,
    buttonName,
    targetUrl,
    isClaimDiscount,
    deviceType,
    createdAtClient: new Date().toISOString(),
  };

  // 1. Save in local storage buffer
  saveLocalAffiliateClick(clickRecord);

  // 2. Update local summary
  updateLocalSummary((prev) => {
    const buttonCounts = { ...prev.buttonCounts };
    buttonCounts[buttonName] = (buttonCounts[buttonName] || 0) + 1;
    return {
      ...prev,
      totalAffiliateClicks: (prev.totalAffiliateClicks || 0) + 1,
      claimDiscountClicks: isClaimDiscount
        ? (prev.claimDiscountClicks || 0) + 1
        : prev.claimDiscountClicks || 0,
      buttonCounts,
    };
  });

  // 3. Save into Firestore dedicated collections
  try {
    const db = getFirebaseDb();
    if (db) {
      // Add to affiliate_clicks collection
      await addDoc(collection(db, 'affiliate_clicks'), {
        ...clickRecord,
        timestamp: serverTimestamp(),
      });

      // Also add to generic activity_logs for live telemetry stream
      await addDoc(collection(db, 'activity_logs'), {
        sessionId,
        eventType: 'affiliate_click',
        targetLabel: buttonName,
        url: targetUrl,
        deviceType,
        timestamp: serverTimestamp(),
        createdAtClient: clickRecord.createdAtClient,
      });

      // Atomically increment counter documents in analytics_summary
      const summaryRef = doc(db, 'analytics_summary', 'counters');
      const sanitizedKey = buttonName.replace(/[./[\]#$]/g, '_');
      await setDoc(
        summaryRef,
        {
          totalAffiliateClicks: increment(1),
          ...(isClaimDiscount ? { claimDiscountClicks: increment(1) } : {}),
          buttonCounts: {
            [sanitizedKey]: increment(1),
          },
          lastUpdated: serverTimestamp(),
        },
        { merge: true }
      );
    }
  } catch (err) {
    console.warn('Firestore affiliate click logging notice (stored locally):', err);
  }
}

/**
 * Generic customer activity recorder for scroll depth, sections and general clicks
 */
export async function recordCustomerActivity(
  data: Omit<CustomerActivityLog, 'sessionId' | 'createdAtClient' | 'deviceType' | 'screenWidth' | 'screenHeight'>
) {
  const sessionId = getOrCreateSessionId();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const isTablet = typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false;
  const deviceType: 'mobile' | 'desktop' | 'tablet' = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

  const fullPayload: CustomerActivityLog = {
    ...data,
    sessionId,
    deviceType,
    screenWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    screenHeight: typeof window !== 'undefined' ? window.innerHeight : 0,
    createdAtClient: new Date().toISOString(),
  };

  // Always save locally
  saveLocalLog(fullPayload);

  // Send to Cloud Firestore
  try {
    const db = getFirebaseDb();
    if (db) {
      await addDoc(collection(db, 'activity_logs'), {
        ...fullPayload,
        timestamp: serverTimestamp(),
      });
    }
  } catch (err) {
    console.warn('Firestore activity logging notice (stored locally):', err);
  }
}

/**
 * Initialize visitor session in Firestore
 */
export async function initializeVisitorSession() {
  const sessionId = getOrCreateSessionId();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const isTablet = typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false;
  const deviceType: 'mobile' | 'desktop' | 'tablet' = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

  const sessionData = {
    sessionId,
    deviceType,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    referrer: typeof document !== 'undefined' ? document.referrer : '',
    landingPage: typeof window !== 'undefined' ? window.location.href : '',
    startedAt: new Date().toISOString(),
  };

  try {
    const db = getFirebaseDb();
    if (db) {
      const sessionRef = doc(db, 'visitor_sessions', sessionId);
      await setDoc(
        sessionRef,
        {
          ...sessionData,
          lastActive: serverTimestamp(),
        },
        { merge: true }
      );
    }
  } catch (err) {
    console.warn('Visitor session init notice:', err);
  }

  // Also record visit in Firestore
  await recordVisitEvent();
}

/**
 * Real-time listener for aggregated counters
 */
export function subscribeToSummaryCounters(callback: (summary: AnalyticsSummary) => void): () => void {
  const db = getFirebaseDb();

  if (!db) {
    callback(getLocalSummary());
    return () => {};
  }

  try {
    const summaryRef = doc(db, 'analytics_summary', 'counters');
    const unsubscribe = onSnapshot(
      summaryRef,
      (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          callback({
            totalVisits: data.totalVisits || 1,
            totalAffiliateClicks: data.totalAffiliateClicks || 0,
            claimDiscountClicks: data.claimDiscountClicks || 0,
            uniqueSessionsCount: data.uniqueSessionsCount || 1,
            buttonCounts: data.buttonCounts || {},
            lastUpdated: data.lastUpdated,
          });
        } else {
          callback(getLocalSummary());
        }
      },
      (err) => {
        console.warn('Firestore summary subscription fallback to local:', err);
        callback(getLocalSummary());
      }
    );
    return unsubscribe;
  } catch (err) {
    console.warn('Summary subscription error:', err);
    callback(getLocalSummary());
    return () => {};
  }
}

/**
 * Real-time listener for recent affiliate clicks
 */
export function subscribeToAffiliateClicks(
  callback: (clicks: AffiliateClickRecord[]) => void,
  maxRecords: number = 50
): () => void {
  const db = getFirebaseDb();

  if (!db) {
    callback(getLocalAffiliateClicks());
    return () => {};
  }

  try {
    const q = query(
      collection(db, 'affiliate_clicks'),
      orderBy('timestamp', 'desc'),
      limit(maxRecords)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const clicks: AffiliateClickRecord[] = [];
        snapshot.forEach((d) => {
          clicks.push({ id: d.id, ...(d.data() as AffiliateClickRecord) });
        });

        if (clicks.length > 0) {
          callback(clicks);
        } else {
          callback(getLocalAffiliateClicks());
        }
      },
      (err) => {
        console.warn('Firestore affiliate clicks fallback to local:', err);
        callback(getLocalAffiliateClicks());
      }
    );
    return unsubscribe;
  } catch (err) {
    console.warn('Affiliate clicks subscription error:', err);
    callback(getLocalAffiliateClicks());
    return () => {};
  }
}

/**
 * Real-time listener for customer activity logs for the secret dashboard
 */
export function subscribeToCustomerActivity(
  callback: (logs: CustomerActivityLog[]) => void,
  maxLogs: number = 80
): () => void {
  const db = getFirebaseDb();

  if (!db) {
    callback(getLocalFallbackLogs());
    return () => {};
  }

  try {
    const q = query(
      collection(db, 'activity_logs'),
      orderBy('timestamp', 'desc'),
      limit(maxLogs)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const firestoreLogs: CustomerActivityLog[] = [];
        snapshot.forEach((docSnap) => {
          firestoreLogs.push({ id: docSnap.id, ...(docSnap.data() as CustomerActivityLog) });
        });

        if (firestoreLogs.length > 0) {
          callback(firestoreLogs);
        } else {
          callback(getLocalFallbackLogs());
        }
      },
      (error) => {
        console.warn('Firestore subscription fallback to local:', error);
        callback(getLocalFallbackLogs());
      }
    );

    return unsubscribe;
  } catch (err) {
    console.warn('Subscription initialization fallback:', err);
    callback(getLocalFallbackLogs());
    return () => {};
  }
}
