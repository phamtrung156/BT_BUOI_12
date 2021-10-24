function SanPhamItem() {
    this.getListProductApi = function () {
        return axios({
            url: "https://616fd5b623781c0017289643.mockapi.io/product",
            method: "GET"
        })
    }
    // thêm nhân viên
    this.addProductApi = function (product) {
        return axios({
            url: "https://616fd5b623781c0017289643.mockapi.io/product",
            method: "POST",
            data: product
        })
    }

    // xóa nhân viên
    this.deleteProductApi = function (id) {
        return axios({
            url: `https://616fd5b623781c0017289643.mockapi.io/product/${id}`,
            method: "DELETE"
        })
    }

    //  sửa nhân viên
    this.getProductByApi = function (id) {
        return axios({
            url: `https://616fd5b623781c0017289643.mockapi.io/product/${id}`,
            method: "GET"
        })
    }

    this.updataProductApi = function (product) {
        return axios({
            url: `https://616fd5b623781c0017289643.mockapi.io/product/${product.id}`,
            method: "PUT",
            data: product
        })
    }
}