function findShort (str) {

    let newStr = str.split('')
    let word = newStr.map(item => item.length)
    let short = Math.min(...word)
    let max = Math.max(...word)

}

findShort("bitcoin take over the world maybe who knows perhaps")