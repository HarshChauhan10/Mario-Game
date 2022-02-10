let gamebox = document.getElementById('gamebox');
let context = gamebox.getContext('2d');


let enemy1 = {
  img:'https://www.pngkey.com/png/full/5-51530_grand-goomba-super-mario-3d-land.png',
    x:200,
    y:0,
    h:40,
    w:40,
    vx:0,
    vy:6,
    s:45,

}
let enemy2 = {
  img:'https://www.pngkey.com/png/full/5-51530_grand-goomba-super-mario-3d-land.png',
    x:370,
    y:0,
    h:40,
    w:40,
    vx:0,
    vy:8.5,
    s:45,

}
let enemy3 = {
  img:'https://www.pngkey.com/png/full/5-51530_grand-goomba-super-mario-3d-land.png',
  x:710,
  y:0,
  h:40,
  w:40,
  vx:0,
  vy:12.5,
  s:45,

}
let mushroom = {
  img:'https://pngimg.com/uploads/mario/mario_PNG75.png',
  x:540,
  y:0,
  h:40,
  w:40,
  vx:0,
  vy:6.5,
  s:55,

}
let enemy4 = {
  img:'https://www.pngkey.com/png/full/5-51530_grand-goomba-super-mario-3d-land.png',
  x:880,
  y:0,
  h:40,
  w:40,
  vx:0,
  vy:8.8,
  s:45,

}

let enemy5 = {
  img:'https://www.pngkey.com/png/full/5-51530_grand-goomba-super-mario-3d-land.png',
  x:1050,
  y:0,
  h:40,
  w:40,
  vx:0,
  vy:7.5,
  s:45,

}
let enemy6 = {
  img:'https://www.pngkey.com/png/full/5-51530_grand-goomba-super-mario-3d-land.png',
  x:1220,
  y:0,
  h:40,
  w:40,
  vx:0,
  vy:10,
  s:45,

}

let mario = {
  img:'https://www.nicepng.com/png/full/219-2190512_cape-mario.png.phttps://www.nicepng.com/png/full/219-2190512_cape-mario.png',
  x:50,
  y:200,
  h:40,
  w:40,
  vx:0,
  vy:0,
  s:60,
}



function zoom()
{
  document.body.style.zoom = "90%"
}

function make_base()
{
  base_image = new Image();
  base_image.src = 'images/backImg.jpg';
  context.drawImage(base_image, 0, 0,1700,600);
}




function enemyimage(em) {
  var enemy_image = new Image()
  enemy_image.src = em.img;
  context.drawImage(enemy_image,em.x,em.y,em.s,em.s)
}

function mushroomimage(me) {
  var mushroom_image = new Image();
  mushroom_image = me.img;
  context.drawImage(mushroom_image,me.x,me.y,me.s,me.s)
}

function hero(he) {
  var hero_image = new Image();
  hero_image.src = he.img;
  context.drawImage(hero_image,he.x,he.y,he.s,he.s)
}

function mariowin() {
  var flag_image = new Image();
  flag_image.src = 'images/marioWin.png';
  context.drawImage(flag_image,1350,0,500,620);
}


function updateGameState(enemyMovement) {
  enemyMovement.y += enemyMovement.vy;
  if(enemyMovement.y+enemyMovement.h > 500)
  {
    enemyMovement.vy = enemyMovement.vy*-1;
  }
  else if(enemyMovement.y < 0)
  {
    enemyMovement.vy = enemyMovement.vy*-1;
  }
}





document.addEventListener('keydown', function(event) {
  //left
  if(event.keyCode == 37 && mario.x >= 50) {
      mario.x -= 10;
  }
  //top
  else if(event.keyCode == 38 && mario.y >= 0) {
      mario.y -= 10;
  }
  //right
  else if(event.keyCode == 39 && mario.x <= 1600) {
      mario.x += 10;
  }
  //bottom
  else if(event.keyCode == 40 && mario.y <= 420) {
      mario.y += 10;
  }
});


function collision(x1, y1, w1, h1, x2, y2, w2, h2){
  if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
      return false;
  }
  else
  mario.x=50;
}

// function collisionMushroom(x1, y1, w1, h1, x2, y2, w2, h2){
//   if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
//       return false;
//   }
//   else
//   {
//     enemy1.vy=-5
//   }
// }



function Win() {
  if(mario.x>=1590)
  {
    var winimage = new Image();
    winimage.src = 'https://images.eurogamer.net/2015/articles/1/8/7/6/0/8/1/nintendo-still-has-an-opportunity-to-win-over-super-mario-run-users-app-annie-1482402137870.jpg'
    context.drawImage(winimage,0,0,gamebox.width,gamebox.height)
  }
}


function updateGame() {
  // hero(mario);
  updateGameState(enemy1);
  updateGameState(enemy2);
  updateGameState(enemy3);
  updateGameState(mushroom);
  updateGameState(enemy4);
  updateGameState(enemy5);
  updateGameState(enemy6);
  collision(mario.x,mario.y,mario.w,mario.h,enemy1.x,enemy1.y,enemy1.w,enemy1.h);
  collision(mario.x,mario.y,mario.w,mario.h,enemy2.x,enemy2.y,enemy2.w,enemy2.h);
  collision(mario.x,mario.y,mario.w,mario.h,enemy3.x,enemy3.y,enemy3.w,enemy3.h);
  collision(mario.x,mario.y,mario.w,mario.h,enemy4.x,enemy4.y,enemy4.w,enemy4.h);
  collision(mario.x,mario.y,mario.w,mario.h,enemy5.x,enemy5.y,enemy5.w,enemy5.h);
  collision(mario.x,mario.y,mario.w,mario.h,enemy6.x,enemy6.y,enemy6.w,enemy6.h);
  // collisionMushroom(mario.x,mario.y,mario.w,mario.h,mushroom.x,mushroom.y,mushroom.w,mushroom.h);
  // mariomove(mario);


  //clear canvas
  context.clearRect(0,0,gamebox.width,gamebox.height);
  make_base();
  hero(mario);
  enemyimage(enemy1);
  enemyimage(enemy2);
  enemyimage(enemy3);
  enemyimage(mushroom);
  enemyimage(enemy4);
  enemyimage(enemy5);
  enemyimage(enemy6);
  mariowin();
  Win();

  window.requestAnimationFrame(updateGame);

}
updateGame();
