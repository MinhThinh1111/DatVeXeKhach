module.exports = function(app){
    const ChoNgoiController = require('../controller/ChoNgoiController');

    app.get('/chongoi',ChoNgoiController.getAll);
    app.post('/chongoi',ChoNgoiController.insert);
    app.put('/chongoi',ChoNgoiController.update);
    app.delete('/chongoi/:id',ChoNgoiController.delete);
    app.get('/chongoi/:id',ChoNgoiController.getById);
    app.get('/chongoi/:Id_GheXe',ChoNgoiController.getById_GheXe);
    app.get('/chongoi/:Id_VeXe',ChoNgoiController.getById_VeXe);
    app.get('/chongoi/:TrangThai',ChoNgoiController.getByTrangThai);
    app.get('/chongoi/search/:Id_ChuyenDi',ChoNgoiController.getByIdChuyenDiIdGheXe)
    app.get('/chongoi/check/:Id_ChuyenDi/:Id_GheXe',ChoNgoiController.chekchongoi)
    app.put('/chongoi/updateIdVeXe',ChoNgoiController.updateIdVeXe);
}