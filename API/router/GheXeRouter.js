module.exports = function(app){
    const GheXeController = require('../controller/GheXeController');

    app.get('/ghexe',GheXeController.getAll);
    app.post('/ghexe',GheXeController.insert);
    app.put('/ghexe/:id',GheXeController.update);
    app.delete('/ghexe/:id',GheXeController.delete);
    app.get('/ghexe/:id',GheXeController.getById);

    app.get('/ghexe/getByIdT1/:id',GheXeController.getByIdXeTang1);
    app.get('/ghexe/getByIdT2/:id',GheXeController.getByIdXeTang2);
    app.get('/ghexe/countSoGhe/:id',GheXeController.countSoGheById);

    app.get('/ghexe/search/:Id_Xe/:Tang',GheXeController.getByIdXeTangXe)
}