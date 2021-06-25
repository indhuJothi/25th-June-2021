window.place='Trichy';
const obj={
    Name:'Indhu',
    College:'saveetha',
    place:'chennai',
    places:function(place){
        console.log(this.place);
      this.place=place;
      console.log(this.place);
    ()=>{
        console.log(this.place);
    }
    },
};
console.log(obj.places('salem'));
console.log(obj.Name)


