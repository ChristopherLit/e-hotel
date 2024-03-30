import express from 'express';
import cors from 'cors';
import router from './src/backend/routes.js'

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('REST API for Hotel Booking App');
});

app.use('/api', router);


app.listen(port, () => (
  console.log(`Server is running on port ${port}`)));