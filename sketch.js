var rabbit1, border1, border2, border3, border4;
var rand, rad, rand2, t, t1, N, NA, Thirst, Hunger, rabbits;
var  plant1,plant2, plant3, plant4, plant5, plant6, plant7, plant8, plant9, plant10;
var  lake1, lake2, lake3, lake4, lake5, lake6;
var plank, plank2, ch;
var fox;
var randF, radF, rand2F, tF, t1F, NF, NAF, ThirstF, HungerF, rabbitsF;
var i, conc;

function setup() {
   createCanvas(1500,700);


  //Lakes
  lake1 = createSprite(200, 300, 100, 500)
  lake1.shapeColor = "blue";

  lake2 = createSprite(800, 500, 200, 230)
  lake2.shapeColor = "blue";

  lake3 = createSprite(300, 600, 200, 330)
  lake3.shapeColor = "blue";

  lake4 = createSprite(500, 600, 700, 130)
  lake4.shapeColor = "blue";

  //Plank
  plank = createSprite(500, 560, 70, 70);
  plank.shapeColor = rgb(0, 200, 55);
  plank2 = createSprite(550, 620, 123, 100);
  plank2.shapeColor = rgb(0, 200, 55);
  
  //Plants
  plant1 = createSprite(700, 200, 10, 10);
  plant1.shapeColor = "Green";

  plant2 = createSprite(100, 262, 10, 10);
  plant2.shapeColor = "Green";

  plant3 = createSprite(1300, 596, 10, 10);
  plant3.shapeColor = "Green";

  plant4 = createSprite(438, 526, 10, 10);
  plant4.shapeColor = "Green";

  plant5 = createSprite(568, 596, 10, 10);
  plant5.shapeColor = "Green";

  //rabbits
  rabbit1 = createSprite(750, 350, 20, 20);
  rabbit1.shapeColor = "tan";
  rabbit1.lifeTime = 10000;

  //fox

  fox = createSprite(900, 500, 40, 40);
  fox.shapeColor = rgb(211, 49, 0);


  //borders
  border1 = createSprite(0, 350, 20, 700);
  border1.shapeColor = "grey";
  border2 = createSprite(1500, 350, 20, 700);
  border2.shapeColor = "grey";
  border3 = createSprite(750, 0, 1500, 20);
  border3.shapeColor = "grey";
  border4 = createSprite(750, 700, 1500, 20);
  border4.shapeColor = "grey";

 //vars
  //for rabbbit one
  rand = random(-10, 10);
  rand2 = random(-10, 10);

  Thirst = 0;
  Hunger = 0;

  randF = random(-30, 30);
  rand2F = random(-30, 30);

  ThirstF = 0;
  HungerF = 0;

  FET = 100;

  //array
  rabbits = []

  rabbits.push(rabbit1);

  i = 0;
  conc = i;
  conc = new Lizard();
  
}

