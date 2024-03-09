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

  username=localStorage.getItem("username")
  room_name=localStorage.getItem("room_name")
  function Send(){
    message=document.getElementById("message").value
    firebase.database().ref(room_name).push({
      name:username,
      message:message,
      like:0
    });
    document.getElementById("message").innerHTML=""
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();