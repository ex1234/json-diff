import { readFileSync } from 'fs'
const [,,A,B] = process.argv
if(!A||!B){ console.log('Usage: node diff.js a.json b.json'); process.exit(1) }
const a = JSON.parse(readFileSync(A,'utf-8')), b = JSON.parse(readFileSync(B,'utf-8'))
const keys = new Set([...Object.keys(a), ...Object.keys(b)])
for(const k of keys){
  const av = a[k], bv = b[k]
  if(JSON.stringify(av)!==JSON.stringify(bv)){
    console.log(k, '->', 'A:', av, '| B:', bv)
  }
}
