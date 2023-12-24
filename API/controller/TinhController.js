var Tinh = require('../model/Tinh');

const TinhController = {
    getAll:(req,res)=>{
        Tinh.getAll((err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    insert:(req,res)=>{
        Tinh.insert(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    update:(req,res)=>{
        Tinh.update(req.params.id,req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    delete:(req,res)=>{
        Tinh.delete(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getById:(req,res)=>{
        Tinh.getById(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },

    getByTrangThai:(req,res)=>{
        Tinh.getByTrangThai(req.params.trangthai,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getByTen:(req,res)=>{
        Tinh.getByTen(req.params.ten,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    checkTenEq:(req,res)=>{
        Tinh.checkTenEq(req.params.ten,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },

    checkTenEqUpdate:(req,res)=>{
        Tinh.checkTenEqUpdate(req.params.id,req.params.ten,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },
}

module.exports = TinhController;