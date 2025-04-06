/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
  // Patch ResizeObserver to suppress loop errors
  const OriginalResizeObserver = window.ResizeObserver;

  window.ResizeObserver = function (callback) {
    return new OriginalResizeObserver((entries, observer) => {
      try {
        callback(entries, observer);
      } catch (err) {
        if (err.name !== 'ResizeObserverLoopError') {
          throw err;
        }
        // Suppress loop errors silently
      }
    });
  };

  // Keep prototype chain intact for instanceof checks
  window.ResizeObserver.prototype = OriginalResizeObserver.prototype;

  // Suppress console noise in dev
  const observerErr = 'ResizeObserver loop completed with undelivered notifications.';
  const origConsoleError = console.error;

  console.error = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes(observerErr)) return;
    origConsoleError(...args);
  };
}