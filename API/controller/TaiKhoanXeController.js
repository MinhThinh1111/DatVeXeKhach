var TaiKhoanXe = require('../model/TaiKhoanXe');

const TaiKhoanXeController = {
    getAll:(req,res)=>{
        TaiKhoanXe.getAll((err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    insert:(req,res)=>{
        TaiKhoanXe.insert(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    update:(req,res)=>{
        TaiKhoanXe.update(req.params.id,req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    delete:(req,res)=>{
        TaiKhoanXe.delete(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getById:(req,res)=>{
        TaiKhoanXe.getById(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },

    getByIdXe:(req,res)=>{
        TaiKhoanXe.getById(req.params.idXe,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },
}

module.exports = TaiKhoanXeController;