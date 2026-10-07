const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/name', (req, res) => {
    res.json({
        "name": "Thanakrit Phetnoy",
        "nickname": "กาย",
        "age": "17",
        "facebook": "Thanakrit Phetnoy",
        "instagram": "thakrit_zx"
    })
})

app.listen(3000, () => {
    console.log("Server starts successfully at port 3000")
})
