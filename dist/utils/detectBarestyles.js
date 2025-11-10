let warned = false;
let cachedResult = null;
export function isBarestylesInstalled() {
    // Return cached result if available
    if (cachedResult !== null) {
        return cachedResult;
    }
    try {
        // Try to dynamically import barestyles to check if it exists
        // This is a synchronous check that works in ESM environments
        // We use a try-catch with import.meta.resolve if available, otherwise assume it's installed
        if (typeof import.meta?.resolve === 'function') {
            try {
                import.meta.resolve('barestyles');
                cachedResult = true;
                return true;
            }
            catch {
                cachedResult = false;
                if (!warned) {
                    // console.warn(
                    //     '[Skeletix] TailwindCSS plugin "barestyles" is not installed. Some utility classes may not render as expected.'
                    // );
                    warned = true;
                }
                return false;
            }
        }
        // Fallback: assume barestyles is installed (it's a peer dependency)
        cachedResult = true;
        return true;
    }
    catch (e) {
        cachedResult = false;
        if (!warned) {
            // console.warn(
            //     '[Skeletix] TailwindCSS plugin "barestyles" is not installed. Some utility classes may not render as expected.'
            // );
            warned = true;
        }
        return false;
    }
}
