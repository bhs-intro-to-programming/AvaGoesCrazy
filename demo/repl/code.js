let alpha = 'abcdefghijklmnopqrstuvwxyz'

//NOTE TO SELF str = string | cNum = caesar cipher number | sNum is the number point into 
//the string | str2 = new string

const makeCaesar = (str, key) => {
  let str2 = ''
  for (let sNum = 0; sNum < str.length; sNum++)
    if (alpha.indexOf(str[sNum - 1]) + key > 26) {
      str2 = str2 + alpha[((alpha.indexOf(str[sNum - 1]) + key) - 26) - 1]
      console.log
    } else {
      str2 = str2 + alpha[(alpha.indexOf(str[sNum - 1]) + key) -1]
      console.log 
    }
  return str2
}

//I DID IT YEEEEAHHHH

//Intrstructions: this function takes two arguments, a string and the key you want to use
//for your caesar cipher and then returns the first sring as a caesar cipher!