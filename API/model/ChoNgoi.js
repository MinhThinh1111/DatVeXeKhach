const conn = require('../DBConnect/DBConnect');

const ChoNgoi = {
    getAll:(callback)=>{
        return conn.query("SELECT * FROM chongoi ORDER BY Id DESC",callback);
    },

    insert:(data,callback)=>{
        return conn.query(`INSERT INTO chongoi(Id_VeXe,Id_GheXe,TrangThai,Id_ChuyenDi) VALUES ('${data.Id_VeXe}' , '${data.Id_GheXe}' , '${data.TrangThai}' , '${data.Id_ChuyenDi}')`,callback);
    },

    update:(data,callback)=>{
        return conn.query(`UPDATE chongoi SET Id_VeXe = '${data.Id_VeXe}' ,Id_GheXe = '${data.Id_GheXe}',TrangThai = '${data.TrangThai} WHERE Id = '${data.Id}'`,callback);
    },

    delete:(Id,callback)=>{
        return conn.query(`DELETE FROM chongoi WHERE Id = '${Id}'`,callback);
    },

    getById_VeXe:(Id_VeXe,callback)=>{
        return conn.query(`SELECT * FROM chongoi WHERE Id_VeXe = '${Id_VeXe}' ODERBY Id DESC`,callback);
    },

    getById_GheXe:(Id_GheXe,callback)=>{
        return conn.query(`SELECT * FROM chongoi WHERE Id_VeXe = '${Id_GheXe}' ODERBY Id DESC`,callback);
    },

    getByTrangThai:(TrangThai,callback)=>{
        return conn.query(`SELECT * FROM chongoi WHERE TrangThai = '${TrangThai}' ODERBY Id DESC`,callback);
    },

    getByIdChuyenDiIdGheXe:(Id_ChuyenDi,callback)=>{
        return conn.query(`SELECT * FROM chongoi WHERE Id_ChuyenDi = '${Id_ChuyenDi}' AND TrangThai = 1`,callback);
    },

    updateIdVeXe:(data,callback)=>{
        return conn.query(`UPDATE chongoi SET TrangThai = '${data.TrangThai}' WHERE Id_VeXe = '${data.Id_VeXe}'`,callback);
    },

    chekchongoi:(Id_ChuyenDi,Id_VeXe,callback)=>{
        return conn.query(`SELECT * FROM chongoi WHERE Id_VeXe = '${Id_VeXe}' and  Id_ChuyenDi = '${Id_ChuyenDi}'`,callback);
    },
}

module.exports = ChoNgoi;