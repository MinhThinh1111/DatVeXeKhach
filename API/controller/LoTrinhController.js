var LoTrinh = require('../model/LoTrinh');

const LoTrinhController = {
    getAll:(req,res)=>{
        LoTrinh.getAll((err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    insert:(req,res)=>{
        LoTrinh.insert(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    update:(req,res)=>{
        LoTrinh.update(req.params.id,req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    delete:(req,res)=>{
        LoTrinh.delete(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getById:(req,res)=>{
        LoTrinh.getById(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },

    getByIdDiemDi:(req,res)=>{
        LoTrinh.getByIdDiemDi(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getByIdDiemDen:(req,res)=>{
        LoTrinh.getByIdDiemDen(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getByIdDiemDiAndDiemDen:(req,res)=>{
        LoTrinh.getByIdDiemDiAndDiemDen(req.params.idDiemDi,req.params.idDiemDen,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getByIdDiemDiIdDiemDen:(req,res)=>{
        LoTrinh.getByIdDiemDiemDiemDen(req.params.Id_DiemDi,req.params.Id_DiemDen,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    }
}

module.exports = LoTrinhController;