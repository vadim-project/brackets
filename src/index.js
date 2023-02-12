module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  let flag = true;
  while (flag) {
    flag = false;
    for (let symbol in bracketsConfig) {
      for (let i = 0; i <= str.length; i++) {
        if (bracketsConfig[symbol][0] === str[i] && bracketsConfig[symbol][1] === str[i + 1]) {
          let asd = bracketsConfig[symbol][0] + bracketsConfig[symbol][1];
          str = str.replace(asd, '');
          
          i = 0;
          flag = true;
        }
      }
    }
  }
  if (str.length === 0) return true;
  else return false;
}

