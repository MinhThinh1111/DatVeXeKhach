module.exports = function(app){
    const TaiKhoanXeController = require('../controller/TaiKhoanXeController');

    app.get('/taikhoan_xe',TaiKhoanXeController.getAll);
    app.post('/taikhoan_xe',TaiKhoanXeController.insert);
    app.put('/taikhoan_xe/:id',TaiKhoanXeController.update);
    app.delete('/taikhoan_xe/:id',TaiKhoanXeController.delete);
    app.get('/taikhoan_xe/:id',TaiKhoanXeController.getById);
    app.get('/taikhoan_xe/findByIdXe/:idXe',TaiKhoanXeController.getByIdXe);
}