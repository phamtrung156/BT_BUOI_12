function Dom(id) {
    return document.getElementById(id);
}

var validation = new Validation();
// =========================
var products = new SanPhamItem();
function getData() {
    products.getListProductApi()
        .then(function (rs) {
            console.log(rs.data);
            renderListProduct(rs.data)

        })
        .catch(function (error) {
            console.log(error);
        })
}
getData();

function renderListProduct(list) {
    var content = ""
    list.forEach(function (item, index) {
        content += `
        <tr> 
        <td>${index + 1} </td>
        <td>${item.tenSP} </td>
        <td>${item.gia} </td>
        <td><img src="./../img/${item.hinhAnh} "width = "100" />
        </td>
        <td>${item.moTa} </td>
        <td>${item.loaiND} </td>
        <td>${item.ngonNgu} </td>
        <td><button class="btn btn-success" data-toggle="modal" data-target="#exampleModal"  onclick="editProduct(${item.id})">Sửa sản phầm</button></td>
        <td><button class="btn btn-danger"   onclick="deleteProduct(${item.id})">Xóa</button></td>
        </tr>
        `

    });
    Dom("tblDanhSachSP").innerHTML = content
}
// thêm sản phẩm
function getInfo(isAdd) {
    var tenSP = Dom("tenSp").value;
    var giaSP = Dom("giaSp").value;
    var hinhSP = Dom("hinhSp").value;
    var moTaSP = Dom("moTa").value;
    var loaiND = Dom("loaiNd").value;
    var ngonNguSP = Dom("ngonNgu").value;
    var isValid = true;

    if (isAdd) {
        isValid &= validation.checkEmpty(tenSP, "tenErr", "* vui lòng nhập tên sản phẩm")

        isValid &= validation.checkEmpty(giaSP, "giaErr", "* Vui lòng nhập giá sản phẩm")
        isValid &= validation.checkEmpty(hinhSP, "hinhAnhErr", "* Vui lòng nhập hình ảnh")

        isValid &= validation.checkEmpty(moTaSP, "moTaErr", "* Vui lòng nhập mô tả")

        isValid &= validation.checkEmpty(loaiND, "loaiErr", "* vui lòng nhập loại sp")
        isValid &= validation.checkEmpty(ngonNguSP, "ngonNguErr", "* vui lòng nhập ngôn ngữ")

    }
    if (isValid) {

        var sanPham = new SanPham("",
            tenSP,
            giaSP,
            hinhSP,
            moTaSP,
            loaiND,
            ngonNguSP)
        return sanPham
    }
    return null

}
// thêm sản phẩm
function addProduct() {
    var sanPham = getInfo(true)
    if (sanPham !== null) {
        products.addProductApi(sanPham)
            .then(function (rs) {
                console.log(rs.data);
                getData();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

}

// xóa sản phầm
function deleteProduct(id) {
    products.deleteProductApi(id)
        .then(function () {
            alert("Xóa thành công")
            getData()
        })
        .catch(function (error) {
            console.log(error);
        })
}

// sửa sản phẩm
function editProduct(id) {
    document.getElementsByClassName("modal-title")[0].innerHTML = "Sửa";
    var footer = `<button class = "btn btn-success" onclick = "updateProduct(${id})" > Câp nhật sản phẩm </button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer
    products.getProductByApi(id)
        .then(function (rs) {
            tenSP = Dom("tenSp").value = rs.data.tenSP
            giaSP = Dom("giaSp").value = rs.data.gia
            hinhSP = Dom("hinhSp").value = rs.data.hinhAnh
            moTaSP = Dom("moTa").value = rs.data.moTa
            loaiND = Dom("loaiNd").value = rs.data.loaiND
            ngonNguSP = Dom("ngonNgu").value = rs.data.ngonNgu
        })
        .catch(function (error) {
            console.log(error);
        })

}
function updateProduct(id) {
    var tenSP = Dom("tenSp").value;
    var giaSP = Dom("giaSp").value;
    var hinhSP = Dom("hinhSp").value;
    var moTaSP = Dom("moTa").value;
    var loaiND = Dom("loaiNd").value;
    var ngonNguSP = Dom("ngonNgu").value;

    var sanPham = new SanPham(id, tenSP, giaSP, hinhSP, moTaSP, loaiND, ngonNguSP)

    products.updataProductApi(sanPham)
        .then(function () {
            alert("cập nhật thành công")
            getData();
        })
        .catch(function (error) {
            alert("thất bại")
            console.log(error);
        })
}