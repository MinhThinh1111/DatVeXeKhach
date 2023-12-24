-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th12 08, 2023 lúc 07:12 AM
-- Phiên bản máy phục vụ: 8.0.31
-- Phiên bản PHP: 8.1.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `chuyendedidong`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chongoi`
--

DROP TABLE IF EXISTS `chongoi`;
CREATE TABLE IF NOT EXISTS `chongoi` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Id_VeXe` int NOT NULL,
  `Id_GheXe` int NOT NULL,
  `TrangThai` int NOT NULL,
  `Id_ChuyenDi` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chuyendi`
--

DROP TABLE IF EXISTS `chuyendi`;
CREATE TABLE IF NOT EXISTS `chuyendi` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Id_Xe` int NOT NULL,
  `Id_LoTrinh` int NOT NULL,
  `NgayDi` varchar(50) NOT NULL,
  `GioDi` varchar(50) NOT NULL,
  `GioDen` varchar(50) NOT NULL,
  `TongThoiGian` int NOT NULL,
  `SoGheTrong` int NOT NULL,
  `TrangThai` int NOT NULL,
  `GhiChu` varchar(255) NOT NULL,
  `Diem_Bat_Dau` varchar(255) NOT NULL,
  `Diem_Ket_Thuc` varchar(255) NOT NULL,
  `Gia_Tien` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `chuyendi`
--

