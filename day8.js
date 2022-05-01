const person = {
    firstname : "Ayush",
    lastname : "tripathi",
    collage : "IITP",
    Getintro : function() {
        return `${this.firstname} ${this.lastname} ${this.collage}`
    }
}
console.log(person.Getintro());

let me = {
    you : "Ayush Tripathi",
    degree : "Btech",
    campus : 'patna',

    getInfo : function(){
        return `${this.you} ${this.firstname} ${this.degree} ${this.campus}`
    }
}
console.log(me.getInfo())