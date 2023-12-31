
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(3002, ()=>{
    console.log('Server is running on port 3002')
})

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '', //xampp pass
    database: 'e-leporedae'
})

//router
//register
app.post('/register', (req, res)=>{
    
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    //SQL STATEmENT
    const SQL = 'INSERT INTO USERS (email, username, password) VALUES (?,?,?)'
    const Values = [sentEmail, sentUserName, sentPassword]

    //query to execute the fucking sql
    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully!')
            res.send({messafe: 'User added!'})
            //
        }
    })
})

//login
app.post('/login', (req, res)=>{



    const sentLoginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassowrd

    //SQL STATEmENT
    const SQL = 'Select * From users where username = ? && password = ?' 
    const Values = [sentLoginUserName, sentLoginPassword]


    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.send(results)
        }
        else{
            res.send({message: 'Credential doesnt match!'})
        }
    })
})
