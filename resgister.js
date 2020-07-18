
function check(){
    var phonenum1 = document.getElementById("phonenum").value;
    var pat = "[0-9]{10}";
    var pswrd_1 = document.querySelector("#pswrd_1");
    var pswrd_2 = document.querySelector("#pswrd_2");
    var errorText = document.querySelector(".error-text");
    var email=document.getElementById("emailid");
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var date = document.getElementById("dt").value;
    if(email.value==""){
        alert("email should not be empty");
        return false;
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
        alert("enter valid email address");
        return false;
    }
    else if(pswrd_1.value=="" || pswrd_2.value==""){
        alert("password should not be empty");
        return false;
    }
    else if((pswrd_1.value).length<6 || (pswrd_2.value).length<6){
        alert("Password length should be min 6 characters")
        return false;
    }

    else if(!(phonenum1.match(pat)) || (phonenum1.length>10))
    {   
        alert("Enter 10 digit mobile number!!");
        return false;
    }
    else if(!(date.match(dateformat))){
        alert('Invalid date format!.. Enter Correct Date!!');
        return false;
    }
    else if(pswrd_1.value != pswrd_2.value){
            errorText.style.display = "block";
            errorText.classList.remove("matched");
            errorText.textContent = "Error! Confirm Password Not Match";
            return false;
            }else{
            errorText.style.display = "block";
            errorText.classList.add("matched");
            errorText.textContent = "Registered Successfully";
            window.setTimeout(
                function(){
                  location.reload(true)
                },
                3000
              );
            
            return true;
        }
    
}