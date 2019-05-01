//Login
function login(){
    function newLoginHappened(user){
        if (user){
            //user is signed in
            app(user);
        }else{
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
            app(user);
        }
    }
    firebase.auth().onAuthStateChanged(newLoginHappened);   
}

//Populate User Data
function app(user){
    //user.displayName
    //user.email
    //user.photoURL
    document.getElementById("client-name").innerHTML = user.displayName;
    document.getElementById("client-photo").setAttribute("src", user.photoURL);
}

//Logout
function logout(){
    firebase.auth().signOut();
}


