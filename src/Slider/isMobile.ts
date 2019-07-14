export const isMobile = (): boolean => {
  // @ts-ignore
  // tslint:disable-next-line: strict-type-predicates
  if (typeof window !== 'undefined' && window.navigator && /Mobi|Android/i.test(window.navigator.userAgent)) {
    return true
  }
  return false
}
