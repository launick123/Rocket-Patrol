let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu,Play]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyD, keyA,keyW;

//Comments in my source code
/*
Nicholas Lau
Rocket Patrol Modded/Boom Beach
8 hours

Points:
60 - Theme/Redesign
30 - Multiplayer/two-player mode
10 - Timer/Time Remaining

*/

//Credits/Sources
//rocket sound - https://www.soundfishing.eu/sound/cannon
//scream sound - https://bigsoundbank.com/detail-0477-wilhelm-scream.html
//sprites from my cmpm 80k group construct 3 game
//spritesheet  - https://untiedgames.itch.io/five-free-pixel-explosions/download/eyJleHBpcmVzIjoxNjUwMzUzNzg5LCJpZCI6MjY4NTMwfQ%3d%3d.0Q25qJgxuMfAXSMxNVixNzqxYfw%3d


