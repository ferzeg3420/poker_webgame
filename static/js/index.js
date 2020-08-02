const MAX_PLAYERS = 9;
//Aliases
let Application = PIXI.Application,
    loader = PIXI.Loader.shared,
    resources = PIXI.Loader.shared.resources,
    Sprite = PIXI.Sprite;

//Create a Pixi Application
let app = new Application({ 
    width: 800, 
    height: 600,                       
    antialias: true, 
    transparent: false, 
    resolution: 1
  }
);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

// change the background color
app.renderer.backgroundColor = 0x061639;

function display_rankings(style) {
  let royal_flush = [];
  let straight_flush = [];
  let foak = [];
  let full_house = [];
  let flush = [];
  let straight = [];
  let toak = [];
  let two_pair = [];
  let pair = [];
  let high_card = [];

  royal_flush.push( new Sprite(
    resources["images/cards/ahearts.png"]
    .texture
  ) );
  royal_flush.push( new Sprite(
    resources["images/cards/khearts.png"]
    .texture
  ) );
  royal_flush.push( new Sprite(
    resources["images/cards/qhearts.png"]
    .texture
  ) );
  royal_flush.push( new Sprite(
    resources["images/cards/jhearts.png"]
    .texture
  ) );
  royal_flush.push( new Sprite(
    resources["images/cards/10hearts.png"]
    .texture
  ) );
  for( let i = 0; i < royal_flush.length; i++) {
    royal_flush[i].x = 40 + 50 * i;
    royal_flush[i].y = 60;
    royal_flush[i].height = 60;
    royal_flush[i].width = 50;
    app.stage.addChild(royal_flush[i]);
  }

  straight_flush.push(  new Sprite(
    resources["images/cards/9clubs.png"]
    .texture
  ) );
  straight_flush.push(  new Sprite(
    resources["images/cards/8clubs.png"]
    .texture
  ) );
  straight_flush.push(  new Sprite(
    resources["images/cards/7clubs.png"]
    .texture
  ) );
  straight_flush.push(  new Sprite(
    resources["images/cards/6clubs.png"]
    .texture
  ) );
  straight_flush.push(  new Sprite(
    resources["images/cards/5clubs.png"]
    .texture
  ) );
  for( let i = 0; i < straight_flush.length; i++) {
    straight_flush[i].x = 40 + 50 * i;
    straight_flush[i].y = 160;
    straight_flush[i].height = 60;
    straight_flush[i].width = 50;
    app.stage.addChild(straight_flush[i]);
  }

  foak.push(  new Sprite(
    resources["images/cards/qspades.png"]
    .texture
  ) );
  foak.push(  new Sprite(
    resources["images/cards/qhearts.png"]
    .texture
  ) );
  foak.push(  new Sprite(
    resources["images/cards/qclubs.png"]
    .texture
  ) );
  foak.push(  new Sprite(
    resources["images/cards/qdiamonds.png"]
    .texture
  ) );
  foak.push(  new Sprite(
    resources["images/cards/8spades.png"]
    .texture
  ) );
  for( let i = 0; i < foak.length; i++) {
    foak[i].x = 40 + 50 * i;
    foak[i].y = 260;
    foak[i].height = 60;
    foak[i].width = 50;
    app.stage.addChild(foak[i]);
  }

  full_house.push(  new Sprite(
    resources["images/cards/kspades.png"]
    .texture
  ) );
  full_house.push(  new Sprite(
    resources["images/cards/kdiamonds.png"]
    .texture
  ) );
  full_house.push(  new Sprite(
    resources["images/cards/9spades.png"]
    .texture
  ) );
  full_house.push(  new Sprite(
    resources["images/cards/9hearts.png"]
    .texture
  ) );
  full_house.push(  new Sprite(
    resources["images/cards/9clubs.png"]
    .texture
  ) );
  for( let i = 0; i < full_house.length; i++ ) {
    full_house[i].x = 40 + 50 * i;
    full_house[i].y = 360;
    full_house[i].height = 60;
    full_house[i].width = 50;
    app.stage.addChild(full_house[i]);
  }

  flush.push(  new Sprite(
    resources["images/cards/7spades.png"]
    .texture
  ) );
  flush.push(  new Sprite(
    resources["images/cards/3spades.png"]
    .texture
  ) );
  flush.push(  new Sprite(
    resources["images/cards/5spades.png"]
    .texture
  ) );
  flush.push(  new Sprite(
    resources["images/cards/2spades.png"]
    .texture
  ) );
  flush.push(  new Sprite(
    resources["images/cards/9spades.png"]
    .texture
  ) );
  for( let i = 0; i < flush.length; i++) {
    flush[i].x = 40 + 50 * i;
    flush[i].y = 460;
    flush[i].height = 60;
    flush[i].width = 50;
    app.stage.addChild(flush[i]);
  }

  straight.push(  new Sprite(
    resources["images/cards/3clubs.png"]
    .texture
  ) );
  straight.push(  new Sprite(
    resources["images/cards/4spades.png"]
    .texture
  ) );
  straight.push(  new Sprite(
    resources["images/cards/5clubs.png"]
    .texture
  ) );
  straight.push(  new Sprite(
    resources["images/cards/6diamonds.png"]
    .texture
  ) );
  straight.push(  new Sprite(
    resources["images/cards/7spades.png"]
    .texture
  ) );
  for( let i = 0; i < straight.length; i++) {
    straight[i].x = 400 + 50 * i;
    straight[i].y = 60;
    straight[i].height = 60;
    straight[i].width = 50;
    app.stage.addChild(straight[i]);
  }

  toak.push(  new Sprite(
    resources["images/cards/ahearts.png"]
    .texture
  ) );
  toak.push(  new Sprite(
    resources["images/cards/adiamonds.png"]
    .texture
  ) );
  toak.push(  new Sprite(
    resources["images/cards/aclubs.png"]
    .texture
  ) );
  toak.push(  new Sprite(
    resources["images/cards/7hearts.png"]
    .texture
  ) );
  toak.push(  new Sprite(
    resources["images/cards/10hearts.png"]
    .texture
  ) );
  for( let i = 0; i < toak.length; i++) {
    toak[i].x = 400 + 50 * i;
    toak[i].y = 160;
    toak[i].height = 60;
    toak[i].width = 50;
    app.stage.addChild(toak[i]);
  }

  two_pair.push(  new Sprite(
    resources["images/cards/9spades.png"]
    .texture
  ) );
  two_pair.push(  new Sprite(
    resources["images/cards/9hearts.png"]
    .texture
  ) );
  two_pair.push(  new Sprite(
    resources["images/cards/7diamonds.png"]
    .texture
  ) );
  two_pair.push(  new Sprite(
    resources["images/cards/7clubs.png"]
    .texture
  ) );
  two_pair.push(  new Sprite(
    resources["images/cards/aspades.png"]
    .texture
  ) );
  for( let i = 0; i < two_pair.length; i++) {
    two_pair[i].x = 400 + 50 * i;
    two_pair[i].y = 260;
    two_pair[i].height = 60;
    two_pair[i].width = 50;
    app.stage.addChild(two_pair[i]);
  }

  pair.push(  new Sprite(
    resources["images/cards/10spades.png"]
    .texture
  ) );
  pair.push(  new Sprite(
    resources["images/cards/10clubs.png"]
    .texture
  ) );
  pair.push(  new Sprite(
    resources["images/cards/qspades.png"]
    .texture
  ) );
  pair.push(  new Sprite(
    resources["images/cards/adiamonds.png"]
    .texture
  ) );
  pair.push(  new Sprite(
    resources["images/cards/3hearts.png"]
    .texture
  ) );
  for( let i = 0; i < pair.length; i++) {
    pair[i].x = 400 + 50 * i;
    pair[i].y = 360;
    pair[i].height = 60;
    pair[i].width = 50;
    app.stage.addChild(pair[i]);
  }

  high_card.push(  new Sprite(
    resources["images/cards/ahearts.png"]
    .texture
  ) );
  high_card.push(  new Sprite(
    resources["images/cards/2diamonds.png"]
    .texture
  ) );
  high_card.push(  new Sprite(
    resources["images/cards/7spades.png"]
    .texture
  ) );
  high_card.push(  new Sprite(
    resources["images/cards/9hearts.png"]
    .texture
  ) );
  high_card.push(  new Sprite(
    resources["images/cards/jspades.png"]
    .texture
  ) );
  for( let i = 0; i < high_card.length; i++) {
    high_card[i].x = 400 + 50 * i;
    high_card[i].y = 460;
    high_card[i].height = 60;
    high_card[i].width = 50;
    app.stage.addChild(high_card[i]);
  }
}

