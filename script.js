let nextPic = document.querySelector(".next");
let prevPic = document.querySelector(".previous");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let images = document.querySelectorAll("div img");

let counter = 1;

nextPic.addEventListener('click', () => {
  console.log(counter);
  counter++
  if(counter == 1){
  images[1].style.display = "none";
  images[2].style.display = "none";
  images[0].style.display = "block";
  }if(counter == 2){
    images[0].style.display = "none";
    images[2].style.display = "none";
    images[1].style.display = "block";
  }if(counter >= 3){
    images[0].style.display = "none";
    images[1].style.display = "none";
    images[2].style.display = "block";
    counter = 0;
  }
});

prevPic.addEventListener('click', () => {
  console.log(counter);
  counter--
  if(counter <= 1){
    images[0].style.display = "none";
    images[1].style.display = "none";
    images[2].style.display = "block";
    counter = 4
  }
    if(counter == 3){
    images[0].style.display = "none";
    images[2].style.display = "none";
    images[1].style.display = "block";
  }
  if(counter == 2 ){
    images[1].style.display = "none";
    images[2].style.display = "none";
    images[0].style.display = "block";
  }
});