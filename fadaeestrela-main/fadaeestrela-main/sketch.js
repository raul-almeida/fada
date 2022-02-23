var starImg,bgImg;
var star, starBody;
var fada, imgFada,  vozFada;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fada = loadImage("images/fairyImage1.png")
    vozFada = loadSound("sound/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);
    imgFada = createSprite(100,700);
   imgFada.addImage(fada);
   imgFada.scale = 0.1
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
    background(bgImg)
    star.x = starBody.position.x
    star.y = starBody.position.y
    if(star.y>470 &&starBody.position.y>470){
        Matter.Body.setStatic(starBody,true)
    }
    if(keyDown("right")){
        imgFada.x = imgFada.x+10
    }
    if(keyDown("left")){
        imgFada.x = imgFada.x-10
    }
    if(keyDown("down")){
        Matter.Body.setStatic(starBody,false)
    }
    drawSprites()
}