function NguoiDungService(){

    



    this.LayDanhSachNguoiDung = function(){
        // giao thuc voi AJAX syntax
        $.ajax({
            url:"http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            // giao thuc
            //   GET lay thong tin
            //   POST them thon tin len DB
            //  PUT cap nhat thong tin nguoi dung
            //  GET  xoa thong tin tren DB
            type:"GET" 
        })
        // kiem tra du lieu co lay thanh cong hay khong
        .done(function(result){
            localStorage.setItem("DSND", JSON.stringify(result));
            taoBang(result);
           
        })
        .fail(function(eror){
            console.log(eror);
        })

    }

// phuong thuc them nguoi dung
    this.themNGuoiDung = function(nguoidung){
        $.ajax({
            url:"http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            // giao thuc
            //   GET lay thong tin
            //   POST them thon tin len DB
            //  PUT cap nhat thong tin nguoi dung
            //  GET  xoa thong tin tren DB
            type:"POST",
            data: nguoidung 
        })
        .done(function(result){
            if(result === "tai khoan da ton tai !"){
                alert("tai khoan da ton tai !");
            }
            else{
                location.reload();
            }
        })
        .fail(function(eror){
            console.log(eror);
        })
    }


    this.xoaNguoiDung = function(taikhoan){
        $.ajax({
            url:`http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taikhoan}`,
            // giao thuc
            //   GET lay thong tin
            //   POST them thon tin len DB
            //  PUT cap nhat thong tin nguoi dung
            //  GET  xoa thong tin tren DB
            type:"DELETE"
            
        })
        .done(function(result){
            console.log(result);
        })
        .fail(function(eror){
            console.log(eror);
        })
    }

    this.laythongtinND = function(taikhoanND){
        var DanhSachNguoiDung = JSON.parse(localStorage.getItem("DSND"));
        // var nguoidung;
        // DanhSachNguoiDung.map(function(item){
        //     if(item.TaiKhoan === taikhoanND){
        //         nguoidung = item;
        //         return nguoidung;
        //     }
        //     else{
        //         return -1;
        //     }
        // }) 
        // return nguoidung;
        return DanhSachNguoiDung.find(function(item){
            return (item.TaiKhoan === taikhoanND || item.SoDT === taikhoanND)
        })
        
    }

    this.capnhatNguoiDung = function(nguoidung){
        var user = JSON.stringify(nguoidung);
        $.ajax({
            url:"http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung",
            // giao thuc
            //   GET lay thong tin
            //   POST them thon tin len DB
            //  PUT cap nhat thong tin nguoi dung
            //  GET  xoa thong tin tren DB
            type:"PUT",
            contentType: "application/json",
            dataType: "json",
            data: user, 
            
        })
        .done(function(result){
            
            location.reload();
        })
        .fail(function(eror){
            console.log(eror);
        })
    }

    
}




function taoBang(mangTruyenVao){
    var tblBody = ``;   

    

    for(var i = 0; i < mangTruyenVao.length; i++){
        tblBody += `
            <tr class="trthogntinND">
                <td>${i+1}</td>
                <td>
                ${mangTruyenVao[i].TaiKhoan}
                </td>
                <td>
                ${mangTruyenVao[i].MatKhau}
                </td>
                <td>
                ${mangTruyenVao[i].HoTen}
                </td>
                <td>
                ${mangTruyenVao[i].Email}
                </td>
                <td>
                ${mangTruyenVao[i].SoDT}
                </td>
                <td>
                ${mangTruyenVao[i].TenLoaiNguoiDung}
                </td>
                <td>
                    <button class="btn btn-success btnSua" data-toggle="modal" data-target="#myModal" 
                    data-taikhoan="${mangTruyenVao[i].TaiKhoan}">Sửa</button>
                </td>
                <td>
                    <button class="btn btn-danger btnXoa" data-taikhoan="${mangTruyenVao[i].TaiKhoan} ">Xóa</button>
                    
                </td>
            </tr>

        `
    }
    $("#tblDanhSachNguoiDung").html(tblBody);
    
}

// function layThongTinND(taikhoan){
//     for(var i = 0, )
// }