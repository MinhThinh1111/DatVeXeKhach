const conn = require('../DBConnect/DBConnect');

const TaiKhoanXe = {
    getAll:(callback)=>{
        return conn.query("SELECT * FROM taikhoan_xe ORDER BY Id DESC",callback);
    },

    insert:(data,callback)=>{
        return conn.query(`INSERT INTO taikhoan_xe(Id_Xe,Id_TaiKhoan,TrangThai) 
        VALUES ('${data.Id_Xe}' , '${data.Id_TaiKhoan}' , '${data.TrangThai}')`,callback);
    },

    update:(Id,data,callback)=>{
        return conn.query(`UPDATE taikhoan_xe SET Id_Xe = '${data.Id_Xe}' ,Id_TaiKhoan = '${data.Id_TaiKhoan}',TrangThai = '${data.TrangThai}' WHERE Id = '${Id}'`,callback);
    },

    delete:(Id,callback)=>{
        return conn.query(`DELETE FROM taikhoan_xe WHERE Id = '${Id}'`,callback);
    },

    getById:(Id,callback)=>{
        return conn.query(`SELECT * FROM taikhoan_xe WHERE Id = '${Id}'`,callback);
    },

    getByIdXe:(Id,callback)=>{
        return conn.query(`SELECT * FROM taikhoan_xe WHERE Id_Xe = '${Id}'`,callback);
    },
}

module.exports = TaiKhoanXe;