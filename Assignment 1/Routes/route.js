const fs = require('fs');


const requestHandler = (req, res) => {
    const url = req.url

    if(url === "/"){
        res.setHeader('Content-type', 'text/html');
        res.write("<html>");
        res.write("<head><title>Greetings Page</title></head>")
        res.write('<body><form action ="/create-user" method="POST"><input type="username"><button type="submit">send</button></form></body>');
        res.write("</html>")
        return res.end();
    }
    if( url ==='/users'){
        res.setHeader('Content-type', 'text/html');
        res.write("<html>");
        res.write("<head><title>Greetings Page</title></head>")
        res.write("<body><ul><li>User 1</li><ul><li>User 2</li></ul></body>");
        res.write("</html>")
        res.end();

    }

    if(url==='/create-user'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody.split('=')[1]);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    
}








module.exports = requestHandler;
