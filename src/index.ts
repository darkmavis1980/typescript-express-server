import express from 'express';

const port = 8000;
const app = express();

app.get('/', (req, res) => res.send('Healthy!'));

app.listen(port, () => {
  console.info(`The server has started at http://localhost:${port}`);
});
