import dotenv from 'dotenv'
dotenv.config()

let PORT = 3003;
// process.env.PORT
let MONGODB_URI = 'mongodb+srv://izabester1:OLCFr0zRzvMPMhh4@cluster0.o4bh3qk.mongodb.net/?retryWrites=true&w=majority'
// `mongodb+srv://izabester1:${password}@cluster0.o4bh3qk.mongodb.net/noteApp?retryWrites=true&w=majority`
// process.env.MONGODB_URI

export default { PORT, MONGODB_URI }