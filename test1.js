var crypto = require('crypto')
,shasum = crypto.createHash('sha1')
,text = 'I love cupcakes'
,key = 'abcdeg'
,hash = crypto.createHash('sha1').update(text).digest('hex');
console.log(hash);