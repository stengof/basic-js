class VigenereCipheringMachine {

  constructor(boolean) {
    if (boolean === true || boolean === undefined) {
      this.encrypt = this._directEncrypt;
      this.decrypt = this._directDecrypt;
    }
    if (boolean === false) {
      this.encrypt = this._reverseEncrypt;
      this.decrypt = this._reverseDecrypt;
    }
  }

  _encryptChar(char, cipher) {
    let charPos = char.charCodeAt() - 97;
    let cipherCharPos = cipher.charCodeAt() - 97;
    let cryptPos = charPos + cipherCharPos + 97;

    if (cryptPos > 122)  cryptPos -= 26;
    return String.fromCharCode(cryptPos);
  }

  _encryptString(str, cipher) {
    let arrStr = str.toLowerCase().split('');
    let arrCipher = cipher.toLowerCase().split('');
    let arrEncrypt = [];

    let strLettersLength = 0;
    let arrCipherLengthDeffault = arrCipher.length;

    for (let i = 0; i < arrStr.length; i++) {
      if ( /[a-z]/.test(arrStr[i]) ) ++strLettersLength;
    }

    while ( !(arrCipher.length === strLettersLength) ) {
      if (arrCipher.length > strLettersLength) arrCipher.pop();

      if (arrCipher.length < strLettersLength) {
        for ( let i = 0; i < arrCipherLengthDeffault; i++ ) {
          arrCipher.push(arrCipher[i])
          if (arrCipher.length === strLettersLength) break;
        }
      }
    }

    for ( let i = 0, j = 0; i < arrStr.length; i++ ) {
      if ( /[a-z]/.test(arrStr[i]) ) arrEncrypt.push( this._encryptChar(arrStr[i], arrCipher[j++]) )
      else arrEncrypt.push(arrStr[i]);
    }

    return arrEncrypt.join('').toUpperCase();
  }

  _decryptChar(encrypt, cipher) {
    let encryptPos = encrypt.charCodeAt() - 97;
    let cipherPos = cipher.charCodeAt() - 97;
    let cryptPos = encryptPos - cipherPos + 97;

    if (cryptPos < 97)  cryptPos += 26;
    return String.fromCharCode(cryptPos);
  }

  _decryptString(str, cipher) {
    let arrStr = str.toLowerCase().split('');
    let arrCipher = cipher.toLowerCase().split('');
    let arrDecrypt = [];

    let strLettersLength = 0;
    let arrCipherLengthDeffault = arrCipher.length;

    for (let i = 0; i < arrStr.length; i++) {
      if ( /[a-z]/.test(arrStr[i]) ) ++strLettersLength;
    }

    while ( !(arrCipher.length === strLettersLength) ) {
      if (arrCipher.length > strLettersLength) arrCipher.pop();
      if (arrCipher.length < strLettersLength) {
        for ( let i = 0; i < arrCipherLengthDeffault; i++ ) {
          arrCipher.push(arrCipher[i])
          if (arrCipher.length === strLettersLength) break;
        }
      }
    }

    for ( let i = 0, j = 0; i < arrStr.length; i++ ) {
      if ( /[a-z]/.test(arrStr[i]) ) arrDecrypt.push( this._decryptChar(arrStr[i], arrCipher[j++]) )
      else arrDecrypt.push(arrStr[i]);
    }

    return arrDecrypt.join('').toUpperCase();
  }

  _checkArgs(str, cipher) {
    if (str === undefined || cipher === undefined) throw 'Error: arguments are not defined';
  }

  _directEncrypt(str, cipher) {
    this._checkArgs(str, cipher);
    return this._encryptString(str, cipher);
  }

  _directDecrypt(str, cipher) {
    this._checkArgs(str, cipher);
    return this._decryptString(str, cipher);
  }


  _reverseEncrypt(str, cipher) {
    this._checkArgs(str, cipher);
    return this._encryptString(str, cipher).split('').reverse().join('');
  }

  _reverseDecrypt(str, cipher) {
    this._checkArgs(str, cipher);
    return this._decryptString(str, cipher).split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
