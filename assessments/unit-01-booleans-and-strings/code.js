/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const fireAlarm = (alarmPulled, smokeDetected, plannedDrill) => {
  return (alarmPulled || smokeDetected || plannedDrill)
}

const canBePresident = (age, isNatCitizen, yearsOfRes) => {
  return (age > 30 && isNatCitizen && yearsOfRes > 14)
}

const willSeeTweet = (followsTweeter, followsRetweeter, isBlocked) => {
  return (followsTweeter || followsRetweeter) && !isBlocked
}

const evenGreaterThanZero = (num) => {
  return (num % 2 === 0) && (num > 0)
}

const isLeapYear = (yearNum) => {
  return (yearNum % 4 === 0) && !(yearNum % 100 === 0)
}

const firstAndLast = (s) => {
  return s[0] + s.substring(s.length - 1)
}

const swapFrontAndBack = (s) => {
  return s.substring(s.length / 2)
}