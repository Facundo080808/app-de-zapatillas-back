import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";

import router from "./routes/index.route.mjs";

import "./db.mjs";

const server = express();

server.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:5173/','*'];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
  }
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use(express.json())
server.set('name', 'api');
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

server.use((req, res, next) => {
  console.log(`\n${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log('Body:', req.body);
  } else {
    console.log('No Body');
  }
  next();
});
// Middleware de rutas
server.use('/', router);

// Middleware de manejo de errores
/**
server.use((err, req, res, next) => {
  
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
}); */

export default server;




