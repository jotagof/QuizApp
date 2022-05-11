import express from 'express'
import database from './database.js'
import cors from 'cors'
import User from './models/user.model.js'
//quizappuser
//LXLRTo5oK86zvglK

const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Welcome')
})

app.post("/api/login", async (req, res) => {

    try{
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        })

        if (user){
            res.json({ status: "ok" , user: true})
        }else{
            res.json({ status: "error" , user: false})
        }
    }catch (error){
        res.json({ status: "error" })
    }
    
})

app.post("/api/register", async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        })
        res.json({ status: "ok" })
    } catch (error) {
        res.json({ status: "error" })        
    }
})

app.listen(5000, () => {
    console.log('first2')

})

