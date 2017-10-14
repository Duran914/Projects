// Js functions for Z-Tech Web Design site

//Error varibles for forms
var fnameError = "Enter A First Name";
var lnameError = "Enter A Last Name";
var emailError = "Enter A Vaild Email Address";
var textaError = "Plase Enter A Message";
var selectError ="Choose A Reason";
var subscribe = "Thank You For Subscribing";


// Jquery for responsive menu
$(document).ready(function(){
  $('#menu').click(function(){
    $('ul').toggleClass('active');
    $('#menu').toggleClass('activeMenu');
  });
});

// X button on newsletter
$(document).ready(function(){
  $('#fa-x').click(function(){
    $('#newsBanner').remove();
  });
});

function subMessage(){
   var sub_email = document.forms["sub"]["email"].value;
   if ( sub_email !== "") {
     document.getElementById('newsBanner').remove();
     document.getElementById('subBanner').innerHTML = subscribe;
     document.getElementById('subBanner').style.padding = "20px";
     document.getElementById('emptyEmail').remove();
  }
  else{
    document.getElementById("emptyEmail").innerHTML = emailError;
    document.getElementById('emptyEmail').style.color = " #ff0000";
    return false;
   }
 }


//validates form input on services page
function quoteValidate(){
  var quote_fname = document.forms["quoteForm"]["fname"].value;
  if (quote_fname == "") {
    document.getElementById("fname_error").innerHTML = fnameError;
    document.getElementById('fname_error').style.color = " #ff0000";
  }

  var quote_lname = document.forms["quoteForm"]["lname"].value;
  if (quote_lname == "") {
    document.getElementById("lname_error").innerHTML = lnameError;
    document.getElementById('lname_error').style.color = " #ff0000";
  }

  var quote_email = document.forms["quoteForm"]["email"].value;
  if (quote_email == "") {
    document.getElementById("email_error").innerHTML = emailError;
    document.getElementById('email_error').style.color = " #ff0000";
  }

  var quote_texta = document.forms["quoteForm"]["texta"].value;
  if (quote_texta == "") {
    document.getElementById("texta_error").innerHTML = textaError;
    document.getElementById('texta_error').style.color = " #ff0000";
    return false;
  }

}

//validates form input on about us page
function contactValidate(){

  var contact_fname = document.forms["contactForm"]["fname"].value;
  if (contact_fname == "") {
    document.getElementById("fname_error").innerHTML = fnameError;
    document.getElementById('fname_error').style.color = " #ff0000";
  }
  var contact_lname = document.forms["contactForm"]["lname"].value;
  if (contact_lname == "") {
    document.getElementById("lname_error").innerHTML = lnameError;
    document.getElementById('lname_error').style.color = " #ff0000";
  }
  var contact_email = document.forms["contactForm"]["email"].value;
  if (contact_email == "") {
    document.getElementById("email_error").innerHTML = emailError;
    document.getElementById('email_error').style.color = " #ff0000";
  }
  var contact_texta = document.forms["contactForm"]["texta"].value;
  if (contact_texta == "") {
    document.getElementById("texta_error").innerHTML = textaError;
    document.getElementById('texta_error').style.color = " #ff0000";
    return false;
  }
}
