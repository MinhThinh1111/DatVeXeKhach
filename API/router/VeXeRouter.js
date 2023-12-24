module.exports = function(app){
    const VeXeController = require('../controller/VeXeController');

    app.get('/vexe',VeXeController.getAll);
    app.post('/vexe',VeXeController.insert);
    app.put('/vexe',VeXeController.update);
    app.delete('/vexe/:id',VeXeController.delete);
    app.get('/vexe/:id',VeXeController.getById);
    app.get('/vexe/khachhang/:Id_HanhKhach/:TrangThai',VeXeController.getByVeXeHachhang);
    app.put('/vexe/IdVeXe',VeXeController.updatetrangthai);

    app.put('/vexe/updatetrangthai/:Id',VeXeController.updatetrangthaibyIdChuyenDi)
    app.get('/vexe/getbydate/:NgayDi',VeXeController.getbydate);
    app.get('/vexe/getbyvexe/:Sdt/:NgayDi',VeXeController.getbyvexe);
    app.put('/vexe/thanhtoan/:Id',VeXeController.updatethanhtoanve);
}