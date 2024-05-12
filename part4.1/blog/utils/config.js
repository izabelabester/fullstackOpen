import dotenv from 'dotenv'
dotenv.config()

const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

let PORT = 3003;
// process.env.PORT

export default { PORT, MONGODB_URI }