import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import config from './utils/config.js'
import router from './controllers/blogs.js'
import middleware from './utils/middleware.js'
import logger from './utils/logger.js'

const app = express()

logger.info(`Connecting to ${config.MONGODB_URI}`)

mongoose
    .connect(config.MONGODB_URI)
    .then(() => logger.info('Connected to database'))
    .catch((error) => logger.error('Error connecting to database', error.message))

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', router)

app.use(middleware.errorHandler)

export default app