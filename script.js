// let b=[1,2,3,5,6,7]
// b="harry"
//  let newnameb=b.replace("harry","Soumyadip")
// console.log(newnameb);

// function devsop(x,y){
//     console.log(done);
//       return (x+y/2)

// }
// let x= 43;
// let y=67;
// let z=99;
// console.log(devsop(x,y));
// console.log(devsop(x,z));

// const hello= ()=>{
//      let c=console.log("hello world this your dev ","Making an responsive website");
//     return c
// }
// hello()

// const addition= (p,q)=>{
//     return p-q 
//     console.log(done);   
// }
// console.log(addition(4,5));

// let Boxes=document.getElementsByClassName("box")
// console.log(Boxes);
// Boxes[1].style.backgroundColor="blue"
// Boxes[2].style.backgroundColor="red"
// Boxes[3].style.backgroundColor="green"
// Boxes[4].style.backgroundColor="Violet"

// document.getElementById('Get').style.backgroundColor="green"
// document.querySelector(".box").style.backgroundColor=" yellow";

// const addme=add(x,y)=>{

// }

// document.element.firstchild


// pop.setElement("class","created")
// .document.H1.innerElement="i have inserted <I> By Soumyadip</I>"
// document.querySelector("H1").before(H1)

// let number=9
//     if (number<=7) {
//         console.log('number is less than 7');
//     }
//    else{
//     console.log("undefined");   
//    }

//    let grade = 85;

//    if (grade >= 90) {
//      console.log("Excellent!");
//    } else if (grade >= 80) {
//      console.log("Very Good!");
//    } else if (grade >= 70) {
//      console.log("Good!");
//    } else {
//      console.log("Needs Improvement.");
//    }
// let a=25
// function facfor(num){
// let number = 1;
// for (let index = 1; index<= num; index++) {
//     number=number* index
//     }    
//  return number
// }   
// console.log(facfor(a));


// function facFor(number){
//     let fac = 1;
//     for (let index = 1; index <= number; index++) {
//         fac = fac * index
//     }
//     return fac
// }
// console.log(facFor(a))
// console.log(3+false);

// let anum=6.89
// let randomnumber=Math.ceil(anum)
// console.log(randomnumber);

//  let a = document.querySelector('.Container').children
// console.log(a);
// function newname(){
//     let val1=Math.ceil(0+Math.random()*255)
//     let val2=Math.ceil(0+Math.random()*255)
//     let val3=Math.ceil(0+Math.random()*255)
//     return `rgb(${val1}, ${val2}, ${val3})`

// }
// Array.from(a).forEach(l=>{
//     l.style.backgroundColor=newname();
// })

// let parent=document.getElementsByClassName(".Container")
// let child=parent.children;
// console.log(child);

// let firstchild=child[1];
// let secondchild=child[2]
// function newname(){
//     let val1=Math.ceil(0+Math.random()*255)
//     let val2=Math.ceil(0+Math.random()*255)
//     let val3=Math.ceil(0+Math.random()*255)
//     return `rgb(${val1}, ${val2}, ${val3})`
// }


// const parentElement = document.getElementById('Container'); // Get the parent element
// const childElements = parentElement.children; 

// // Access individual child elements by index
// const firstChild = childElements[0]; 
// const secondChild = childElements[1];
// document.querySelector()


function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewstr = 755
    if (viewstr > 100000) {
        viewstr = views / 100000 + "k"
    }
    else if (viewstr > 1000000) {
        viewstr = views / 100000 + "M"
    }
    else {
        viewstr = views
    }
}
let html = ` <div class="card">
            <div class="img"> 
            <img src="${thumbnail}"
                    alt=""></div>
                    <div class="capsule">${duration}</div>
            <div class="text">
                <h1>${title}</h1>             
                <p>
                <h2>${viewstr}.${cname}views.${monthsOld}</h2>
                </p>
            </div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html