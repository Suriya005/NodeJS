let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/' , (req , res) => {
    return res.send({error:false,
        message:'welcome to RESTful CRUD API with NodeJS,Express Mysql',
        written_by:'Suriya',
        published_on: 'https://github.com/Suriya005'
    })
})

let conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'nodejs_api'
})
conn.connect();

app.get('/books', (req, res) => {
    conn.query('SELECT * FROM books', (error, results, fields) => {
        if (error) throw error;

        let message = ""
        if (results === undefined || results.length == 0) {
            message = "Books table is empty";
        } else {
            message = "Successfully retrieved all books";
        }
        return res.send({ error: false, data: results, message: message});
    })
})


app.listen(3000,() => {
    console.log('Node App is runnig on port 3000');
})

module.exports = app;