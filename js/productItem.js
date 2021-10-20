function SanPhamItem(){
    this.getListProductApi = function(){
        return axios({
            url: "https://616fd5b623781c0017289643.mockapi.io/product",
            method: "GET"
        })
    }
}