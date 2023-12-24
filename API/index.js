const express = require('express');
const conn = require('./DBConnect/DBConnect');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('',()=>{
    resizeBy.send('Helo API');
});
require('./router/DiemXeRouter')(app);

app.get('',()=>{
    resizeBy.send('Helo API');
});
require('./router/ChoNgoiRouter')(app);

app.get('',()=>{
    resizeBy.send('Helo API');
});
require('./router/ChuyenDiRouter')(app);

app.get('',()=>{
    resizeBy.send('Helo API');
});
require('./router/GheXeRouter')(app);

app.get('',()=>{
    resizeBy.send('Helo API');
});
require('./router/HanhKhachRouter')(app);

app.get('',()=>{
    resizeBy.send('Helo API');
});
require('./router/QuanHuyenRouter')(app);

app.get('',()=>{
    resizeBy.send('Helo API');
});
require('./router/TaiKhoanRouter')(app);

app.get('',()=>{
    resizeBy.send('Helo API');
});
require('./router/TaiKhoanXeRouter')(app);

app.get('',()=>{
    resizeBy.send('Helo API');
});
require('./router/TinhRouter')(app);

app.get('',()=>{
    resizeBy.send('Helo API');
});
require('./router/VeXeRouter')(app);

app.get('',()=>{
    resizeBy.send('Helo API');
});
require('./router/XeRouter')(app);

app.get('',()=>{
    resizeBy.send('Helo API');
});
require('./router/LoTrinhRouter')(app);

app.listen(3000,()=>{
    console.log("Run ----");
})