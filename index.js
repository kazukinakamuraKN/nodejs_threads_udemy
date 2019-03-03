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
  cluster.fork()
  cluster.fork()
  cluster.fork()
  cluster.fork()
  cluster.fork()
  cluster.fork()
  cluster.fork()
  cluster.fork()
} else {
  // Im a child, Im going to act like a server
  // and do nothing else
  const express = require('express')
  const app = express()

  dowork = (duration) => {
    const start = Date.now()
    while (Date.now() - start < duration) { }
  }

  app.get('/', (req, res) => {
    dowork(5000)
    res.send('Hi')
  })

  app.get('/fast', (req, res) => {
    res.send('fast')
  })

  app.listen(3000)

}