const conn = require('../DBConnect/DBConnect');

const TaiKhoan = {
    getAll:(callback)=>{
        return conn.query("SELECT * FROM taikhoan ORDER BY Id DESC",callback);
    },

    insert:(data,callback)=>{
        return conn.query(`INSERT INTO taikhoan(Ten,NgaySinh,NoiO,Sdt,img,TrangThai,MatKhau,Role) 
        VALUES ('${data.Ten}' , '${data.NgaySinh}' , '${data.NoiO}' , '${data.Sdt}' , '${data.img}', '${data.TrangThai}', '${data.MatKhau}' , '${data.Role}')`,callback);
    },

    update:(Id,data,callback)=>{
        return conn.query(`UPDATE taikhoan SET Ten = '${data.Ten}' ,NgaySinh = '${data.NgaySinh}',NoiO = '${data.NoiO}' 
        ,Sdt = '${data.Sdt}' ,img = '${data.img}' ,TrangThai = '${data.TrangThai}' ,MatKhau = '${data.MatKhau}' ,Role = '${data.Role}' WHERE Id = '${Id}'`,callback);
    },

    delete:(Id,callback)=>{
        return conn.query(`DELETE FROM taikhoan WHERE Id = '${Id}'`,callback);
    },

    getById:(Id,callback)=>{
        return conn.query(`SELECT * FROM taikhoan WHERE Id = '${Id}'`,callback);
    },

    getByRole:(Role,callback)=>{
        return conn.query(`SELECT * FROM taikhoan WHERE Role = '${Role}' AND TrangThai = 1`,callback);
    },

    updateTrangThai:(Id,data,callback)=>{
        return conn.query(`UPDATE taikhoan SET TrangThai = '${data.TrangThai}' WHERE Id = '${Id}'`,callback);
    },

    getByTen:(Ten,callback)=>{
        return conn.query(`SELECT * FROM taikhoan WHERE Ten LIKE '%${Ten}%'`,callback);
    },

    getBySdt:(Sdt,callback)=>{
        return conn.query(`SELECT * FROM taikhoan WHERE Sdt = '${Sdt}'`,callback);
    },

    getBySdtUpdate:(Id,Sdt,callback)=>{
        return conn.query(`SELECT * FROM taikhoan WHERE Sdt = '${Sdt}' AND Id != '${Id}'`,callback);
    },
}

module.exports = TaiKhoan;