// src/server.js
import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());
app.use(
  pino({
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
        messageFormat: '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
        hideObject: true,
      },
    },
  }),
);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello RR!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
