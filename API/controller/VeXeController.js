var VeXe = require('../model/VeXe');

const VeXeController = {
    getAll:(req,res)=>{
        VeXe.getAll((err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    insert:(req,res)=>{
        VeXe.insert(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    update:(req,res)=>{
        VeXe.update(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    delete:(req,res)=>{
        VeXe.delete(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getById:(req,res)=>{
        VeXe.getById(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data[0]);
            }
        })
    },

    
    getByVeXeHachhang:(req,res)=>{
        VeXe.getByVeXeHachhang(req.params.Id_HanhKhach,req.params.TrangThai,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    updatetrangthai:(req,res)=>{
        VeXe.updatetrangthai(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },



    getbydate:(req,res)=>{
        VeXe.getbydate(req.params.NgayDi,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    getbyvexe:(req,res)=>{
        VeXe.getbyvexe(req.params.Sdt,req.params.NgayDi,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    updatetrangthaibyIdChuyenDi:(req,res)=>{
        VeXe.updatetrangthaibyIdChuyenDi(req.params.Id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    
    updatethanhtoanve:(req,res)=>{
        VeXe.updatethanhtoanve(req.params.Id,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },
}

module.exports = VeXeController;