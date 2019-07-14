export const isMobile = (): boolean => {
  // @ts-ignore
  if (window.navigator !== 'undefined' && /Mobi|Android/i.test(window.navigator.userAgent)) {
    return true
  }
  return false
}
