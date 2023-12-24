module.exports = function(app){
    const ChuyenDiController = require('../controller/ChuyenDiController');

    app.get('/chuyendi',ChuyenDiController.getAll);
    app.post('/chuyendi',ChuyenDiController.insert);
    app.put('/chuyendi/:id',ChuyenDiController.update);
    app.delete('/chuyendi/:id',ChuyenDiController.delete);
    app.get('/chuyendi/:id',ChuyenDiController.getById);
    app.get('/chuyendi/search/:IdLoTrinh/:NgayDi',ChuyenDiController.getChuyenDiByIdLoTrinh);
    app.put('/chuyendi/updateSoGheTrong',ChuyenDiController.updateSogheXe);
    
    app.get('/chuyendi/All/:NgayDi',ChuyenDiController.getBYNGAYDI);
    app.put('/chuyendi/update/:id',ChuyenDiController.updatetrangthai);
    app.get('/chuyendi/chitiet/:Id',ChuyenDiController.getChitietve)

    // app.get('/chuyendi/allngay/:NgayDi',ChuyenDiController.getBYNGAYDI);
}