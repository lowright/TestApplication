ceasar = ( str, step ) => {
// ceasar func 2 params (
//     str - String,
//     step - Number
// )

    let alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T" ,"U", "V", "W", "X", "Y", "Z"]
    
    let cipherArray = str.toUpperCase().split("")
    let decrypted = []
  
    for ( let i = 0; i < cipherArray.length ; i++ ){
      if ( /[A-Z]/.test(cipherArray[i]) ){
  
        let numToDecode = alphabetArray.indexOf( cipherArray[i] )
        let decodedNumber = 0
        if ( numToDecode + step >= alphabetArray.length ) {
          decodedNumber = numToDecode + step - alphabetArray.length
        } else { 
          decodedNumber = numToDecode + step}
        decrypted = decrypted.concat( alphabetArray[decodedNumber] )
      } else {
        decrypted = decrypted.concat( cipherArray[i] )
      }
    }
  
    decrypted = decrypted.join("")
    
    return decrypted; 
}
  


console.log( ceasar(" ",  ) ) //FIX ME !!!!