module.exports = function(app){
    const XeController = require('../controller/XeController');

    app.get('/xe',XeController.getAll);
    app.post('/xe',XeController.insert);
    app.put('/xe/:id',XeController.update);
    app.delete('/xe/:id',XeController.delete);
    app.get('/xe/:id',XeController.getById);
    app.get('/xe/bienso/:BienXo',XeController.getByBienSo);
    app.get('/xe/tenEq/:ten',XeController.getByTenEq);
    app.get('/xe/biensoUpdate/:BienXo/:id',XeController.getByBienSoUpdate);
    app.get('/xe/tenEqUpdate/:ten/:id',XeController.getByTenEqUpdate);
    app.get('/xe/findByTen/:ten',XeController.getByTen);
}