# Módulo HTTP 
O módulo HTTP permite criar e gerenciar seu próprio servidor web com NodeJS.

O que é um servidor web:
* Permite acessar arquivos, páginas e base de dados 
* Contém software para receber URLs e requests via o protocolo HTTP, e responder a elas.

# Criando um servidor:
```js
const http = require("http");

const server = http.createServer((request, response) => {
    // code to process the request and manufacture the response       
    response.end("End of the response message");
})

server.listen(port, "localhost", () => {
    // callback function executed 
    // after the server starts listening at that port
})
```