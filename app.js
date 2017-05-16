const App = require('./server/app')
const port = process.env.PORT || 3005

App.create().listen(port)
console.log('App listening on port: ' + port)
