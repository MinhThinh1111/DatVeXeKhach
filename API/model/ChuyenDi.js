const conn = require('../DBConnect/DBConnect');

const ChuyenDi = {
    getAll:(callback)=>{
        return conn.query("SELECT * FROM chuyendi ORDER BY Id DESC",callback);
    },

    

    insert:(data,callback)=>{
        return conn.query(`INSERT INTO chuyendi(Id_Xe,Id_LoTrinh,NgayDi,GioDi,GioDen,TongThoiGian,SoGheTrong,TrangThai,GhiChu,Diem_Bat_Dau,Diem_Ket_Thuc,Gia_Tien) 
        VALUES ('${data.Id_Xe}' , '${data.Id_LoTrinh}', '${data.NgayDi}', '${data.GioDi}', '${data.GioDen}',
        '${data.TongThoiGian}','${data.SoGheTrong}','${data.TrangThai}','${data.GhiChu}', '${data.Diem_Bat_Dau}' , '${data.Diem_Ket_Thuc}', '${data.Gia_Tien}')`,callback);
    },

    update:(Id,data,callback)=>{
        return conn.query(`UPDATE chuyendi SET Id_Xe = '${data.Id_Xe}', 
        Id_LoTrinh = '${data.Id_LoTrinh}', NgayDi = '${data.NgayDi}', GioDi = '${data.GioDi}', GioDen = '${data.GioDen}', TongThoiGian = '${data.TongThoiGian}',
        SoGheTrong = '${data.SoGheTrong}', TrangThai = '${data.TrangThai}', GhiChu = '${data.GhiChu}' , Diem_Bat_Dau = '${data.Diem_Bat_Dau}', Diem_Ket_Thuc = '${data.Diem_Ket_Thuc}' , Gia_Tien = '${data.Gia_Tien}'
        WHERE Id = '${Id}'`,callback);
    },

    delete:(Id,callback)=>{
        return conn.query(`DELETE FROM chuyendi WHERE Id = '${Id}'`,callback);
    },

    getById:(Id,callback)=>{
        return conn.query(`SELECT * FROM chuyendi WHERE Id = '${Id}'`,callback);
    },
    
    getChuyenDiByIdLoTrinh:(IdLoTrinh,NgayDi,callback)=>{
        return conn.query(`SELECT * FROM chuyendi WHERE Id_LoTrinh = '${IdLoTrinh}' AND NgayDi = '${NgayDi}' AND TrangThai = 1 `,callback);
    },

    updateSogheXe:(data,callback)=>{
        return conn.query(`UPDATE chuyendi SET SoGheTrong = '${data.SoGheTrong}' WHERE Id = '${data.Id}'`,callback);
    },

    getBYNGAYDI:(NgayDi,callback)=>{
        return conn.query(`SELECT chuyen.*,xekhach.BienSo,lo.Ten FROM chuyendi chuyen INNER JOIN xe xekhach ON xekhach.Id = chuyen.Id_Xe INNER JOIN lotrinh lo ON chuyen.Id_LoTrinh = lo.Id WHERE chuyen.NgayDi = '${NgayDi}'`,callback);
    },



    updatetrangthai:(Id,callback)=>{
        return conn.query(`UPDATE chuyendi SET TrangThai = 3 WHERE Id = '${Id}'`,callback);
    },

    getChitietve:(Id,callback)=>{
        return conn.query(`SELECT chuyen.*,ghe.Ten as 'ghexe',ve.thanhtoan, ve.DiemDon,ve.DiemTra,hanh.Ten,hanh.Sdt FROM chuyendi chuyen INNER JOIN vexe ve on ve.Id_ChuyenDi = chuyen.Id INNER JOIN hanhkhach hanh on hanh.Id = ve.Id_HanhKhach INNER JOIN chongoi cho on cho.Id_VeXe = ve.Id INNER JOIN ghexe ghe on ghe.Id = cho.Id_GheXe WHERE chuyen.Id = '${Id}' AND ve.TrangThai = 1`,callback)
    }
}

module.exports = ChuyenDi;