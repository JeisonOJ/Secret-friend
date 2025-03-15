const friends = [];

document.querySelector(".button-draw").addEventListener("click", drawSecretFriend);
document.querySelector("#form").addEventListener("submit", event => {
    event.preventDefault();
    addFriend();
});
const result = document.querySelector("#result");

function addFriend() {
    result.textContent = "";
    const friendInput = document.querySelector("#friend");
    const friendName = friendInput.value.trim();
    let errorMessage = document.querySelector("#error-message");

    errorMessage.textContent = "";
    errorMessage.style.visibility = "hidden";

    if (!friendName) {
        errorMessage.textContent = "Please enter a friend's name.";
        errorMessage.style.visibility = "visible";
        return;
    }

    if (friends.includes(friendName)) {
        errorMessage.textContent = `${friendName} is already in the list.`;
        errorMessage.style.visibility = "visible";
        return;
    }

    friends.push(friendName);
    updateFriendsList();

    friendInput.value = "";
    errorMessage.style.visibility = "hidden";
}

function updateFriendsList() {
    const friendList = document.querySelector("#friend-list");
    friendList.innerHTML = "";

    if (friends.length === 0) {
        friendList.innerHTML = "<li>No friends added yet.</li>";
        return;
    }

    friends.forEach(friend => {
        const li = document.createElement("li");
        li.textContent = friend;
        friendList.appendChild(li);
    });
}

function drawSecretFriend() {
    if (friends.length === 0) {
        alert("Please add at least one friend.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * friends.length);
    const secretFriend = friends.splice(randomIndex, 1)[0];

    updateFriendsList();
    result.textContent = `🎁 Secret Friend: ${secretFriend} 🥳`;
}

updateFriendsList();
