module.exports = function(app){
    const HanhKhachController = require('../controller/HanhKhachController');

    app.get('/hanhkhach',HanhKhachController.getAll);
    app.post('/hanhkhach',HanhKhachController.insert);
    app.put('/hanhkhach',HanhKhachController.update);
    app.delete('/hanhkhach/:id',HanhKhachController.delete);
    app.get('/hanhkhach/:id',HanhKhachController.getById);
    app.get('/hanhkhach/searchSDT/:Sdt',HanhKhachController.getBySDT);
    app.get('/hanhkhach/searchPassword/:MatKhau',HanhKhachController.getByPassword)
}