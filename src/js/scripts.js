var contact = function(name, email, contacts) {
  return  name + email + contacts;
};
function submitClick( )//function shows message after submitting information
{
  alert ("Thank you for your time,Your Details have been submitted!");
}
$(document).ready(function(){
  $("#contact form").submit(function(event){
    e.preventDefault();
    var name = $("#name").val();
    var email =$("#name").val();
    var contacts =$("#contacts").val();
    alert(contact(name, email, contacts));
  });
});
