"use client";

import { useSyncExternalStore } from "react";

const noSubscription = () => () => {};

// Current year, read in the browser so the static page never shows a stale year.
export function CurrentYear() {
  const year = useSyncExternalStore(noSubscription, () => new Date().getFullYear(), () => null);
  return <>{year}</>;
}
