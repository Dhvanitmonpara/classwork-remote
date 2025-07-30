import express from "express"
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Welcome to the server')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            text: 'joe, you are here for the first time',
            id: 101
        },
        {
            text: 'what do you call a pig that can fly?',
            id: 102
        },
        {
            text: 'what do you call a person who has lost their balance?',
            id: 103
        },
        {
            text: 'what do you call a person who is currently learning about something',
            id: 104
        },
        {
            text: 'what do you call a person who is always late?',
            id: 105
        }
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`App is listening to http://localhost:${port}`)
})