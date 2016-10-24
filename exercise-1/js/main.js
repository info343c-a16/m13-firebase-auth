// JavaScript file

$(function() {
    // Chats reference
    var chats = firebase.database().ref('chats');

    // Function to render each chat
    var renderChat = function(id, data) {
        // Store each chat in a div
        var newChat = $('<div>');

        // Add a span of the username with class "user"
        var name = $('<span>').addClass('user').text(data.name + ':');

        // Add a span that has the text of the chat
        var message = $("<span>").text(data.chat);

        // Append element to the page
        newChat.append(name);
        newChat.append(message);
        $('#chat-box').append(newChat);
    };


    // Listen for children being added:fired once on load, then each time a child is added
    chats.on('child_added', function(snapshot) {
        var data = snapshot.val();
        // Pass key, data to snapshot function
        renderChat(snapshot.key, data);
    });

    // Assign event listener to the chat button
    $('#chat-button').on('click', function() {

        // Push in a new element to the chats reference
        chats.push({
            name: firebase.auth().currentUser.displayName,
            chat: $("#message").val()
        });
        $('#message').val('');
    });

});
