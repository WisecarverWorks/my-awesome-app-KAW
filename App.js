const express = require('express')
const app = express()
// Simple node app 
const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send('Hello Kyle Wisecarver and the rest of the world out there!')
=======
    res.send('Hello to Kyle A Wisecarver and the rest of the world out there!')
>>>>>>> main
}); app.listen(APP_PORT, () => {
    console.log(`Running app at port:${APP_PORT}`)
})

//This is a simple node app. Comment Comment
