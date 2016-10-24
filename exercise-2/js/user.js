$(function() {
	var config = {
	    apiKey: "AIzaSyCwRIBe_uBpA64RPX3PFBOcz0nPoSYykpo",
	    authDomain: "lab-7718f.firebaseapp.com",
	    databaseURL: "https://lab-7718f.firebaseio.com",
	    storageBucket: "lab-7718f.appspot.com",
	    messagingSenderId: "653768345802"
	};
	firebase.initializeApp(config);

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log(user);
			$("#username").text(user.displayName);
		} else {
			window.location = "../index.html";
		}
	});

	$("#signout").on('click', function() {
		firebase.auth().signOut().then(function() {
			window.location = "../index.html";
		})
	});
});