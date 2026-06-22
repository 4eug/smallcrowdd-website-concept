const introBypassStorageKey = 'smallcrowdd:intro-bypass-until';
const introBypassDurationMs = 5000;

export function markIntroBypassedForInternalNavigation() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.sessionStorage.setItem(introBypassStorageKey, String(Date.now() + introBypassDurationMs));
  } catch {
    // Storage can be unavailable in private or restricted contexts; normal routing still works.
  }
}

export function consumeIntroBypassForInternalNavigation() {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    const bypassUntil = Number(window.sessionStorage.getItem(introBypassStorageKey));
    window.sessionStorage.removeItem(introBypassStorageKey);

    return Number.isFinite(bypassUntil) && bypassUntil > Date.now();
  } catch {
    return false;
  }
}
