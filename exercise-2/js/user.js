$(function() {
	// Set the config object with the values for your application
	var config = {
		apiKey: "",
		authDomain: "",
		databaseURL: "",
		storageBucket: "",
		messagingSenderId: ""
	};
	firebase.initializeApp(config);

	// Initialize your 'users' firebase reference

	// Get all the items in 'users' and for each item, render it
	// (for now just call renderUser for each user object, we'll
	// write that function next). If you run out of time to actually
	// render the users to the screen, you can simply print them to
	// the console.


	// Get the element with id cards. This is where we'll add each user card

	var renderUser = function(id, content) {
		// Make a div for the card with classes 'card' and 'valign-wrapper'

		// Make an image element with classes 'valign' and profile_pic. Set its source to
		// be this user's profile_pic

		// Make an h3 element with classes valign and username. Set its text to
		// be this user's name

		// Add the name and image to the card

		// Add the card to the cards div
	}

	// Goes back to index.html if the user is signed out
	firebase.auth().onAuthStateChanged(function(user) {
		if (!user) {
			window.location = "../index.html";
		}
	});

	$("#signout").on('click', function() {
		// Sign out the current user
	});
});