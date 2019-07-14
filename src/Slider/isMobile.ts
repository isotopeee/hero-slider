export const isMobile = (): boolean => {
  // @ts-ignore
  if (window !== 'undefined' && window.navigator && /Mobi|Android/i.test(window.navigator.userAgent)) {
    return true
  }
  return false
}
