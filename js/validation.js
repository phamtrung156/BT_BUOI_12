function Validation(){
    this.checkEmpty = function(input, divId, mess){
        if(input.trim()=== ""){
            Dom(divId).innerHTML = mess;
            Dom(divId).className = "alert alert-danger"
            return false;
        }else{
            Dom(divId).innerHTML = "";
            Dom(divId).className = ""
            return true
        }
    }
}