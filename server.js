const express = require('express')
const app = express()

const port = 8000

app.listen(port, () => console.log("Server running on port: 8000"))
app.get("/",(req, res) => res.send("Hello, app is running..."))