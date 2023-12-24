module.exports = function(app){
    const LoTrinhController = require('../controller/LoTrinhController');

    app.get('/lotrinh',LoTrinhController.getAll);
    app.post('/lotrinh',LoTrinhController.insert);
    app.put('/lotrinh/:id',LoTrinhController.update);
    app.delete('/lotrinh/:id',LoTrinhController.delete);
    app.get('/lotrinh/:id',LoTrinhController.getById);
    app.get('/lotrinh/findByIdDiemDi/:id',LoTrinhController.getByIdDiemDi);
    app.get('/lotrinh/findByIdDiemDen/:id',LoTrinhController.getByIdDiemDen);
    app.get('/lotrinh/findByIdDiemDiAndDiemDen/:idDiemDi/:idDiemDen',LoTrinhController.getByIdDiemDiAndDiemDen);
    app.get("/lotrinh/search/:Id_DiemDi/:Id_DiemDen",LoTrinhController.getByIdDiemDiIdDiemDen);
}