$(function() {
	// Set the config object with the values for your application
	var config = {
		apiKey: "AIzaSyCwRIBe_uBpA64RPX3PFBOcz0nPoSYykpo",
		authDomain: "lab-7718f.firebaseapp.com",
		databaseURL: "https://lab-7718f.firebaseio.com",
		storageBucket: "lab-7718f.appspot.com",
		messagingSenderId: "653768345802"
	};
	firebase.initializeApp(config);

	// Initialize your 'users' firebase reference
	var users = firebase.database().ref("users");

	// Get all the items in 'users' and for each item, render it
	// (for now just call renderUser for each user object, we'll
	// write that function next). If you run out of time to actually
	// render the users to the screen, you can simply print them to
	// the console.
	users.on("value", function(snapshot) {
		var data = snapshot.val();
		Object.keys(data).forEach(function(d) {
			renderUser(d, data[d]);
		});
	});

	// Get the element with id cards. This is where we'll add each user card
	var cards = $("#cards");

	var renderUser = function(id, content) {
		// Make a div for the card with classes 'card' and 'valign-wrapper'
		var card = $("<div>").addClass("card valign-wrapper");

		// Make an image element with classes 'valign' and profile_pic. Set its source to
		// be this user's profile_pic
		var img = $("<img>").attr("src", content.profile_pic).addClass("valign profile_pic");

		// Make an h3 element with classes valign and username. Set its text to
		// be this user's name
		var name = $("<h3>").text(content.name).addClass("valign username");

		// Add the name and image to the card
		card.append(img);
		card.append(name);

		// Add the card to the cards div
		cards.append(card);
	}

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			getUsers();
		} else {
			window.location = "../index.html";
		}
	});

	$("#signout").on('click', function() {
		// Sign out the current user
		firebase.auth().signOut().then(function() {
			window.location = "../index.html";
		})
	});
});