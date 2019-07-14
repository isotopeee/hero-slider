export const isMobile = (): boolean => {
  if (navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)) {
    return true
  }
  return false
}
