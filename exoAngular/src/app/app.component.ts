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
  apiAddress= "https://jsonplaceholder.typicode.com/";

  constructor(){
    for (let i=1; i<10; i++){
      fetch(this.apiAddress + "users/" + i)
      .then(response => response.json())
      .then(json => this.friends.push(new Friend(json.id, json.name, json.email)));
    }
  }

  updateLikeDisplay() {
    let maxLikes = 0;
    for (let i = 0; i < this.friends.length; i++) {
        let monSuperString = "Mon nombre de like est : "
        let friend = this.friends[i];
        let likesElement = document.getElementById("likes" + friend.id);
        let nameElement = document.getElementById("likes" + friend.id);

        console.log("Getting the following id :" + i+1);
        if (likesElement!= undefined) {
          likesElement.textContent = monSuperString + friend.likes.toString();
        }
        else {
          console.log("Could not get likesElement");
        }
        if (friend.likes > maxLikes) {
            maxLikes = friend.likes;
        }
    }
    for (let i = 0; i < this.friends.length; i++) {
        let friend = this.friends[i];
        let nameElement = document.getElementById("likes" + friend.id);
        if (nameElement!= undefined) {
          nameElement.style.fontWeight = (friend.likes === maxLikes ? 'bold' : 'normal');
        }
    }
}

addLike(id: number){
    this.friends[id-1].addLike();
    this.updateLikeDisplay();
}
removeLike(id:number){
  this.friends[id-1].removeLike();
  this.updateLikeDisplay();
}
}
