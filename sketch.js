  // storing our pieces as variables
  score = 0;
  var ground , groundImage;
  var blueImage; var bow; 
  var bowImage; var edges; 
  var arrow; var arrowImage;
  var redBalloon , redImage;
  var greenBalloon , greenImage; 
  var pinkBalloon , blueBalloon; 
  var select_Balloon , score;
  var arrowsGroup , redB , greenB , blueB, pinkB;

  function preload(){
   //loading the images  
     groundImage = loadImage("background0.png");
     redImage    = loadImage("red_balloon0.png");
     greenImage  = loadImage("green_balloon0.png");
     pinkImage   = loadImage("pink_balloon0.png");
     blueImage   = loadImage("blue_balloon0.png");
     bowImage    = loadImage("bow0.png");
     arrowImage  = loadImage("arrow0.png");

     arrowsGroup = new Group();
     redB = new Group();
     blueB = new Group();
     greenB = new Group();
     pinkB = new Group();

  }

  function setup() {
    createCanvas(600, 600);

    // creating ground
    ground = createSprite(0, 0, 600 ,600);
    ground.addImage(groundImage);
    ground.scale = 3.5;

    // creating bow
    bow = createSprite(390, 250, 5, 40);
    bow.addImage(bowImage);

    // creating edges
    edges = createEdgeSprites();
 
    
   


  }

  function draw() {

    // giving infinite effect to our ground
    ground.velocityX = -20;

    // when ground is at the end it will regenerate from the middle
    if(ground.x < 0) {
         ground.x = 300;
     }

    // when up arrow is pressed, the arrow will appear and move left
    
    

    if(keyDown(UP_ARROW)) {
    arrow = createSprite(350, World.mouseY, 30, 5);
    arrow.velocityX = -2; 
    arrow.scale = 0.5;
    arrow.addImage(arrowImage );
      arrow.visible = true;
        arrow.velocityX = -2;
       arrowsGroup.add(arrow);
        }

    // making the bow and arrow move with the mouse
      bow.y = World.mouseY;


    //making sure bow and arrow do not escape the canvas
    bow.collide(edges[3])
      //add code here
      
      // at random a random balloon will enter & exit the screen using frame       count function and *else if* conditional
     var select_Balloon = Math.round(random(0, 4));
     console.log(select_Balloon)
     if(frameCount % 80 === 0) {
       if(select_Balloon == 1) {
         redBalloon();

    } else if (select_Balloon === 2){
          greenBalloon();

    } else if (select_Balloon === 3){
          blueBalloon();

    } else if (select_Balloon === 4){

          pinkBalloon();
    }
       
    }
     
     // when arrows are touching random balloon , it and balloon will vanish      and player will score a point
     if(redB.isTouching(arrowsGroup)){
       redB.destroyEach();
    arrowsGroup.destroyEach();
       score= score + 1;
       }

    if(blueB.isTouching(arrowsGroup)){
       blueB.destroyEach();
    arrowsGroup.destroyEach();
      score= score + 3;
       }

    if(pinkB.isTouching(arrowsGroup)){
       pinkB.destroyEach();
    arrowsGroup.destroyEach();
      score= score + 1;
       }

    if(greenB.isTouching(arrowsGroup)){
       greenB.destroyEach();
    arrowsGroup.destroyEach();
      score= score +  2;
       }
      drawSprites();

     // displaying score
      
      fill("black");
    textSize(20);
    text("Score: "+ score, 270, 30); 
  }


  // creating our balloons using for loop
    function redBalloon() {

       var redBalloon = createSprite(0, Math.round(random(20, 370)), 10, 10);
      redBalloon.addImage(redImage);
      redBalloon.velocityX = 3;
      redBalloon.lifetime = 150;
      redBalloon.scale= 0.1;
      redB.add(redBalloon);

    }
    function greenBalloon() {

       var greenBalloon = createSprite(0, Math.round(random(20, 370)), 10, 10);
      
      greenBalloon.addImage(greenImage);
      greenBalloon.velocityX = 3;
      greenBalloon.lifetime = 150;
      greenBalloon.scale= 0.1;
      greenB.add(greenBalloon);

    }
    function blueBalloon() {

      var blueBalloon = createSprite(0, Math.round(random(20, 370)), 10, 10);
      
      blueBalloon.addImage(blueImage);
      blueBalloon.velocityX = 3;
      blueBalloon.lifetime = 150;
      blueBalloon.scale= 0.1;
      blueB.add(blueBalloon);

    }
    function pinkBalloon() {

      var pinkBalloon = createSprite(0, Math.round(random(20, 370)), 10, 10);
      
      pinkBalloon.addImage(pinkImage);
      pinkBalloon.velocityX = 3;
      pinkBalloon.lifetime = 150;
      pinkBalloon.scale= 1.3;
    pinkB.add(pinkBalloon);

    }
