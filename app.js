const http = require('http')
const sever = http.createServer((req,res)=>{
    if(req.url == '/hello'){
        res.writeHead(200,{'Content-type': 'text/html'})
        res.write('Hello World!')
        res.end()
    }
    else if(req.url == '/student'){
        res.writeHead(200,{'Content-type': 'text/html'})
        res.write('<h1>This is student Page!</h1>')
        res.end()
    }
    else if(req.url == '/admin'){
        res.writeHead(200,{'Content-type': 'text/html'})
        res.write('<h1>This is admin Page!</h1>')
        res.end()
    }
    else{
        res.end('<h1>404</h1>')
    }
})

sever.listen(5000,()=> {
    console.log(`Sever start at http://localhost:5000/`)
})