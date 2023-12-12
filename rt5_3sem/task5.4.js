// 5.4
function isDenormalized(char) {
  return char.normalize("NFKD").length > 1
}

const isTrue = true
if (isTrue) {
  for (let i = 0x20; i < 0xFFFF; ++i) {
    let s = String.fromCodePoint(i)
    if (isDenormalized(s)) console.log(s)
  }
}