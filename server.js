import express from 'express';
import router from './src/backend/routes.js'

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api', router);


app.listen(port, () => (
  console.log(`Server is running on port ${port}`)));