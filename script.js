$("#myForm").submit(function (e) {
    // prevent submit form from refreshing page //
    e.preventDefault();   
    // --------------------- //
    
    if($("#message").val()=="") {
        document.getElementById("heading_2").style.display="block";
    } else {
        $("#heading_1").html($("#message").val())
        $("#message").val("")
        document.getElementById("heading_2").style.display="none"
    }



   
});


// function mySubmit(){
//     document.getElementById('heading_1').innerHTML = document.querySelector('#message').value;
//     // alert(document.querySelector('#message').value)
// }