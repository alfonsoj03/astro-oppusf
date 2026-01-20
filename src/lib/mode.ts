/**
 * Mode Management Utilities (Client-Side)
 * 
 * Landing mode is accessible ONLY via /productos?mode=bienvenida
 * Once the user visits Home (/), they transition to e-commerce mode permanently.
 * 
 * Storage Keys:
 * - oppus_mode: "landing" | "ecommerce" | null
 * - oppus_home_visited: "true" | null
 */

const STORAGE_KEYS = {
    MODE: 'oppus_mode',
    HOME_VISITED: 'oppus_home_visited',
} as const;

type AppMode = 'landing' | 'ecommerce';

/**
 * Check if localStorage is available (client-side only)
 */
function isStorageAvailable(): boolean {
    try {
        const test = '__storage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch {
        return false;
    }
}

/**
 * Get the current mode from localStorage
 */
export function getCurrentMode(): AppMode | null {
    if (!isStorageAvailable()) return null;
    return localStorage.getItem(STORAGE_KEYS.MODE) as AppMode | null;
}

/**
 * Check if user has visited Home page
 */
export function hasVisitedHome(): boolean {
    if (!isStorageAvailable()) return false;
    return localStorage.getItem(STORAGE_KEYS.HOME_VISITED) === 'true';
}

/**
 * Check if landing mode can be entered
 * Landing mode is allowed if:
 * 1. User hasn't visited Home yet
 * 2. OR if we are explicitly forcing it via query param (handled in resolveMode)
 */
export function canEnterLandingMode(): boolean {
    if (!isStorageAvailable()) return false;
    const homeVisited = hasVisitedHome();

    // If visited home, we usually block landing mode UNLESS forced
    if (homeVisited) {
        return false;
    }

    return true;
}

/**
 * Check if currently in landing mode
 */
export function isLandingMode(): boolean {
    return getCurrentMode() === 'landing';
}

/**
 * Set landing mode
 * @param force - If true, bypass the canEnterLandingMode check
 */
export function setLandingMode(force: boolean = false): boolean {
    if (!force && !canEnterLandingMode()) return false;
    if (!isStorageAvailable()) return false;

    localStorage.setItem(STORAGE_KEYS.MODE, 'landing');
    // If we are forcing landing mode, we might want to "reset" the home visited flag 
    // if the user wants a completely fresh landing experience, but the requirement 
    // says "only way of going to landing is via query", so we'll just set the mode.
    return true;
}

/**
 * Set e-commerce mode
 */
export function setEcommerceMode(): void {
    if (!isStorageAvailable()) return;
    localStorage.setItem(STORAGE_KEYS.MODE, 'ecommerce');
}

/**
 * Mark that the user has visited Home
 * This triggers transition from landing to e-commerce mode
 */
export function markHomeVisited(): void {
    if (!isStorageAvailable()) return;
    localStorage.setItem(STORAGE_KEYS.HOME_VISITED, 'true');
    setEcommerceMode();
}

/**
 * Determine the effective mode based on URL and storage state.
 * Call this on page load to determine which variant to show.
 * 
 * @param url - Current page URL
 * @returns The mode to display: 'landing' or 'catalog'
 */
export function resolveMode(url: URL): 'landing' | 'catalog' {
    const modeParam = url.searchParams.get('mode');

    // Check for ?mode=bienvenida entry point
    if (modeParam === 'bienvenida') {
        // Force landing mode regardless of previous state
        setLandingMode(true);
        return 'landing';
    }

    // Not at entry point, check current mode
    if (isLandingMode()) {
        return 'landing';
    }

    return 'catalog';
}

/**
 * Remove the mode query parameter from URL without reload
 */
export function cleanModeFromUrl(): void {
    const url = new URL(window.location.href);
    if (url.searchParams.has('mode')) {
        url.searchParams.delete('mode');
        window.history.replaceState({}, '', url.toString());
    }
}

/**
 * Get the appropriate link for navigation based on current mode
 * In landing mode, preserve the mode context
 */
export function getModeAwareLink(basePath: string): string {
    if (isLandingMode()) {
        // In landing mode, add mode param to stay in landing
        const url = new URL(basePath, window.location.origin);
        url.searchParams.set('mode', 'bienvenida');
        return url.pathname + url.search;
    }
    return basePath;
}
