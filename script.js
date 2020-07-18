
function Validate() {
    var mailid = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
   
    if (mailid=="" || pwd==""){
    alert("Empty Field")
        return false;
    }
    else if(mailid!="arhsi@gmail.com"){
        alert("Kindly Regitser!!");
        return false;
    }
    else{
        return true;
    }
}
