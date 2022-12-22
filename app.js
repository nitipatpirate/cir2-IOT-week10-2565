const http = require('http')
const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.write('<h1>This is Home page!</h1>')
        res.end()
    }
    else if(req.url == '/student'){
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.write('<h1>This is Student Page!</h1>')
        res.end()
    }
    else if(req.url == '/admin'){
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.write('<h1>This is Amin Page!</h1>')
        res.end()
    }
    else{
        res.end('<h1>404</h1>')
    }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT,()=>{
    console.log(`Server start at http://localhost:${PORT}`)
})