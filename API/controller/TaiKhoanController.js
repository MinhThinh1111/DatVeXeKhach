var TaiKhoan = require('../model/TaiKhoan');

const TaiKhoanController = {
    getAll:(req,res)=>{
        TaiKhoan.getAll((err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    insert:(req,res)=>{
        TaiKhoan.insert(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    update:(req,res)=>{
        TaiKhoan.update(req.params.id, req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    delete:(req,res)=>{
        TaiKhoan.delete(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getById:(req,res)=>{
        TaiKhoan.getById(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },

    getByRole:(req,res)=>{
        TaiKhoan.getByRole(req.params.role,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    updateTrangThai:(req,res)=>{
        TaiKhoan.updateTrangThai(req.params.id, req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getByTen:(req,res)=>{
        TaiKhoan.getByTen(req.params.ten,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getBySdt:(req,res)=>{
        TaiKhoan.getBySdt(req.params.sdt,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },

    getBySdtUpdate:(req,res)=>{
        TaiKhoan.getBySdtUpdate(req.params.id,req.params.sdt,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },
}

module.exports = TaiKhoanController;