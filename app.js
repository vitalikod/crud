const express = require('express');
const server = express();
const dataBase = require('./database.js');
const crud  = require('./controller/PostController.js');
const validator = require('./validator.js');
// const multer = require('multer');

const bodyParser = require('body-parser');

const port = 3000;


dataBase.once('open', () => {
    console.log('connekt to DB');
});

// const storage = multer.diskStorage({
//     destination: (_, __, cb) => {
//         cb(null, 'uploads');
//     },
//     falename: (_, file, cb) => {
//         cb(null, file.originalname);
//     },
// })
// const upload = multer({ storage });
server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./pablic'));
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get('/home', (req, res) => {
    res.render('./index.ejs');
});

server.get('/create', (req, res) => {
    res.render('./create.ejs');
});

server.get('/getall', (req, res) => {
    res.render('./getall.ejs');
});

server.get('/getmeall', crud.getAll);

server.post('/post',  validator, crud.create, (req, res) => {
    console.log(req.body);
});

server.delete('/post/:id', crud.remove);

server.patch('/post/:id', validator, crud.update);

server.listen(port, () => {
    console.log(`server work on port ${port}`);
});