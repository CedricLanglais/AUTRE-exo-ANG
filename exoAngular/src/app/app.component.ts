import { Component } from '@angular/core';
import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exoAngular';
  friends: Friend[] = [];
  
  constructor(){
    let john = new Friend(1, 'John', 'John est un ami proche de feur');
    let emily = new Friend(2, 'Emily', 'Emily est une amie de feur wtf?');
    let mike = new Friend(3, 'Mike', 'Mike est un ami de andonigger.');

    this.friends.push(john);
    this.friends.push(emily);
    this.friends.push(mike);

  }

  updateLikeDisplay() {
    for (let i = 0; i < this.friends.length; i++) {
        let friend = this.friends[i];
        let likesElement = document.getElementById("likes" + friend.id);
        let maxLikes = 0;
        let maxLikesFriend = null;
        let nameElement = document.getElementById("likes" + friend.id);

        console.log("Getting the following id :" + i+1);
        if (likesElement!= undefined) {
          likesElement.textContent = friend.likes.toString();
        }
        else {
          console.log("Could not get likesElement");
        }
        if (friend.likes > maxLikes) {
            maxLikes = friend.likes;
            maxLikesFriend = friend;
        }
        
        if (nameElement!= undefined) {
          nameElement.style.fontWeight = (friend === maxLikesFriend ? 'bold' : 'normal');
        }
    }
    for (let i = 0; i < this.friends.length; i++) {
    }
}

addLike(id: number){ 
    this.friends[id-1].addLike();
}
removeLike(id:number){
  this.friends[id-1].removeLike();

}


}
