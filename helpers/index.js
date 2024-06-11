/**
 *
 * @param {Number} val
 * @param {Number} dec
 * @param {String} alt
 * @returns {String} val rounded to exactly dec decimal places
 *          if val is null, return an alternate String
 */
export const roundExact = (val, dec = 1, alt = '-') => {
  const nulls = new Set(null, undefined, NaN, '')
  return !nulls.has(val) ? val.toFixed(dec) : alt
}
