function palindrome(str) {

    let re = /[\W_]/g
    let newStr = str.toLowerCase().replace(re,'')
    let reverseStr = newStr.split('').reverse().join('')

    return reverseStr === newStr ? true : false

}

palindrome("Oso")
palindrome("Coche")