INSERT INTO `chuyendi` (`Id`, `Id_Xe`, `Id_LoTrinh`, `NgayDi`, `GioDi`, `GioDen`, `TongThoiGian`, `SoGheTrong`, `TrangThai`, `GhiChu`, `Diem_Bat_Dau`, `Diem_Ket_Thuc`, `Gia_Tien`) VALUES
(1, 1, 1, '2023-12-18', '5:00', '14:00', 8, 34, 1, '', 'Cà Mau', 'Hồ Chí Minh', 420000),
(2, 1, 2, '2023-12-18', '9:00', '17:00', 8, 34, 1, 'An Toàn', 'Hồ Chí Minh', 'Cà Mau', 420000),
(3, 2, 3, '2023-12-18', '8:00', '15:00', 6, 20, 1, 'An toàn', 'Bạc Liêu', 'Hồ Chí Minh', 450000),
(4, 2, 4, '2023-12-18', '10:00', '17:00', 6, 20, 1, 'An toàn', 'Hồ Chí Minh', 'Bạc Liêu', 450000),
(5, 3, 5, '2023-12-18', '7:30', '11:30', 4, 34, 1, 'An toàn', 'Cần Thơ', 'Hồ Chí Minh', 150000),
(6, 3, 6, '2023-12-18', '9:30', '14:00', 4, 34, 1, 'An toàn', 'Hồ Chí Minh', 'Cần Thơ', 150000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `diemxe`
--

DROP TABLE IF EXISTS `diemxe`;
CREATE TABLE IF NOT EXISTS `diemxe` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `ViTri` varchar(255) NOT NULL,
  `TrangThai` int NOT NULL,
  `Id_QuanHuyen` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `diemxe`
--

INSERT INTO `diemxe` (`Id`, `ViTri`, `TrangThai`, `Id_QuanHuyen`, `Name`) VALUES
(1, 'BX Cà Mau', 1, 1, 'BX Cà Mau'),
(2, 'BX Bạc Liêu', 1, 2, 'BX Bạc Liêu'),
(3, 'BX Cần Thơ', 1, 3, 'BX Cần Thơ'),
(4, 'BX Thủ Đức', 1, 4, 'BX Thủ Đức');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ghexe`
--

DROP TABLE IF EXISTS `ghexe`;
CREATE TABLE IF NOT EXISTS `ghexe` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Ten` varchar(255) NOT NULL,
  `Id_Xe` int NOT NULL,
  `Tang` int NOT NULL,
  `TrangThai` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `ghexe`
--

INSERT INTO `ghexe` (`Id`, `Ten`, `Id_Xe`, `Tang`, `TrangThai`) VALUES
(1, 'A1-T1', 3, 1, 1),
(2, 'A2-T1', 3, 1, 1),
(3, 'A3-T1', 3, 1, 1),
(4, 'A4-T1', 3, 1, 1),
(5, 'A5-T1', 3, 1, 1),
(6, 'A6-T1', 3, 1, 1),
(7, 'B7-T1', 3, 1, 1),
(8, 'B8-T1', 3, 1, 1),
(9, 'B9-T1', 3, 1, 1),
(10, 'B10-T1', 3, 1, 1),
(11, 'B11-T1', 3, 1, 1),
(12, 'B12-T1', 3, 1, 1),
(13, 'C13-T1', 3, 1, 1),
(14, 'C14-T1', 3, 1, 1),
(15, 'C15-T1', 3, 1, 1),
(16, 'C16-T1', 3, 1, 1),
(17, 'C17-T1', 3, 1, 1),
(18, 'A1-T2', 3, 2, 1),
(19, 'A2-T2', 3, 2, 1),
(20, 'A3-T2', 3, 2, 1),
(21, 'A4-T2', 3, 2, 1),
(22, 'A5-T2', 3, 2, 1),
(23, 'A6-T2', 3, 2, 1),
(24, 'B7-T2', 3, 2, 1),
(25, 'B8-T2', 3, 2, 1),
(26, 'B9-T2', 3, 2, 1),
(27, 'B10-T2', 3, 2, 1),
(28, 'B11-T2', 3, 2, 1),
(29, 'B12-T2', 3, 2, 1),
(30, 'C13-T2', 3, 2, 1),
(31, 'C14-T2', 3, 2, 1),
(32, 'C15-T2', 3, 2, 1),
(33, 'C16-T2', 3, 2, 1),
(34, 'C17-T2', 3, 2, 1),
(35, 'A1-T1', 2, 1, 1),
(36, 'A2-T1', 2, 1, 1),
(37, 'A3-T1', 2, 1, 1),
(38, 'A4-T1', 2, 1, 1),
(39, 'A5-T1', 2, 1, 1),
(40, 'B6-T1', 2, 1, 1),
(41, 'B7-T1', 2, 1, 1),
(42, 'B8-T1', 2, 1, 1),
(43, 'B9-T1', 2, 1, 1),
(44, 'B10-T1', 2, 1, 1),
(45, 'A1-T2', 2, 2, 1),
(46, 'A2-T2', 2, 2, 1),
(47, 'A3-T2', 2, 2, 1),
(48, 'A4-T2', 2, 2, 1),
(49, 'A5-T2', 2, 2, 1),
(50, 'B6-T2', 2, 2, 1),
(51, 'B7-T2', 2, 2, 1),
(52, 'B8-T2', 2, 2, 1),
(53, 'B9-T2', 2, 2, 1),
(54, 'B10-T2', 2, 2, 1),
(55, 'A1-T1', 1, 1, 1),
(56, 'A2-T1', 1, 1, 1),
(57, 'A3-T1', 1, 1, 1),
(58, 'A4-T1', 1, 1, 1),
(59, 'A5-T1', 1, 1, 1),
(60, 'A6-T1', 1, 1, 1),
(61, 'B7-T1', 1, 1, 1),
(62, 'B8-T1', 1, 1, 1),
(63, 'B9-T1', 1, 1, 1),
(64, 'B10-T1', 1, 1, 1),
(65, 'B11-T1', 1, 1, 1),
(66, 'B12-T1', 1, 1, 1),
(67, 'C17-T1', 1, 1, 1),
(68, 'C13-T1', 1, 1, 1),
(69, 'C14-T1', 1, 1, 1),
(70, 'C16-T1', 1, 1, 1),
(71, 'C15-T1', 1, 1, 1),
(72, 'A1-T2', 1, 2, 1),
(73, 'A2-T2', 1, 2, 1),
(74, 'A3-T2', 1, 2, 1),
(75, 'A4-T2', 1, 2, 1),
(76, 'A5-T2', 1, 2, 1),
(77, 'A6-T2', 1, 2, 1),
(78, 'B7-T2', 1, 2, 1),
(79, 'B8-T2', 1, 2, 1),
(80, 'B9-T2', 1, 2, 1),
(81, 'B10-T2', 1, 2, 1),
(82, 'B11-T2', 1, 2, 1),
(83, 'B12-T2', 1, 2, 1),
(84, 'C13-T2', 1, 2, 1),
(85, 'C14-T2', 1, 2, 1),
(86, 'C15-T2', 1, 2, 1),
(87, 'C16-T2', 1, 2, 1),
(88, 'C17-T2', 1, 2, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hanhkhach`
--

DROP TABLE IF EXISTS `hanhkhach`;
CREATE TABLE IF NOT EXISTS `hanhkhach` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Ten` varchar(255) NOT NULL,
  `Sdt` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `TrangThai` int NOT NULL,
  `MatKhau` int DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lotrinh`
--

DROP TABLE IF EXISTS `lotrinh`;
CREATE TABLE IF NOT EXISTS `lotrinh` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Id_DiemDi` int NOT NULL,
  `Id_DiemDen` int NOT NULL,
  `Ten` varchar(255) NOT NULL,
  `QuangDuong` varchar(255) NOT NULL,
  `ChiTiet` varchar(255) NOT NULL,
  `TrangThai` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `lotrinh`
--

INSERT INTO `lotrinh` (`Id`, `Id_DiemDi`, `Id_DiemDen`, `Ten`, `QuangDuong`, `ChiTiet`, `TrangThai`) VALUES
(1, 1, 4, 'Cà Mau - Hồ Chí Minh', '420', 'Xe đời mới - có wifi', 1),
(2, 4, 1, 'Hồ Chí Minh - Cà Mau', '420', 'Xe đời mới - có wifi', 1),
(3, 2, 4, 'Bạc Liêu - Hồ Chí Minh', '320', 'Xe đời mới - có wifi', 1),
(4, 4, 2, 'Hồ Chí Minh - Bạc Liêu', '320', 'Xe đời mới - có wifi', 1),
(5, 3, 4, 'Cần Thơ - Hồ Chí Minh', '150', 'Xe đời mới - có wifi', 1),
(6, 4, 3, 'Hồ Chí Minh - Cần Thơ', '150', 'Xe đời mới - có wifi', 1),
(7, 1, 3, 'Cà Mau - Cần Thơ', '190', 'Xe đời mới - có wifi', 1),
(8, 3, 1, 'Cần Thơ - Cà Mau', '190', 'Xe đời mới - có wifi', 1),
(9, 2, 3, 'Bạc Liêu - Cần Thơ', '170', 'Xe đời mới - có wifi', 1),
(10, 3, 2, 'Cần Thơ - Bạc Liêu', '190', 'Xe đời mới - có wifi', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quanhuyen`
--

DROP TABLE IF EXISTS `quanhuyen`;
CREATE TABLE IF NOT EXISTS `quanhuyen` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Ten` varchar(255) NOT NULL,
  `Id_Tinh` int NOT NULL,
  `TrangThai` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `quanhuyen`
--

INSERT INTO `quanhuyen` (`Id`, `Ten`, `Id_Tinh`, `TrangThai`) VALUES
(1, 'Cà Mau', 1, 1),
(2, 'Bạc Liêu', 2, 1),
(3, 'Cần Thơ', 3, 1),
(4, 'Hồ Chí Minh', 4, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
CREATE TABLE IF NOT EXISTS `taikhoan` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Ten` varchar(255) NOT NULL,
  `NgaySinh` varchar(50) NOT NULL,
  `NoiO` varchar(255) NOT NULL,
  `Sdt` varchar(50) NOT NULL,
  `img` varchar(255) NOT NULL,
  `TrangThai` int NOT NULL,
  `MatKhau` int NOT NULL,
  `Role` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`Id`, `Ten`, `NgaySinh`, `NoiO`, `Sdt`, `img`, `TrangThai`, `MatKhau`, `Role`) VALUES
(1, 'Minh Thinh', '2023-12-18', 'Thủ Đức', '0931211825', '', 1, 12345678, 1),
(2, 'Tài xế 1', '2023-12-01', 'Thủ Đức', '0912345678', '', 3, 0, 2),
(3, 'Phụ xe 1', '2023-12-01', 'Thủ Đức', '0923111222', '', 3, 0, 3),
(4, 'Tài xế 2', '2023-12-02', 'Quận 2', '0945111222', '', 3, 0, 2),
(5, 'Phụ xe 2', '2023-12-02', 'Quận 2', '0935222333', '', 3, 0, 3),
(6, 'Tài xế 3', '2023-12-07', 'Quận 3', '0929000444', '', 3, 0, 2),
(7, 'Phụ xe 3', '2023-12-14', 'Quận 3', '0945223445', '', 3, 0, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan_xe`
--

DROP TABLE IF EXISTS `taikhoan_xe`;
CREATE TABLE IF NOT EXISTS `taikhoan_xe` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Id_Xe` int NOT NULL,
  `Id_TaiKhoan` int NOT NULL,
  `TrangThai` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan_xe`
--

INSERT INTO `taikhoan_xe` (`Id`, `Id_Xe`, `Id_TaiKhoan`, `TrangThai`) VALUES
(1, 1, 2, 1),
(2, 1, 3, 1),
(3, 2, 4, 1),
(4, 2, 5, 1),
(5, 3, 6, 1),
(6, 3, 7, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tinh`
--

DROP TABLE IF EXISTS `tinh`;
CREATE TABLE IF NOT EXISTS `tinh` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Ten` varchar(255) NOT NULL,
  `TrangThai` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `tinh`
--

INSERT INTO `tinh` (`Id`, `Ten`, `TrangThai`) VALUES
(1, 'Cà Mau', 1),
(2, 'Bạc Liêu', 1),
(3, 'Cần Thơ', 1),
(4, 'Hồ Chí Minh', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vexe`
--

DROP TABLE IF EXISTS `vexe`;
CREATE TABLE IF NOT EXISTS `vexe` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Id_ChuyenDi` int NOT NULL,
  `Id_HanhKhach` int NOT NULL,
  `DiemDon` varchar(255) NOT NULL,
  `DiemTra` varchar(255) NOT NULL,
  `TrangThai` int NOT NULL,
  `TongTien` int NOT NULL,
  `ChoNgoi` varchar(255) NOT NULL,
  `thanhtoan` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `xe`
--

DROP TABLE IF EXISTS `xe`;
CREATE TABLE IF NOT EXISTS `xe` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Ten` varchar(255) NOT NULL,
  `Loai` varchar(50) NOT NULL,
  `SoGhe` int NOT NULL,
  `BienSo` varchar(50) NOT NULL,
  `TrangThai` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `xe`
--

INSERT INTO `xe` (`Id`, `Ten`, `Loai`, `SoGhe`, `BienSo`, `TrangThai`) VALUES
(1, 'Xe giường nằm ', 'Thuong', 34, '51K-123.45', 1),
(2, 'Xe giường phòng', 'Vip', 20, '51K-567.89', 1),
(3, 'Xe giường nằm cao cấp', 'Thuong', 34, '51K-111.11', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
