function adduser(){
    username=document.getElementById("user").value;
    localStorage.setItem("username", username);
    window.location="Kwitter_room.html"
}