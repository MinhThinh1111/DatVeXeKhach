var ChoNgoi = require('../model/ChoNgoi');

const ChoNgoiController = {
    getAll:(req,res)=>{
        ChoNgoi.getAll((err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    insert:(req,res)=>{
        ChoNgoi.insert(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    update:(req,res)=>{
        ChoNgoi.update(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    delete:(req,res)=>{
        ChoNgoi.delete(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getById:(req,res)=>{
        ChoNgoi.getById(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },

    getById_GheXe:(req,res)=>{
        ChoNgoi.getById_GheXe(req.params.Id_GheXe,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getById_VeXe:(req,res)=>{
        ChoNgoi.getById_VeXe(req.params.Id_VeXe,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getByTrangThai:(req,res)=>{
        DiemXe.getByTrangThai(req.params.TrangThai,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getByIdChuyenDiIdGheXe:(req, res) =>{
        ChoNgoi.getByIdChuyenDiIdGheXe(req.params.Id_ChuyenDi,(err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    updateIdVeXe:(req,res)=>{
        ChoNgoi.updateIdVeXe(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    
    chekchongoi:(req,res)=>{
        ChoNgoi.chekchongoi(req.params.Id_ChuyenDi,req.params.Id_GheXe,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

}

module.exports = ChoNgoiController;