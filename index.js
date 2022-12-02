
//hamburger menu button (mobile)
const menuBtn=document.querySelector('.stripes-button');
const navBar= document.querySelector('.link-bar');
menuBtn.addEventListener("click",function(){
  navBar.classList.toggle('mobile-button');
 
});





// to make a **** for credit card
var number = $('#creditCard');


$('#creditCard').keyup(function(){
    if($('#creditCard').val().length < 1){
       
    }
    else{
        var a = '';
        if(number.val().length <= 8){
            for(var i = 0; i < number.val().length; i++){                
                a = a + '*';           
                display.text(a);  
            }
        }
        else
        {
            for(var i = 0; i < number.val().length; i++){ 
                if(i <= 8){
                    a = a + '*';           
                    display.text(a);  
                }
                else{          
                    a = a + number.val().substring(i,i+1);           
                    display.text(a);  
                }
            }
        }
    }
});



// contact section

function validate(){
  let name = document.getElementById("name").value;
  let subject = document.getElementById("subject").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 7){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 50){
    text = "Please Enter More Than 50 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Thank you for contacting us, we will get in touch with you soon");
  return true;
}