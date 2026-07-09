import { getDb } from '@/lib/firebase'

const VISITED_FLAG = 'icaaicon-visited'

/**
 * Reads the global unique-visitor counter, incrementing it once per browser
 * (gated by a localStorage flag) on first visit. Returns null on any failure
 * (offline, blocked, rules rejection) so the caller can render nothing rather
 * than a broken/error state.
 */
export async function getAndMaybeIncrementVisitorCount(): Promise<number | null> {
  try {
    const db = await getDb()
    const { doc, getDoc, setDoc, increment } = await import('firebase/firestore/lite')
    const ref = doc(db, 'stats', 'visitors')

    const snap = await getDoc(ref)
    const baseline = snap.exists() ? (snap.data().count as number) : 0

    if (!localStorage.getItem(VISITED_FLAG)) {
      // Write first, flag after — an undercount from a failed post-write
      // flag-set is worse than an occasional harmless double-count.
      await setDoc(ref, { count: increment(1) }, { merge: true })
      localStorage.setItem(VISITED_FLAG, '1')
      return baseline + 1
    }

    return baseline
  } catch {
    return null
  }
}
