const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Uncommon Error: Unexpected token error
//This error occurs when there is a syntax error in your javascript code
//It could be a missing semicolon, bracket, or parenthesis or a typo in a keyword