module.exports = function(app){
    const QuanHuyenController = require('../controller/QuanHuyenController');

    app.get('/quanhuyen',QuanHuyenController.getAll);
    app.post('/quanhuyen',QuanHuyenController.insert);
    app.put('/quanhuyen/:id',QuanHuyenController.update);
    app.delete('/quanhuyen/:id',QuanHuyenController.delete);
    app.get('/quanhuyen/:id',QuanHuyenController.getById);
    app.get('/quanhuyen/findByIdTinh/:id',QuanHuyenController.getByIdTinh);
    app.get('/quanhuyen/findByTen/:ten',QuanHuyenController.getByTen);
    app.get('/quanhuyen/findByIdTinhAndTen/:id/:ten',QuanHuyenController.getByIdTinhAndTen);
    app.get('/quanhuyen/checkTenEq/:ten',QuanHuyenController.checkTenEq);
    app.get('/quanhuyen/checkTenEqUpdate/:id/:ten',QuanHuyenController.checkTenEqUpdate);
    app.get('/quanhuyen/IdTinh/:id',QuanHuyenController.getTinhById)
}