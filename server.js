const express = require('express');
const app = express();
const port = 8080;
const root = process.env.PUBLIC_URL || '/';


app.use(root, express.static('build'));

app.listen(port, () => {
    console.log('listening on port', port);
    console.log('site is running at:');
    console.log(`http://localhost:${port}${root}`);
});