//load spritesheet atlas and run the `setup` function when it's done
loader
  .add([
  "images/cards/10clubs.png",
  "images/cards/10diamonds.png",
  "images/cards/10hearts.png",
  "images/cards/10spades.png",
  "images/cards/2clubs.png",
  "images/cards/2diamonds.png",
  "images/cards/2hearts.png",
  "images/cards/2spades.png",
  "images/cards/3clubs.png",
  "images/cards/3diamonds.png",
  "images/cards/3hearts.png",
  "images/cards/3spades.png",
  "images/cards/4clubs.png",
  "images/cards/4diamonds.png",
  "images/cards/4hearts.png",
  "images/cards/4spades.png",
  "images/cards/5clubs.png",
  "images/cards/5diamonds.png",
  "images/cards/5hearts.png",
  "images/cards/5spades.png",
  "images/cards/6clubs.png",
  "images/cards/6diamonds.png",
  "images/cards/6hearts.png",
  "images/cards/6spades.png",
  "images/cards/7clubs.png",
  "images/cards/7diamonds.png",
  "images/cards/7hearts.png",
  "images/cards/7spades.png",
  "images/cards/8clubs.png",
  "images/cards/8diamonds.png",
  "images/cards/8hearts.png",
  "images/cards/8spades.png",
  "images/cards/9clubs.png",
  "images/cards/9diamonds.png",
  "images/cards/9hearts.png",
  "images/cards/9spades.png",
  "images/cards/aclubs.png",
  "images/cards/adiamonds.png",
  "images/cards/ahearts.png",
  "images/cards/aspades.png",
  "images/cards/jclubs.png",
  "images/cards/jdiamonds.png",
  "images/cards/jhearts.png",
  "images/cards/joker.png",
  "images/cards/jspades.png",
  "images/cards/kclubs.png",
  "images/cards/kdiamonds.png",
  "images/cards/khearts.png",
  "images/cards/kspades.png",
  "images/cards/qspades.png",
  "images/cards/qclubs.png",
  "images/cards/qdiamonds.png",
  "images/cards/qhearts.png",
  "images/cards/cardBack.png",
  ])
  .load(setup);

