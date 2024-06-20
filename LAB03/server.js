const connect = require('connect');
const url = require('url');

const calculate = (req, res, next) => {
    const object = url.parse(req.url, true).query;
    const method = object.method;
    const x = parseFloat(object.x);
    const y = parseFloat(object.y);
    let output;
    let operation;

    if (method === 'add') {
        output = x + y;
        operation = '+';
    } else if (method === 'subtract') {
        output = x - y;
        operation = '-';
    } else if (method === 'multiply') {
        output = x * y;
        operation = '*';
    } else if (method === 'divide') {
        output = x / y;
        operation = '/';
    } else {
        res.end('Error: Invalid method');
        return;
    }

    res.end(`${x} ${operation} ${y} = ${output}`);
};

const welcomeMessage = `
    <h1>Welcome to Simple Calculator using node.js</h1>
    <p>Example Link: <a href="http://localhost:3000/calculate?method=add&x=20&y=15">http://localhost:3000/calculate?method=add&x=20&y=15</a></p>
    <p>Use above link as an example to perform calculations.</p>
    <P>For method you can use: add, subtract, divide, multiply.</p>
    <p>For x and y use any numbers of your choice :)</p>`;

const app = connect();

app.use('/calculate', calculate);

app.use((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(welcomeMessage);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
