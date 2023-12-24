module.exports = function(app){
    const DiemXeController = require('../controller/DiemXeController');

    app.get('/diemxe',DiemXeController.getAll);
    app.post('/diemxe',DiemXeController.insert);
    app.put('/diemxe/:id',DiemXeController.update);
    app.delete('/diemxe/:id',DiemXeController.delete);
    app.get('/diemxe/:id',DiemXeController.getById);
    app.get('/diemxe/findbyten/:ten',DiemXeController.getByTen);
    app.get('/diemxe/findbyquanhuyen/:id',DiemXeController.getByIdQuanHuyen);
    app.get('/diemxe/huyen/:IdHuyen',DiemXeController.getByIdHuyen);
}