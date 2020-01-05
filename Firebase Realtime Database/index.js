var database = firebase.database();
function writeUserData() {
    // dataNo += userNo;
    var email = document.getElementById("email").value;
    var emailwithoutdotcom = email.slice(0, -4);
    var username = document.getElementById("username").value;
    database.ref().child(emailwithoutdotcom).set(username);
    // console.log(database.ref().child("Users"));
}
function getData() {
    var toGetName = document.getElementById("toGetname").value;
    var emailwithoutdotcom = toGetName.slice(0, -4);
    var starCountRef = firebase.database().ref(emailwithoutdotcom);
    starCountRef.on('value', function(snapshot) {
    //   updateStarCount(postElement, snapshot.val());
        console.log(snapshot.val());
    });
}



// var str = "Hello TecAdmin!";
// console.log(str);

// console.log(newStr);