var ChuyenDi = require('../model/ChuyenDi');

const ChuyenDiController = {
    getAll:(req,res)=>{
        ChuyenDi.getAll((err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    insert:(req,res)=>{
        ChuyenDi.insert(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    update:(req,res)=>{
        ChuyenDi.update(req.params.id,req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    delete:(req,res)=>{
        ChuyenDi.delete(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getById:(req,res)=>{
        ChuyenDi.getById(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },

    getChuyenDiByIdLoTrinh:(req,res)=>{
        ChuyenDi.getChuyenDiByIdLoTrinh(req.params.IdLoTrinh,req.params.NgayDi,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },


    updateSogheXe:(req,res)=>{
        ChuyenDi.updateSogheXe(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getBYNGAYDI:(req,res)=>{
        ChuyenDi.getBYNGAYDI(req.params.NgayDi,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    
    updatetrangthai:(req,res)=>{
        ChuyenDi.updatetrangthai(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },

    getChitietve:(req,res)=>{
        ChuyenDi.getChitietve(req.params.Id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },
}

module.exports = ChuyenDiController;