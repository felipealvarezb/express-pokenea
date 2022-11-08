import express from 'express'
import router from './routes/router.js'

const app = express()
const port = 80 

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
