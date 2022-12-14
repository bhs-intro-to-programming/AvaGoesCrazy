const upToX = (s) => s.substring(0, s.indexOf('x'));

const charactersAround = (s, i) => s[i - 1] + s[i + 1];

const middle = (s) => s.substring(s.length / 4, s.length - (s.length / 4));

const pair = (s, i) => s + ' and ' + i;

const containsX = (s) => {
  if (s.indexOf('x' === -1)) {
    return false
  } else
    return true
};

const slug = (x, y, z) => x.toLowerCase() + '-' + y.toLowerCase() + '-' + z.toLowerCase()

const capitalize = (s) => s[0].toUpperCase() + s.substring(1).toLowerCase()

const capitalizeName = (s) => capitalize(s.substring(s[0], s.indexOf(' '))) + ' ' + capitalize(s.substring(s.indexOf(' ') + 1))