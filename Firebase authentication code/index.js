const email = document.getElementById("email").value;
const password = document.getElementById("pass").value;
const auth = firebase.auth();
// const signbutton = document.getElementById("signupbutton");
// const logbutton = document.getElementById("loginbutton");

function signup(){
    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Error: ",errorCode);
    console.log("Error Message: ",errorMessage);
    // ...
  });
}
function login(){
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    }
    auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
        //   var displayName = user.displayName;
          var useremail = user.email;
          console.log("User email: ",useremail)
        //   var emailVerified = user.emailVerified;
        //   var photoURL = user.photoURL;
        //   var isAnonymous = user.isAnonymous;
        //   var uid = user.uid;
        //   var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
        }
      });
      auth.signOut().then(console.log("log out"));