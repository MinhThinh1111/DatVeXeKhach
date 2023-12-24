var DiemXe = require('../model/DiemXe');

const DiemXeController = {
    getAll:(req,res)=>{
        DiemXe.getAll((err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    insert:(req,res)=>{
        DiemXe.insert(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    update:(req,res)=>{
        DiemXe.update(req.params.id,req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    delete:(req,res)=>{
        DiemXe.delete(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getById:(req,res)=>{
        DiemXe.getById(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },

    getByTen:(req,res)=>{
        DiemXe.getByTen(req.params.ten,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getByIdQuanHuyen:(req,res)=>{
        DiemXe.getByIdQuanHuyen(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    
    getByIdHuyen:(req,res)=>{
        DiemXe.getByIdHuyen(req.params.IdHuyen,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    }
}

module.exports = DiemXeController;