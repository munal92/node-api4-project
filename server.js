const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const shortid = require('shortid');
const todoRouter = require('./todo-router.js');
const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(helmet());
server.use('/api/todo',todoRouter);

server.get("/", (req, res) => {
    // res.send(`
    // <h2>Lambda Hubs API</h2>
    // <p>Welcome to the Lambda Hubs API</p>
    // `);
    res.status(404).json({message:"API working please request from http://localhost:5000/api/todo"})
  });

module.exports = server;
