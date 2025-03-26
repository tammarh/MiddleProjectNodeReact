require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const corsOptions = require("../server/config/corsOptions")
const connectDB = require("../server/config/dbConn")
const app = express()
const PORT = process.env.PORT || 7000
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use("/api/users",require('./routes/userRoute'))
app.use("/api/todos",require('./routes/todoRoute'))
app.use("/api/posts" , require('./routes/postRoute'))
app.use("/api/photos", require("./routes/photoRoute"))


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
})
mongoose.connection.on('error', err => {
    console.log(err)
})
