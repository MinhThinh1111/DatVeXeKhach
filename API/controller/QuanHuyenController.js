var QuanHuyen = require('../model/QuanHuyen');

const QuanHuyenController = {
    getAll:(req,res)=>{
        QuanHuyen.getAll((err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    insert:(req,res)=>{
        QuanHuyen.insert(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    update:(req,res)=>{
        QuanHuyen.update(req.params.id,req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    delete:(req,res)=>{
        QuanHuyen.delete(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getById:(req,res)=>{
        QuanHuyen.getById(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },

    getByIdTinh:(req,res)=>{
        QuanHuyen.getByIdTinh(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getByTen:(req,res)=>{
        QuanHuyen.getByTen(req.params.ten,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getByIdTinhAndTen:(req,res)=>{
        QuanHuyen.getByIdTinhAndTen(req.params.id,req.params.ten,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    checkTenEq:(req,res)=>{
        QuanHuyen.checkTenEq(req.params.ten,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },

    checkTenEqUpdate:(req,res)=>{
        QuanHuyen.checkTenEqUpdate(req.params.id,req.params.ten,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },

    getTinhById:(req,res)=>{
        QuanHuyen.getByTinhId(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    }
}

module.exports = QuanHuyenController;