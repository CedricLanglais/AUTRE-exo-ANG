class Friend {
    constructor(id, name, paragraphe) {
        this.id = id;
        this.name = name;
        this.paragraphe = paragraphe;
        this.likes = 0;
        document.getElementById("friend" + id).onclick = event => {this.addLike()}
        document.getElementById("friend" + id + id).onclick = event => {this.removeLike()}

    }

    addLike() {
        this.likes++;
        updateLikeDisplay();
        console.log(this.name + " has this many likes : " + this.likes);

        
    }

    removeLike() {
        if (this.likes > 0) {
            this.likes--;
            updateLikeDisplay();
            console.log(this.name + " has this many likes : " + this.likes);
        }
        else {
            console.log("on a 0 like");
        }
    }
}

let john = new Friend(1, 'John', 'John est un ami proche de feur');
let emily = new Friend(2, 'Emily', 'Emily est une amie de feur wtf?');
let mike = new Friend(3, 'Mike', 'Mike est un ami de andonigger.');

function updateLikeDisplay() {
    const friends = [john, emily, mike];
    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        let likesElement = document.getElementById("likes" + friend.id);
        console.log("Getting the following id :" + i+1);
        likesElement.textContent = friend.likes;
    }

    let maxLikes = 0;
    let maxLikesFriend = null;

    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        if (friend.likes > maxLikes) {
            maxLikes = friend.likes;
            maxLikesFriend = friend;
        }
    }
    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        let nameElement = document.getElementById("likes" + friend.id);
        nameElement.style.fontWeight = (friend === maxLikesFriend ? 'bold' : 'normal');
    }
}



// Section pour mettre en gras le nom le plus liké //

//

// Section pour faire fonctionner les boutons removeLike //