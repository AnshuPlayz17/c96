var firebaseConfig = {
    apiKey: "AIzaSyAdF-UXz-tualTyhA7Fsk7Z8AqXZynNY3E",
    authDomain: "lets-talk-472cd.firebaseapp.com",
    databaseURL: "https://lets-talk-472cd-default-rtdb.firebaseio.com",
    projectId: "lets-talk-472cd",
    storageBucket: "lets-talk-472cd.appspot.com",
    messagingSenderId: "509451200974",
    appId: "1:509451200974:web:ffa62462546f3443f3e39f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("username");
  document.getElementById("name").innerHTML="welcome "+ username+"!";

  function addRoom(){
    room_name=document.getElementById("roomname").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"addingroomname"
    });

    localStorage.setItem("roomname", room_name);

    window.location = "kwitter_page.html";

  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log(Room_names)
   row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+ "</div><hr>"
   document.getElementById("roomcollection").innerHTML+=row

   //End code
   });});}
getData();

function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("room_name", name)
  window.location="kwitter_page.html"


}


function logout(){
  localStorage.removeItem("username")
  localStorage.removeItem("room_name")
  window.location="index.html"
}