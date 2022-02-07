module.exports = function toReadable (number) {
   
  const num = Number(number)
  if (isNaN(num)) return ''
  if (num === 0) return 'zero'

  const numStr = num.toString()
  if (numStr.length > 9) {
    throw new Error('overflow') 
  }

  const [, n1, n2, n3, n4, n5] = ('000000000' + numStr).substr(-9).match(regex)

  let str = ''
  str += n1 != 0 ? (getLT20(n1) || getGT20(n1)) + 'crore ' : ''
  str += n2 != 0 ? (getLT20(n2) || getGT20(n2)) + 'lakh ' : ''
  str += n3 != 0 ? (getLT20(n3) || getGT20(n3)) + 'thousand ' : ''
  str += n4 != 0 ? getLT20(n4) + 'hundred ' : ''
  str += n5 != 0 && str != '' ? 'and ' : ''
  str += n5 != 0 ? (getLT20(n5) || getGT20(n5)) : ''

  return str.trim()
}
}
