const http = require("http")
const port = 8080

const server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" })
  response.end(`Hello World: ${process.env.MY_NODE_ENV}`)
})

server.listen(port)

console.log("Server running at http://localhost:" + port)
