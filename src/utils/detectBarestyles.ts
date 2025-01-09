let warned = false;

export function isBarestylesInstalled(): boolean {
    try {
        require.resolve('barestyles');
        return true;
    } catch (e) {
        if (!warned) {
            console.warn(
                '[Skeletics] TailwindCSS plugin "barestyles" is not installed. Some utility classes may not render as expected.'
            );
            warned = true;
        }
        return false;
    }
}
