const express = require(`express`)
const app = express()
const port = 4000 || process.env.port

app.get(`/`, (req, res) => {
    res.status(200).send(`Hello World`)
})

app.get(`/api/v1/instagram`, (req, res) => {
    const instaSocial = {
        username: "jamesbondIG",
        followers: 77,
        follows: 10,
        date: Date.now()
    }
    res.status(200).json(instaSocial)
})
app.get(`/api/v1/facebook`, (req, res) => {
    const instaSocial = {
        username: "jamesbondFB",
        followers: 77,
        follows: 10,
        date: Date.now()
    }
    res.status(200).json(instaSocial)
})
app.get(`/api/v1/linkedin`, (req, res) => {
    const instaSocial = {
        username: "jamesbondLinkedin",
        followers: 77,
        follows: 10,
        date: Date.now()
    }
    res.status(200).json(instaSocial)
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})