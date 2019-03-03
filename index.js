process.env.UV_THREADPOOL_SIZE = 1
const cluster = require('cluster')

// Is the file being executed in master mode?
if (cluster.isMaster) {
  // cause index.js to be executed *again* but 
  // in child mode
  cluster.fork()
  cluster.fork()
  cluster.fork()
  cluster.fork()
  cluster.fork()
} else {
  // Im a child, Im going to act like a server
  // and do nothing else
  const express = require('express')
  const crypto = requir('crypto')
  const app = express()
  const Worker = require('webworker-threads').Worker

  app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      res.send('Hi')
    });
  })

  app.get('/fast', (req, res) => {
    res.send('fast')
  })

  app.listen(3000)

}