const buf = Buffer.from('runoob', 'ascii');

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

const buf2 = Buffer.from(buf.toString('hex'),'hex')
console.log(buf2.toString())
