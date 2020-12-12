const angka = 2000012342123111
const harga = '' + angka

const label = harga.split('')
let count = 0
for (let i = label.length; i >= 0; i--) {
  if (i === label.length) {
    count++
    continue
  }
  if (count % 3 === 0) {
    label.splice(i, 0, '.')
  }
  count++
}
if (label[0] === '.') {
  label.shift()
}
console.log(label.join(''))
