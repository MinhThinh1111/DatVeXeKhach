const conn = require('../DBConnect/DBConnect');

const HanhKhach = {
    getAll:(callback)=>{
        return conn.query("SELECT * FROM hanhkhach ORDER BY Id DESC",callback);
    },

    insert:(data,callback)=>{
        return conn.query(`INSERT INTO hanhkhach(Ten,Sdt,Email,MatKhau,TrangThai) 
        VALUES ('${data.Ten}' , '${data.Sdt}' , '${data.Email}', '${data.MatKhau}', '${data.TrangThai}')`,callback);
    },

    update:(data,callback)=>{
        return conn.query(`UPDATE hanhkhach SET Ten = '${data.Ten}' ,Sdt = '${data.Sdt}',Email = '${data.Email}', MatKhau= '${data.MatKhau}',
        TrangThai = '${data.TrangThai}' WHERE Id = '${data.Id}'`,callback);
        
    }, 
    // update:(Id,data,callback)=>{
    //     return conn.query(`UPDATE hanhkhach SET Ten = '${data.Ten}' ,Sdt = '${data.Sdt}' ,Email = '${data.Email}' ,TrangThai = '${data.TrangThai}' WHERE Id = '${Id}'`,callback);
    // },
    
    
    
    

    delete:(Id,callback)=>{
        return conn.query(`DELETE FROM hanhkhach WHERE Id = '${Id}'`,callback);
    },

    getById:(Id,callback)=>{
        return conn.query(`SELECT * FROM hanhkhach WHERE Id = '${Id}'`,callback);
    },

    getbyvexe:(Sdt,NgayDi,callback)=>{
        return conn.query(`select GROUP_CONCAT(ghe.Ten,'') as 'ChoNgoi' , ve.DiemDon,ve.DiemTra,ve.TongTien , xekhach.BienSo,chuyen.GioDi,hanh.Sdt,hanh.Id from hanhkhach hanh INNER JOIN vexe ve on hanh.Id = ve.Id_HanhKhach INNER JOIN chongoi cho on cho.Id_VeXe = ve.Id INNER JOIN ghexe ghe on ghe.Id = cho.Id_GheXe INNER JOIN chuyendi chuyen on chuyen.Id = ve.Id_ChuyenDi INNER JOIN xe xekhach on xekhach.Id = chuyen.Id_Xe WHERE ve.TrangThai = 1 AND chuyen.TrangThai != 3 AND hanh.Sdt = '${Sdt}' AND chuyen.NgayDi = '${NgayDi}' GROUP BY ve.Id`,callback)
    },
    getBySDT:(Sdt,callback)=>{
        return conn.query(`SELECT * FROM hanhkhach WHERE Sdt = '${Sdt}'`,callback);
    },
    getByPassword:(MatKhau,callback)=>{
        return conn.query(`SELECT * FROM hanhkhach WHERE MatKhau = '${MatKhau}'`,callback);
    }
}

module.exports = HanhKhach;