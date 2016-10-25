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

	// Checks to see if a user is already signed in and if so redirects
	// to users.html
	var user = firebase.auth().currentUser;
	if (user) {
		window.location = "./views/user.html"
	}

	var authFunc = function(service) {
		// Check to see if the service is google or github and set
		// provider accordingly (more info on login with 3rd party
		// providers can be found in the firebase documentation).

		// Sign into firebase using the correct provider

			// Log the user result to the console to see what a user object
			// looks like


			// Check to see if we have already saved a user with this id
			// to our users ref

				// If there is no user with this id, make a new object with
				// this user's id and set its name and photoURL and add it as
				// a child to your user ref

			// Navigate to the user.html page once sign in is complete
	}

	$("#google-signin").on("click", function() {
		authFunc("google");
	});

	$("#github-signin").on("click", function() {
		authFunc("github");
	});
});