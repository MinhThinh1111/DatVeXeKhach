const conn = require('../DBConnect/DBConnect');

const GheXe = {
    getAll:(callback)=>{
        return conn.query("SELECT * FROM ghexe ORDER BY Id DESC",callback);
    },

    insert:(data,callback)=>{
        return conn.query(`INSERT INTO ghexe(Ten,Id_Xe,Tang,TrangThai) 
        VALUES ('${data.Ten}' , '${data.Id_Xe}' , '${data.Tang}', '${data.TrangThai}')`,callback);
    },

    update:(Id,data,callback)=>{
        return conn.query(`UPDATE ghexe SET Ten = '${data.Ten}' ,Id_Xe = '${data.Id_Xe}',Tang = '${data.Tang}', TrangThai = '${data.TrangThai}' WHERE Id = '${Id}'`,callback);
    },

    delete:(Id,callback)=>{
        return conn.query(`DELETE FROM ghexe WHERE Id = '${Id}'`,callback);
    },

    getById:(Id,callback)=>{
        return conn.query(`SELECT * FROM ghexe WHERE Id = '${Id}'`,callback);
    },


    getByIdXeTang1:(Id,callback)=>{
        return conn.query(`SELECT * FROM ghexe WHERE Id_Xe = '${Id}' AND Tang = 1`,callback);
    },
    getByIdXeTang2:(Id,callback)=>{
        return conn.query(`SELECT * FROM ghexe WHERE Id_Xe = '${Id}' AND Tang = 2`,callback);
    },
    countSoGheById:(Id,callback)=>{
        return conn.query(`SELECT COUNT(*) AS 'Count' FROM ghexe WHERE Id_Xe = '${Id}'`,callback);
    },

    getByIdXeTangXe:(Id_Xe,Tang,callback)=>{
        return conn.query(`SELECT ghe.*,xekhach.SoGhe FROM ghexe ghe INNER JOIN xe xekhach on ghe.Id_Xe = xekhach.Id WHERE ghe.Id_Xe = '${Id_Xe}' AND ghe.Tang = '${Tang}'`,callback);
    }
}

module.exports = GheXe;