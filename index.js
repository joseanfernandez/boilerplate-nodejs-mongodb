'use strict'

global = require('./global') // eslint-disable-line no-global-assign

mongoose.connect(databaseUrl, { useNewUrlParser: true }, (err) => {
  !err ? Log.success('Successfully connected to Scandgo database') : Log.error(err)
})

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
})

router.forEach((route) => { server.route(route) })

const init = async () => {
  await server.start()
  Log.success(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  Log.error(err)
})

init()
