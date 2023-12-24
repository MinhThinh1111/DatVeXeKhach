module.exports = function(app){
    const TinhController = require('../controller/TinhController');

    app.get('/tinh',TinhController.getAll);
    app.post('/tinh',TinhController.insert);
    app.put('/tinh/:id',TinhController.update);
    app.delete('/tinh/:id',TinhController.delete);
    app.get('/tinh/:id',TinhController.getById);
    app.get('/tinh/trangthai/:trangthai',TinhController.getByTrangThai);
    app.get('/tinh/findByTen/:ten',TinhController.getByTen);
    app.get('/tinh/checkTenEq/:ten',TinhController.checkTenEq);
    app.get('/tinh/checkTenEqUpdate/:id/:ten',TinhController.checkTenEqUpdate);
}