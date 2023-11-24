const http = require('http');
const fs = require('fs');

function getMimeType(extension) {
    switch (extension) {
        case 'txt':
            return 'text/plain';
        case 'html':
            return 'text/html';
        case 'css':
            return 'text/css';
        case 'js':
            return 'text/javascript';
        case 'jpg':
            return 'image/jpeg';
        case 'png':
            return 'image/png';
        default:
            return 'text/html';
    }
}

http.createServer((request, response) => {
    const file = request.url == '/' ? './WWW/index.html' : `./WWW/${request.url}`;

    if (request.url == '/contacto' && request.method == 'POST') { // /contacto
        let data = [];
        request.on("data", (value) => {
            data.push(value);
        }).on("end", () => {
            let params = Buffer.concat(data).toString();
            let contactFile = fs.createWriteStream("./contacto.txt", { "flags": "a" }); // abrir el archivo de contacto
            contactFile.write(decodeURIComponent(params.replaceAll('&',',')) + "\n"); // escribir los datos
            contactFile.end();
            response.writeHead(303, { "Location": "/" }); // Redireccionar al indice
            response.end();
        });
    } else {
        fs.readFile(file, (err, data) => {
            if (err) {
                response.writeHead(404, { "Content-Type": "text/html" });
                response.write("Not found");
                response.end();
            } else {
                const extension = request.url.split('.').pop();
                response.writeHead(200, { "Content-Type": getMimeType(extension) });
                response.write(data);
                response.end();
            }

        });
    }
}).listen(8888); // 1. Puerto 8888