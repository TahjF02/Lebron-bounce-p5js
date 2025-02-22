let lebronImg;
let basketballImg;
let xbasket = Math.floor( (Math.random() * (600-100) + 100))
let ybasket = Math.floor( (Math.random() * (600-100) + 100))
function preload()
{
  lebronImg = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhCd-DE-AkYx6cjsnEKsI6UOhbm_nlqj5MQ&s");
  basketballImg = loadImage("https://png.pngtree.com/png-vector/20221012/ourmid/pngtree-realistic-isolated-basketball-ball-png-image_6274806.png")
}


function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);

image(lebronImg,100,150,500,500);     
  textSize(50)
  text("SHARING IS CARING",100,50)
  text("⬇️",500,475)
  
  image(basketballImg,xbasket,ybasket,100,100)
  if(keyIsPressed && key == "b")
    {
      xbasket = Math.floor( (Math.random() * (600-100) + 100))
      ybasket = Math.floor( (Math.random() * (600-100) + 100))
    }
  
  



}