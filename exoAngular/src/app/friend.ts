export class Friend {
    
    name: string;
    paragraphe: string;
    id: number;
    likes: number;



    constructor(id: number, name: string, paragraphe: string) {
        this.id = id;
        this.name = name;
        this.paragraphe = paragraphe;
        this.likes = 0;
        // TODO: LINK ADDLIKE TO CORRESPONDING ELEMENT
        // document.getElementById("friend" + id).onclick = event => {this.addLike()}
        // document.getElementById("friend" + id + id).onclick = event => {this.removeLike()}
  
    }
  
    addLike() {
        this.likes++;
        console.log(this.name + " has this many likes : " + this.likes); 
    }
  
    removeLike() {
        if (this.likes > 0) {
            this.likes--;
            console.log(this.name + " has this many likes : " + this.likes);
        }
        else {
            console.log("on a 0 like");
        }
    }
  }