module.exports = function(app){
    const TaiKhoanController = require('../controller/TaiKhoanController');

    app.get('/taikhoan',TaiKhoanController.getAll);
    app.post('/taikhoan',TaiKhoanController.insert);
    app.put('/taikhoan/:id',TaiKhoanController.update);
    app.delete('/taikhoan/:id',TaiKhoanController.delete);
    app.get('/taikhoan/:id',TaiKhoanController.getById);
    app.get('/taikhoan/getByRole/:role',TaiKhoanController.getByRole);
    app.put('/taikhoan/updateTrangThai/:id',TaiKhoanController.updateTrangThai);
    app.get('/taikhoan/getByTen/:ten',TaiKhoanController.getByTen);
    app.get('/taikhoan/getBySdt/:sdt',TaiKhoanController.getBySdt);
    app.get('/taikhoan/getBySdtUpdate/:id/:sdt',TaiKhoanController.getBySdtUpdate);
}