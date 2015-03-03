window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load an image and call it 'logo'.
        //game.load.image( 'b', 'assets/phaser.png' );
        game.load.image( 'background', 'Assets/fire_ice.png' );
        //game.load.audio( 'bodyDry', 'assets/01 -Before my body is dry.mp3');
        //game.load.audio('mario', 'assets/Mario_Slide.wav');
        /*
        game.load.image('girrafeHead','assets/girrafe_head.png');
        game.load.image('girrafeBody','assets/girrafe_body.jpg');
        game.load.image('girrafeLeftLeg','assets/girrafe_left_leg.png');
        game.load.image('girrafeRightLeg','assets/girrafe_right.png');
        game.load.image('gorillaHead','assets/gorilla_head.jpg');
        game.load.image('gorillaLeftArm','assets/gorilla_left_arm.jpg');
        game.load.image('gorillaRightArm','assets/gorilla_right_arm.jpg');
        game.load.image('gorillaLeftLeg','assets/gorilla_left_leg.jpg');
        game.load.image('gorillaRightLeg','assets/gorilla_right_leg.jpg');
        game.load.image('gorillaBody','assets/gorilla_body.jpg');
        game.load.image('humanHead','assets/human_head.jpg');
        game.load.image('humanRightArm','assets/right_arm.jpg');
        game.load.image('humanLeftArm','assets/left_arm.jpg');
        game.load.image('humanRightLeg','assets/right_leg');
        game.load.image('humanLeftLeg','assets/left_leg');
        game.load.image('catHead','assets/cat_head');*/
    }
    
    var background1;
    /*var background2;

    var girrafeHead;
    var girrafeBody;
    var girrafeLeftLeg;
    var girrafeRightLeg;

    var gorillaHead;
    var gorillaLeftArm;
    var gorillaRightArm;
    var gorillaBody;
    var gorillaLeftLeg;
    var gorillaRightLeg;

    var humanHead;
    var humanLeftArm;
    var humanRightArm;
    var humanLeftLeg;
    var humanRightLeg;

    var catHead;

    var counter = 0;
    var cursors;*/


function create() {

    /*game.physics.startSystem(Phaser.Physics.ARCADE);

    //  Enable the QuadTree
    game.physics.arcade.skipQuadTree = false;

    catHead = game.add.group();
    catHead.enableBody = true;

    for (var i = 0; i < 50; i++)
    {
        var s = catHead.create(game.world.randomX, game.world.randomY, 'baddie');
        s.body.collideWorldBounds = true;
        s.body.bounce.set(1);
        s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
    }

    humanHead = game.add.sprite(400, 400, 'humanHead');
    humanHead.scale.x = 0.5;
    humanHead.scale.y = 0.5;

    game.physics.enable(humanHead, Phaser.Physics.ARCADE);

    humanHead.body.collideWorldBounds = true;
    humanHead.body.bounce.set(1);

    cursors = game.input.keyboard.createCursorKeys();*/

}

function update() {

    /*game.physics.arcade.collide(humanHead, catHead);

    if (cursors.left.isDown)
    {
        humanHead.body.velocity.x -= 4;
    }
    else if (cursors.right.isDown)
    {
        humanHead.body.velocity.x += 4;
    }

    if (cursors.up.isDown)
    {
        humanHead.body.velocity.y -= 4;
    }
    else if (cursors.down.isDown)
    {
        humanHead.body.velocity.y += 4;
    }*/

}
};