//Will run when the images have loaded
function setup() {
  var community_cards = [];
  var players = [];

  let playerTextStyle = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 26,
    fill: "white",
    stroke: '#ff3300',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
  });
  //display_rankings(playerTextStyle);

  for (let j = 1; j <= MAX_PLAYERS; j++) 
  {
    let player_message = "Player " + j;
    let temp_message = new PIXI.Text(player_message, playerTextStyle);
	  let temp_card_1 = new Sprite(
      resources["images/cards/aspades.png"]
      .texture
    );
	let temp_card_2 = new Sprite(
      resources["images/cards/aspades.png"]
      .texture
    );
	var temp_hole_cards = {
		card_1: temp_card_1, 
        card_2: temp_card_2
    }; 
	var player = {
		message: temp_message,
        hole_cards: temp_hole_cards 
    };
    players.push(player);	
  }
  for (let j = 0; j < MAX_PLAYERS; j++) 
  {
	temp_msg = players[j].message;
	app.stage.addChild(temp_msg);
    temp_msg.position.set(35 + 270 * Math.floor(j / 3), 20 + (j % 3) * 70);

	let temp_card_1 = players[j].hole_cards.card_1;
	let temp_card_2 = players[j].hole_cards.card_2;

    temp_card_1.x = 150 + 270 * Math.floor(j / 3);
    temp_card_1.y = 20 + (j % 3) * 70;
    temp_card_1.height = 60;
    temp_card_1.width = 50;
    app.stage.addChild(temp_card_1);

    temp_card_2.x = 200 + 270 * Math.floor(j / 3);
    temp_card_2.y = 20 + (j % 3) * 70;
    temp_card_2.height = 60;
    temp_card_2.width = 50;
    app.stage.addChild(temp_card_2);
  }

  community_cards.push( new Sprite(
    resources["images/cards/10spades.png"]
    .texture
  ) );

  community_cards.push( new Sprite(
    resources["images/cards/aspades.png"]
    .texture
  ) );

  community_cards.push( new Sprite(
    resources["images/cards/qspades.png"]
    .texture
  ) );

  community_cards.push( new Sprite(
    resources["images/cards/jspades.png"]
    .texture
  ) );

  community_cards.push( new Sprite(
    resources["images/cards/kspades.png"]
    .texture
  ) );

  for (let i = 0; i < community_cards.length; i++) 
  {
	card = community_cards[i];
	console.log(card);
    card.x = 250 + 50 * i;
    card.y = 300;
    card.height = 60;
    card.width = 50;
    app.stage.addChild(card);
  } 
  for (let i = 0; i < 10; i++) 
  {
    let temp_card_back = new Sprite(
      resources["images/cards/cardBack.png"]
      .texture
    );
    temp_card_back.x = 375 + i;
    temp_card_back.y = 540 - i;
    temp_card_back.height = 60;
    temp_card_back.width = 50;
    app.stage.addChild(temp_card_back);
  }
  let lives_message = new PIXI.Text("Lives: ♥♥♥", playerTextStyle);
  app.stage.addChild(lives_message);
  lives_message.position.set(40, 540);
  let cash_message = new PIXI.Text("Cash: $55", playerTextStyle);
  app.stage.addChild(cash_message);
  cash_message.position.set(580, 540);
}

//  tspades.x = 250;
//  tspades.y = 300;
//  tspades.height = 60;
//  tspades.width = 50;
//  app.stage.addChild(tspades);
//
