$(document).ready(function(){
    // chống lỗi khi dom qua HTML
    var userservice =  new NguoiDungService();
    LayDanhSachUser();

    function FixHeaderFooterModal(title, btnthem, idbtn){
        $(".modal-title").html(title);
        
        var footer = `
            <button class="btn btn-success" id="${idbtn}">
            ${btnthem}</button>
        `
        $(".modal-footer").html(footer);
    }

    $("#btnThemNguoiDung").click(function(){
        //  FixHeaderFooterModal("Thêm Người Dùng, "Them", "btnThem");
        FixHeaderFooterModal("Thêm NGười Dùng", "Thêm", "btnThem" );

    });

    //Syntax giai quyet thao tac voi nut dc DOM ra sau khong co trong file index can duoc ủy quyenf lại 

    $("body").delegate(".btnSua","click", function(){
        FixHeaderFooterModal("Cập NHật", "Cập Nhật", "btnCapNhat" );
        var taiKHoan = $(this).data('taikhoan');
        
        var user = userservice.laythongtinND(taiKHoan);
        
        $("#TaiKhoan").attr("disabled", "disabled");
        $("#TaiKhoan").val(user.TaiKhoan);
        $("#HoTen").val(user.HoTen);
        $("#MatKhau").val(user.MatKhau);
        $("#Email").val(user.Email);
        $("#SoDienThoai").val(user.SoDT);
        $("#loaiNguoiDung").val(user.MaLoaiNguoiDung);
       
        
        
        

    });

    $("body").delegate("#btnCapNhat","click", function(){
        var tk = $("#TaiKhoan").val();
        var ten = $("#HoTen").val();
        var mk = $("#Mật khẩu").val();
        var email = $("#Email").val();
        var sdt = $("#SoDienThoai").val();
        var loaiND = $("#loaiNguoiDung").val();

        var user = new NGuoiDung(tk,mk,ten,email,sdt,loaiND);
        userservice.capnhatNguoiDung(user);
        
    });


    $("body").delegate(".btnXoa","click", function(){
        var taiKHoan = $(this).data('taikhoan');
        userservice.xoaNguoiDung(taiKHoan);
        
    });


    $("body").delegate("#btnThem", "click", function(){
        var tk = $("#TaiKhoan").val();
        var ten = $("#HoTen").val();
        var mk = $("#Mật khẩu").val();
        var email = $("#Email").val();
        var sdt = $("#SoDienThoai").val();
        var loaiND = $("#loaiNguoiDung").val();

        var user = new NGuoiDung(tk,mk,ten,email,sdt,loaiND);

        userservice.themNGuoiDung(user);
    
    })

    function LayDanhSachUser (){
        userservice.LayDanhSachNguoiDung();
       
    }

   






})
