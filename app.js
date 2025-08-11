// const name=require('./names');
// const sayhello=require('./sayhi');

// // console.log(name.b);
// // sayhello('ggf')
// const sum =require('./mind-grenade')
// sum()




// const os=require('os')
// console.log(os.userInfo())

// const {readFileSync,writeFileSync}=require('fs');

// const firstone=readFileSync('./Conten/first.txt','utf8')
// const secondone=readFileSync('./Conten/second.txt','utf8')

// // console.log(firstone);
// writeFileSync('./Conten/result-sync',`${firstone} ${secondone}`,{flag:'a'})



// const {readFile ,writeFile}=require('fs');

// readFile('./Conten/first.txt','utf8',(err,result)=>{
//     if(err) {console.log("error"); return}
    

// const first =result;
// readFile('./Conten/second.txt','utf8',(err,result)=>{
//     if(err) {console.log("error");return}

// const second =result;
// writeFile('./Conten/new-result-sync',`${first},${second}`,(err,result)=>{
//     if(err) console.log("error aagya"); return;

// })
// })
// })


// const http=require('http')

// const server=http.createServer((req,res)=>{
//   if(req.url===('/')){
//     res.end('welcome to the website');
//   }else if (req.url===('/about')){
//     res.end('this is about page')
//   }
//   else {
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
// }
// })

// server.listen(5010)



const ab=require('lodash')
let items=[1,[2,[3,[4]]]]

const newitems=ab.flattenDeep(items)
console.log(newitems)