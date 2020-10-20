let nextPic = document.querySelector(".next");
let prevPic = document.querySelector(".previous");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let images = document.querySelectorAll("div img");
let buttons = document.querySelectorAll(".btn");
let container = document.querySelector(".img_container")

let counter = 1;

buttons.forEach(button => {
  button.addEventListener('click', () =>{
    if(button.classList.contains("previous")){
      counter--
      console.log(counter)
    }else if(button.classList.contains("next")){
      counter++
      console.log(counter);
    }
    switch(counter){
      case 0 :
        counter = 3
        one.style.display = "none"
        two.style.display = "none"
        three.style.display = "block"
        break;
      case 1 :
        one.style.display = "block"
        two.style.display = "none"
        three.style.display = "none"
        break;
      case 2 :
        one.style.display = "none"
        two.style.display = "block"
        three.style.display = "none"
        break;
      case 3 : 
        one.style.display = "none"
        two.style.display = "none"
        three.style.display = "block"
        break;
      case 4 : 
        one.style.display = "block"
        two.style.display = "none"
        three.style.display = "none"
        counter = 1;
    }
  })
});
