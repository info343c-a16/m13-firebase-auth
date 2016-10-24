$(function() {
	var config = {
	    apiKey: "AIzaSyCwRIBe_uBpA64RPX3PFBOcz0nPoSYykpo",
	    authDomain: "lab-7718f.firebaseapp.com",
	    databaseURL: "https://lab-7718f.firebaseio.com",
	    storageBucket: "lab-7718f.appspot.com",
	    messagingSenderId: "653768345802"
	};
	firebase.initializeApp(config);

	var provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/plus.login');

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			window.location = "./views/user.html"
		} else {
			
		}
	});

	$("#signin").on("click", function() {
		firebase.auth().signInWithPopup(provider).then(function(result) {
			console.log(result);
		});
	});
});