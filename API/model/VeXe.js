const conn = require('../DBConnect/DBConnect');

const VeXe = {
    getAll: (callback) => {
        return conn.query("SELECT * FROM vexe ORDER BY Id DESC", callback);
    },

    insert: (data, callback) => {
        return conn.query(`INSERT INTO vexe(Id_ChuyenDi, Id_HanhKhach, DiemDon, DiemTra, TrangThai, TongTien, thanhtoan, ChoNgoi) 
        VALUES ('${data.Id_ChuyenDi}', '${data.Id_HanhKhach}', '${data.DiemDon}', 
        '${data.DiemTra}', '${data.TrangThai}', '${data.TongTien}', '${data.thanhtoan}', '${data.ChoNgoi}')`, callback);
    },


    update: (data, callback) => {
        return conn.query(`UPDATE vexe SET Id_ChuyenDi = '${data.Id_ChuyenDi}' ,Id_HanhKhach = '${data.Id_HanhKhach}'
        ,DiemDon = '${data.DiemDon}' ,DiemTra = '${data.DiemTra}' ,TrangThai = '${data.TrangThai}' WHERE Id = '${data.Id}'`, callback);
    },

    delete: (Id, callback) => {
        return conn.query(`DELETE FROM vexe WHERE Id = '${Id}'`, callback);
    },

    getById: (Id, callback) => {
        return conn.query(`SELECT * FROM vexe WHERE Id = '${Id}'`, callback);
    },

    getByVeXeHachhang: (Id_HanhKhach, TrangThai, callback) => {
        return conn.query(`SELECT count(cho.Id_VeXe) as 'soghe', chuyen.Id as 'Id_ChuyenDi' , GROUP_CONCAT(ghe.Ten,'') as 'ChoNgoi', ve.Id ,ve.TongTien ,ve.DiemDon ,ve.TrangThai , ve.DiemTra, chuyen.GioDi , chuyen.NgayDi,chuyen.Diem_Bat_Dau,chuyen.Diem_Ket_Thuc, xekhach.BienSo,lo.Ten FROM vexe ve INNER JOIN chuyendi chuyen ON ve.Id_ChuyenDi = chuyen.Id INNER JOIN xe xekhach ON chuyen.Id_Xe = xekhach.Id INNER JOIN lotrinh lo ON chuyen.Id_LoTrinh = lo.Id INNER JOIN chongoi cho ON cho.Id_VeXe = ve.Id INNER JOIN ghexe ghe ON ghe.Id = cho.Id_GheXe WHERE ve.Id_HanhKhach = '${Id_HanhKhach}' AND ve.TrangThai = '${TrangThai}' GROUP BY ve.Id`, callback);
    },

    updatetrangthai: (data, callback) => {
        return conn.query(`UPDATE vexe SET  TrangThai = '${data.TrangThai}' WHERE Id = '${data.Id}'`, callback);
    },

    updatetrangthaibyIdChuyenDi: (Id, callback) => {
        return conn.query(`UPDATE vexe SET  TrangThai = 2 WHERE Id_ChuyenDi = '${Id}'`, callback);
    },
    updatethanhtoanve: (Id, callback) => {
        return conn.query(`UPDATE vexe SET  thanhtoan = 2 WHERE Id = '${Id}'`, callback);
    },
    getbydate: (NgayDi, callback) => {
        return conn.query(`select GROUP_CONCAT(ghe.Ten,'') as 'ChoNgoi' , chuyen.NgayDi,ve.DiemDon,ve.DiemTra,ve.TongTien,ve.thanhtoan ,ve.Id as 'idve', xekhach.BienSo,chuyen.GioDi,hanh.Sdt,hanh.Id from hanhkhach hanh INNER JOIN vexe ve on hanh.Id = ve.Id_HanhKhach INNER JOIN chongoi cho on cho.Id_VeXe = ve.Id INNER JOIN ghexe ghe on ghe.Id = cho.Id_GheXe INNER JOIN chuyendi chuyen on chuyen.Id = ve.Id_ChuyenDi INNER JOIN xe xekhach on xekhach.Id = chuyen.Id_Xe WHERE ve.TrangThai = 1 AND chuyen.TrangThai != 3 AND chuyen.NgayDi = '${NgayDi}' GROUP BY ve.Id`, callback)
    },

    getbyvexe: (Sdt, NgayDi, callback) => {
        return conn.query(`select GROUP_CONCAT(ghe.Ten,'') as 'ChoNgoi' , chuyen.NgayDi,ve.DiemDon,ve.DiemTra,ve.TongTien,ve.thanhtoan ,ve.Id as 'idve', xekhach.BienSo,chuyen.GioDi,hanh.Sdt,hanh.Id,hanh.Ten from hanhkhach hanh INNER JOIN vexe ve on hanh.Id = ve.Id_HanhKhach INNER JOIN chongoi cho on cho.Id_VeXe = ve.Id INNER JOIN ghexe ghe on ghe.Id = cho.Id_GheXe INNER JOIN chuyendi chuyen on chuyen.Id = ve.Id_ChuyenDi INNER JOIN xe xekhach on xekhach.Id = chuyen.Id_Xe WHERE ve.TrangThai = 1 AND chuyen.TrangThai != 3 AND hanh.Sdt = '${Sdt}' AND chuyen.NgayDi = '${NgayDi}' GROUP BY ve.Id`, callback)
    }
}

module.exports = VeXe;