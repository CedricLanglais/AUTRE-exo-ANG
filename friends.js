class Friend {
    attributs(id, name, paragraphe) {
        this.id = id;
        this.name = name;
        this.paragraphe = paragraphe;
        this.likes = 0;
    }

    addLike() {
        this.likes++;
        like();
    }

    removeLike() {
        if (this.likes > 0) {
            this.likes--;
            like();
        }
    }

}

let john = new Friend(1, 'John', 'John est un ami proche de feur');
let emily = new Friend(2, 'Emily', 'Emily est une amie de feur wtf?');
let mike = new Friend(3, 'Mike', 'Mike est un ami de andonigger.');

let likeCount = 0

function addLike(friendId) {
    let friendElement = document.getElementById('friend' + friendId);
    let likeButton = friendElement.querySelector('button');
    likeCount++;
    likeButton.innerText = likeCount + ' Likes';
}
function like() {
    const friends = [john, emily, mike];
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        const likesElement = document.getElementById(`likes`);
        likesElement.textContent = friend.likes;
    }

    let maxLikes = 0;
    let maxLikesFriend = null;

    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.likes > maxLikes) {
            maxLikes = friend.likes;
            maxLikesFriend = friend;
        }
    }
}

// Section pour mettre en gras le nom de le plus liké //

for (let i = 0; i < friend.length; i++) {
    const friend = friend[i];
    const nameElement = document.getElementById(`name`);
    nameElement.style.fontWeight = friend === maxLikesFriend ? 'bold' : 'normal';
}

// Section pour faire fonctionner les boutons removeLike //

let John = document.getElementById("friend11");
let Emily = document.getElementById("friend22");
let Mike = document.getElementById("friend33");


john.removeLike = function () {
    console.log("Like removed for John");
};

emily.removeLike = function () {
    console.log("Like removed for Emily");
};

mike.removeLike = function () {
    console.log("Like removed for Mike");
};