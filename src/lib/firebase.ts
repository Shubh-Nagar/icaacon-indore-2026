import type { FirebaseApp } from 'firebase/app'
import type { Firestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

let dbPromise: Promise<Firestore> | null = null

/**
 * Lazily loads the Firestore Lite SDK (code-split into its own chunk, never
 * part of the main bundle) and returns a cached Firestore singleton.
 */
export function getDb(): Promise<Firestore> {
  if (!dbPromise) {
    dbPromise = (async () => {
      const [{ initializeApp, getApps, getApp }, { getFirestore }] = await Promise.all([
        import('firebase/app'),
        import('firebase/firestore/lite'),
      ])
      const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig)
      return getFirestore(app)
    })()
  }
  return dbPromise
}
