const http = require('http')
const { readFileSync } = require('fs')

//get all files
const homepage = readFileSync('./home.html')
const aboutPage = readFileSync('./about.html')
const contactPage = readFileSync('./contact.html')

const server = http.createServer((req,res)=>{
    
    const url = req.url
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homepage)
        res.end()
    }
    else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(aboutPage)
        res.end()
    }
    else if(url === '/contact'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(contactPage)
        res.end()
    }
    else {
        res.writeHead(400, {'content-type': 'text/html'})
        res.write(homepage)
        res.end()
    }


})

server.listen(5000)