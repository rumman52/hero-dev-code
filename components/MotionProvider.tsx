'use client';

import { createContext, useContext, useMemo, useState, useSyncExternalStore } from 'react';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

type MotionContextValue = {
  enabled: boolean;
  toggle: () => void;
};

const MotionContext = createContext<MotionContextValue>({ enabled: false, toggle: () => {} });

function subscribeToReducedMotion(onStoreChange: () => void) {
  const mediaQueryList = window.matchMedia(reducedMotionQuery);
  mediaQueryList.addEventListener('change', onStoreChange);

  return () => mediaQueryList.removeEventListener('change', onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getServerReducedMotionSnapshot() {
  return true;
}

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
  const [manualEnabled, setManualEnabled] = useState<boolean | null>(null);
  const enabled = manualEnabled ?? !prefersReducedMotion;
  const value = useMemo(
    () => ({ enabled, toggle: () => setManualEnabled((value) => !(value ?? enabled)) }),
    [enabled],
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useMotionSetting() {
  return useContext(MotionContext);
}
