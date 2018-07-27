//ajax code

/*function get_more(){
 
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function(){
   	   if(xhttp.readyState ==4 && xhttp.status ==200){
   	   	document.getElementById('more').innerHTML = xhttp.responseText;
   	    }
   }
   xhttp.open("GET.html","data.txt",true);
   xhttp.send();
}
*/

function vlidate(){

        var name = document.regs.fname.value;
        var emial = document.regs.email.value;
        var phone = document.regs.phone.value;
        var city = document.regs.city.value;
        var pass = document.regs.pass.value;
        var c_pass = document.regs.c_pass.value;

        if(username_validation(name,4,8) && allLetter(name)){
        	if(passwd_validation(pass,c_pass,8,12)){
        		if(phone_validation(phone)){
        			if(city_validation(city)){

        			}

        		}

        	}
        }

        return false;

       
}

function passwd_validation(pass,c_pass ,min_len, max_len){

	if(pass !=c_pass){
		document.getElementById("password_err").innerHTML ="password don't match";
		document.regs.pass.focus();
		return false;
        }
     else if(pass.length < min_len){
     	document.getElementById("password_err").innerHTML ="password is too short";
     	document.regs.pass.focus();
     	return false;
     }
     else if(pass.length > max_len){
     	document.getElementById("password_err").innerHTML  ="Too long password";
     	document.regs.pass.focus();
     	return false;
     }
     else{
     	return true;
     }

   }



function username_validation(name,min_len,max_len)
{
var name_len = name.length;
if(name_len == 0){
    document.getElementById("name_err").innerHTML = "user name can't be empty";
     document.regs.fname.focus();
    return false;
}
else if ( name_len > max_len && name_len < min_len)
{
 document.getElementById("name_err").innerHTML ="user name should be between "+min_len+" to "+max_len +"length";
 document.regs.fname.focus();
return false;
}
else{

  return true; 
 }

}


//validation for name contente
function allLetter(name)
{ 
var letters = /^[A-Za-z]+$/;
if(name.match(letters))
{
return true;
}
else
{
 document.getElementById("name_err").innerHTML ="user name should contain only lower and upper case";
 regs.fname.focus();
 return false;
}
}


//phone validation 

function phone_validation(phone){
    //document.getElementById("phone")
    var num =/^[0-9]+$/ ;
    if(phone.length <10){

         document.getElementById("phone_err").innerHTML = "phone length should be11";
         document.regs.phone.focus();
         return false;
       }
    else if(phone.match(num)){
    	document.getElementById("phone_err").innerHTML ="phone number should only be numbers";
    	document.regs.phone.focus();
    	return false;
      }

    else{
    	return true;
    }
     


}


function city_validation(name)
{ 
var letters = /^[A-Za-z]+$/;
if(name.match(letters))
{
return true;
}
else
{
 document.getElementById("name_err").innerHTML ="city name should contain only lower and upper case";
 regs.fname.focus();
 return false;
}
}