function draw() {

  background(0, 200, 55);

//hunger game and rabbit qualities
  

  if(Hunger === 50)
  {
    rabbit1.destroy();
    console.log("The Rabbit Dies Of Hunger.");
  }

  if(Thirst === 20)
  {
    rabbit1.destroy();
    console.log("The Rabbit Dies Of Thirst.");
  }

  if(Hunger === 30)
  {
    fox.destroy();
    console.log("The Fox Dies Of Hunger.");
  }

  if(Thirst === 40)
  {
    fox.destroy();
    console.log("The Fox Dies of Thirst.");
  }

  rad = createSprite(rabbit1.x, rabbit1.y, 200, 200);
  rad.visible = false;

  radF = createSprite(fox.x, fox.y, 400, 400);
  radF.visible = false;

  noFill();
  rectMode(CENTER);
  rect(rad.x, rad.y, 200, 200);
  rect(radF.x, radF.y, 400, 400);

  if(frameCount % 60 === 0)
  {
   Thirst = Thirst + 1;
   Hunger = Hunger + 1;
   i = i + 1;
   conc = i;
   conc = new Lizard(20, 20, 7, 7);
  }

  conc.display();

  if(frameCount % 40 === 0)
  {
   ThirstF = ThirstF + 1;
   HungerF = HungerF + 1;
  }

  if(rabbit1.collide(border1))
  {
  rand = random(-10, 10);
  rand2 = random(-10, 10);
  }

  
  if(rabbit1.collide(border2))
  {
  rand = random(-10, 10);
  rand2 = random(-10, 10);
  }

  
  if(rabbit1.collide(border3))
  {
  rand = random(-10, 10);
  rand2 = random(-10, 10);
  }

  
  if(rabbit1.collide(border4))
  {
  rand = random(-10, 10);
  rand2 = random(-10, 10);
  }
  
  
  rabbit1.velocityX = rand;
  rabbit1.velocityY = rand2;

  rabbit1.collide(border1);
  rabbit1.collide(border2);
  rabbit1.collide(border3);
  rabbit1.collide(border4);

  if(fox.collide(border1))
  {
  randF = random(-30, 30);
  rand2F = random(-30, 30);
  }

  
  if(fox.collide(border2))
  {
  randF = random(-30, 30);
  rand2F = random(-30, 30);
  }

  
  if(fox.collide(border3))
  {
  randF = random(-30, 30);
  rand2F = random(-30, 30);
  }

  
  if(fox.collide(border4))
  {
  randF = random(-30, 30);
  rand2F = random(-30, 30);
  }
  
  
  fox.velocityX = randF;
  fox.velocityY = rand2F;

  fox.collide(border1);
  fox.collide(border2);
  fox.collide(border3);
  fox.collide(border4);
  // fox.bounceOff(lake1);
  // fox.bounceOff(lake2);
  // fox.bounceOff(lake3);
  // fox.bounceOff(lake4);


 console.log(HungerF);

 //lake1

  if(Thirst > 3 && rad.isTouching(lake1))
  {
    if(lake1.x < rabbit1.x)
    {
      N = -1;
    }

    if(lake1.x > rabbit1.x)
    {
      N = 1;
    }

    if(lake1.y < rabbit1.y)
    {
      NA = -1;
    }

    if(lake1.y > rabbit1.y)
    {
      NA = 1;
    }

   rabbit1.velocityX = 10 * N;
   rabbit1.velocityY = 10 * NA;

   if(rabbit1.isTouching(lake1))
   {
     Thirst = 0;
     rand = random(-10, 10);
     rand2 = random(-10, 10);
   }
  
}

//lake2

if(Thirst > 3 && rad.isTouching(lake2))
  {
    if(lake2.x < rabbit1.x)
    {
      N = -1;
    }

    if(lake2.x > rabbit1.x)
    {
      N = 1;
    }

    if(lake2.y < rabbit1.y)
    {
      NA = -1;
    }

    if(lake2.y > rabbit1.y)
    {
      NA = 1;
    }

   rabbit1.velocityX = 10 * N;
   rabbit1.velocityY = 10 * NA;

   if(rabbit1.isTouching(lake2))
   {
     Thirst = 0;
     rand = random(-10, 10);
     rand2 = random(-10, 10);
   }
  
}

//lake3

//lake2

if(Thirst > 3 && rad.isTouching(lake3))
  {
    if(lake3.x < rabbit1.x)
    {
      N = -1;
    }

    if(lake3.x > rabbit1.x)
    {
      N = 1;
    }

    if(lake3.y < rabbit1.y)
    {
      NA = -1;
    }

    if(lake3.y > rabbit1.y)
    {
      NA = 1;
    }

   rabbit1.velocityX = 10 * N;
   rabbit1.velocityY = 10 * NA;

   if(rabbit1.isTouching(lake3))
   {
     Thirst = 0;
     rand = random(-10, 10);
     rand2 = random(-10, 10);
   }
  
}

//lake4


if(Thirst > 3 && rad.isTouching(lake4))
  {
    if(lake4.x < rabbit1.x)
    {
      N = -1;
    }

    if(lake4.x > rabbit1.x)
    {
      N = 1;
    }

    if(lake4.y < rabbit1.y)
    {
      NA = -1;
    }

    if(lake4.y > rabbit1.y)
    {
      NA = 1;
    }

   rabbit1.velocityX = 10 * N;
   rabbit1.velocityY = 10 * NA;

   if(rabbit1.isTouching(lake4))
   {
     Thirst = 0;
     rand = random(-10, 10);
     rand2 = random(-10, 10);
   }
  
}



//plant1


if(Hunger > 3 && rad.isTouching(plant1))
{
  if(plant1.x < rabbit1.x)
  {
    N = -1;
  }

  if(plant1.x > rabbit1.x)
  {
    N = 1;
  }

  if(plant1.y < rabbit1.y)
  {
    NA = -1;
  }

  if(plant1.y > rabbit1.y)
  {
    NA = 1;
  }

 rabbit1.velocityX = 10 * N;
 rabbit1.velocityY = 10 * NA;

 if(rabbit1.isTouching(plant1))
 {
   Hunger = 0;
   rand = random(-10, 10);
   rand2 = random(-10, 10);
 }

}

//plant2

if(Hunger > 3 && rad.isTouching(plant2))
{
  if(plant2.x < rabbit1.x)
  {
    N = -1;
  }

  if(plant2.x > rabbit1.x)
  {
    N = 1;
  }

  if(plant2.y < rabbit1.y)
  {
    NA = -1;
  }

  if(plant2.y > rabbit1.y)
  {
    NA = 1;
  }

 rabbit1.velocityX = 10 * N;
 rabbit1.velocityY = 10 * NA;

 if(rabbit1.isTouching(plant2))
 {
   Hunger = 0;
   rand = random(-10, 10);
   rand2 = random(-10, 10);
 }

}

//plant3

if(Hunger > 3 && rad.isTouching(plant3))
{
  if(plant3.x < rabbit1.x)
  {
    N = -1;
  }

  if(plant3.x > rabbit1.x)
  {
    N = 1;
  }

  if(plant3.y < rabbit1.y)
  {
    NA = -1;
  }

  if(plant3.y > rabbit1.y)
  {
    NA = 1;
  }

 rabbit1.velocityX = 10 * N;
 rabbit1.velocityY = 10 * NA;

 if(rabbit1.isTouching(plant3))
 {
   Hunger = 0;
   rand = random(-10, 10);
   rand2 = random(-10, 10);
 }

}

//Run Away

if(rad.isTouching(radF))
{
  if(fox.x < rabbit1.x)
  {
    N = 1;
  }

  if(fox.x > rabbit1.x)
  {
    N = -1;
  }

  if(fox.y < rabbit1.y)
  {
    NA = 1;
  }

  if(fox.y > rabbit1.y)
  {
    NA = -1;
  }

 rabbit1.velocityX = 10 * N;
 rabbit1.velocityY = 10 * NA;
}


//Stop Crossing

if(rabbit1.isTouching(plant1))
{
    rand = random(-10, 10);
    rand2 = random(-10, 10);
}

if(rabbit1.isTouching(plant2))
{
    rand = random(-10, 10);
    rand2 = random(-10, 10);
}

if(rabbit1.isTouching(plant3))
{
    rand = random(-10, 10);
    rand2 = random(-10, 10);
}

// if(rabbit1.isTouching(plant4))
// {
//     rand = random(-10, 10);
//     rand2 = random(-10, 10);
// }

if(rabbit1.isTouching(lake1))
   {
     rand = random(-10, 10);
     rand2 = random(-10, 10);
   }

if(rabbit1.isTouching(lake2))
   {
     rand = random(-10, 10);
     rand2 = random(-10, 10);
   }

if(rabbit1.isTouching(lake3))
   {
     rand = random(-10, 10);
     rand2 = random(-10, 10);
   }

if(rabbit1.isTouching(lake4))
   {
     rand = random(-10, 10);
     rand2 = random(-10, 10);
   }

/* 
  
234567890
1234567890
1234567890
12345890
234567890
   23456789op[]
34567890
234567890-23456789
234567890-
34567890
234567890p
34567890-
234567890
4567890-

*/
 //lake1

 if(ThirstF > 3 && radF.isTouching(lake1))
 {
   if(lake1.x < fox.x)
   {
     NF = -1;
   }

   if(lake1.x > fox.x)
   {
     NF = 1;
   }

   if(lake1.y < fox.y)
   {
     NAF = -1;
   }

   if(lake1.y > fox.y)
   {
     NAF = 1;
   }

  fox.velocityX = 10 * NF;
  fox.velocityY = 10 * NAF;

  if(fox.isTouching(lake1))
  {
    ThirstF = 0;
    randF = random(-10, 10);
    rand2F = random(-10, 10);
  }
 
}

//lake2

if(ThirstF > 3 && radF.isTouching(lake2))
 {
   if(lake2.x < fox.x)
   {
     NF = -1;
   }

   if(lake2.x > fox.x)
   {
     NF = 1;
   }

   if(lake2.y < fox.y)
   {
     NAF = -1;
   }

   if(lake2.y > fox.y)
   {
     NAF = 1;
   }

  fox.velocityX = 10 * NF;
  fox.velocityY = 10 * NAF;

  if(fox.isTouching(lake2))
  {
    ThirstF = 0;
    randF = random(-10, 10);
    rand2F = random(-10, 10);
  }
 
}


//lake3

if(ThirstF > 3 && radF.isTouching(lake3))
 {
   if(lake3.x < fox.x)
   {
     NF = -1;
   }

   if(lake3.x > fox.x)
   {
     NF = 1;
   }

   if(lake3.y < fox.y)
   {
     NAF = -1;
   }

   if(lake3.y > fox.y)
   {
     NAF = 1;
   }

  fox.velocityX = 10 * NF;
  fox.velocityY = 10 * NAF;

  if(fox.isTouching(lake3))
  {
    ThirstF = 0;
    randF = random(-10, 10);
    rand2F = random(-10, 10);
  }
 
}

//lake4


if(ThirstF > 3 && radF.isTouching(lake4))
 {
   if(lake4.x < fox.x)
   {
     NF = -1;
   }

   if(lake4.x > fox.x)
   {
     NF = 1;
   }

   if(lake4.y < fox.y)
   {
     NAF = -1;
   }

   if(lake4.y > fox.y)
   {
     NAF = 1;
   }

  fox.velocityX = 10 * NF;
  fox.velocityY = 10 * NAF;

  if(fox.isTouching(lake4))
  {
    ThirstF = 0;
    randF = random(-10, 10);
    rand2F = random(-10, 10);
  }
 
}

//rabbit hunt

if(HungerF > 3 && radF.isTouching(rabbit1))
{
  if(rabbit1.x < fox.x)
  {
    NF = -1;
  }

  if(rabbit1.x > fox.x)
  {
    NF = 1;
  }

  if(rabbit1.y < fox.y)
  {
    NAF = -1;
  }

  if(rabbit1.y > fox.y)
  {
    NAF = 1;
  }

 fox.velocityX = 10 * NF;
 fox.velocityY = 10 * NAF;

 if(fox.isTouching(rabbit1))
 {
   HungerF = 0;
   randF = random(-10, 10);
   rand2F = random(-10, 10);
 }

}


if(fox.isTouching(lake1))
   {
     rand1F = random(-10, 10);
     rand2F = random(-10, 10);
   }

if(fox.isTouching(lake2))
   {
     rand1F = random(-10, 10);
     rand2F = random(-10, 10);
   }

if(fox.isTouching(lake3))
   {
     rand1F = random(-10, 10);
     rand2F = random(-10, 10);
   }

if(fox.isTouching(lake3))
   {
     rand1F = random(-10, 10);
     rand2F = random(-10, 10);
   }

if(fox.isTouching(rabbit1))
   {
     rabbit1.destroy();
   }

  //console.log(rand);



  drawSprites();
  
}



