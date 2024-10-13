/*
//or
//object definding
const rect1={
    width:2,
    height:3,
    color:"red"
}


//function definding
function area(rect){
    return rect.width*rect.height;
}

//calling the function
const ans=area(rect1);
console.log(ans)

*/

//same thing by class
class Rectangle {
    //propeeties width,height,color
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    //method
    area() {
        const area = this.width * this.height;
          return area;
    }
    //method
    paint() {
             console.log(`Painting with color ${this.color}`);//simply return the color
    }
    //we can destroy bcox it dont have memory management like c++
    destroy(){

    }

    
 }
 
 const rect = new Rectangle(2, 4,"red")//instance of the rectangle class or object of rectangle class
 
 //this is equal to the rect variable here
 const area = rect.area();
 rect.paint();
 rect.destroy();
 console.log(area)