/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use device APIs
    
}




  function sendEmail(){
     
      var email = $('#email').val().toString();
    var name = $('#name').val().toString();
    var surname = $('#surname').val().toString();
    var tel = $('#tel').val().toString();
    var message = $('#message').val().toString(); 
    //window.alert("Email: "+email+"\n"+"Όνομα: "+name+"\n"+"Επίθετο: "+surname+"\n"+"Τηλ: "+tel+"\n"+message);
    //var bodyMessage = message+"%0D%0A--------------------%0D%0A"+"Email: "+email+"%0D%0A"+"Όνομα: "+name+"%0D%0A"+"Επίθετο: "+surname+"%0D%0A"+"Τηλ: "+tel;
        var bodyMessage = message+"%0D%0A--------------------%0D%0A"+"Email: "+email+"%0D%0A"+"Όνομα: "+name+"%0D%0A"+"Επίθετο: "+surname+"%0D%0A"+"Τηλ: "+tel;
//window.alert(bodyMessage);
      //window.alert("hallo");
    window.open('mailto:toxiclera@gmail.com?subject=RMP Contact Form&body='+bodyMessage);

    
    };

function checkInternet(){
    if(! navigator.onLine){
        $('#mapouter').css('display','none');
        $('#disconnectText').css('display','block');
        $('#disconnect').css('display','block');
    
    }
}

$(window).load(function(){
    $('div.loader').hide();
});





