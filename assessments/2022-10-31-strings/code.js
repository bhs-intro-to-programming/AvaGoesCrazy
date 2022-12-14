/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton and more credit for a skeleton with a
// reasonable argument list. To get full credit you need to write a correct
// function but you can get partial credit for a function that is basically
// correct even if contains small mistakes.

const firstHalf = (s) => s.substring(0, (s.length / 2));

const secondHalf = (s) => s.substring(s.length / 2);

const upDown = (s) => s.toUpperCase() + s.toLowerCase();

const firstFewEveryOther = (s) => s[0] + s[2] + s[4];

const upDownLastCharacter = (s) => s[s.length - 1].toUpperCase() + s[s.length - 1].toLowerCase();

const firstAndLast = (s) => s[0] + s[s.length - 1];

const swapFrontAndBack = (s) => s.substring(s.length / 2) + s.substring(0, (s.length / 2));

const simplePigLatin = (s, x) => s.substring(x - 1) + s.substring(0, x - 1) + 'ay';