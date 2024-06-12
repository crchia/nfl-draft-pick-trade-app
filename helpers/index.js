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

export const getTeamLogo = (teamAbr) =>
  `https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/${teamAbr}`