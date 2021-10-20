function Dom(id) {
    return document.getElementById(id);
}
// =========================
var product = new SanPhamItem();
function getData() {
    product.getListProductApi()
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
        <td>${index + 1 } </td>
        <td>${item.tenSP} </td>
        <td>${item.gia} </td>
        <td><img src="./../img/${item.hinhAnh} "width = "100" />
        </td>
        <td>${item.moTa} </td>
        <td>${item.loaiND} </td>
        <td>${item.ngonNgu} </td>
        </tr>
        `

    });
    Dom("tblDanhSachSP").innerHTML = content
}