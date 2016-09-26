
import path from 'path'

const BASE = path.resolve(__dirname, '..')
const NODE_ENV = JSON.stringify(process.env.NODE_ENV)

const config = {
	env  : process.env.NODE_ENV || 'development',
	port : process.env.PORT || 3000,
	host : process.env.HOST || 'localhost',
	db   : {
		name: 'ohhi',
		tables: [
			{ table:'users', index: 'email' },
			{ table: 'messages', index: 'id' }
		]
	}
}

config.paths = {
	base : BASE,
	src  : `${BASE}/src`,
	app  : `${BASE}/src/client`,
	server: `${BASE}/src/server`,
	dist : `${BASE}/dist`,
}

config.globals = {
	'process.env': {
    'NODE_ENV': JSON.stringify(config.env)
  },
  'NODE_ENV' : config.env,
  '__DEV__'  : config.env === 'development',
  '__PROD__' : config.env === 'production'
}

config.rethink = {
	db: 'ohhi',
	servers: {
		host : process.env.HOST || 'localhost',
		port: 28015
	}
}

export default config