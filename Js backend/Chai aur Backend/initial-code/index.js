import express from "express"
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send("Hey, go to \"/api\" route!")
})

app.get('/api', (req, res) => {
    const movies = [
        {
            title: "Oppenheimer",
            rating: 4.9
        },
        {
            title: "Avengers: Endgame",
            rating: 4.3
        },
        {
            title: 'Adipurush',
            rating: 0.3
        },
        {
            title: "Interstellar",
            rating: 4.9
        }
    ]
    res.send(movies)
})

app.listen(port, () => {
    console.log(`App is listening to http://localhost:${port}`)
})