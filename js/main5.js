        window.onload = function () {
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

            var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

            function preload() {
                game.load.image('roadway', 'Assets/TwoLane 1024.png');
                game.load.image('sportscar', 'Assets/Car.png');
                game.load.image('dumptruck', 'Assets/DumpTruck.png');
                game.load.audio('angel','Assets/Beat the Angel.WAV');
            }

            var mycar;
            var dumptruck;
            var roadway;
            var cursors;
            var myswitch = false;
            var score = 0;
            var angel;

            function create() {

                game.physics.startSystem(Phaser.Physics.ARCADE);

                // The scrolling roadway background
                roadway = game.add.tileSprite(0, -212, 1024, 1024, 'roadway');

                //  We're going to be using physics, so enable the Arcade Physics system
                
                //Create the images here
                mycar = game.add.sprite(game.world.centerX - 100, game.world.centerY + 50, 'sportscar');
                game.physics.enable(mycar, Phaser.Physics.ARCADE);
                mycar.height = 50;
                mycar.width = 100;
                mycar.body.velocity.x = 0;

                dumptruck = game.add.sprite(game.world.centerX+400, game.world.centerY - 125, 'dumptruck');
                game.physics.enable(dumptruck, Phaser.Physics.ARCADE);
                dumptruck.height = 75;
                dumptruck.width = 150;
                dumptruck.body.velocity.x = -200;

                //  And some controls to play the game with
                cursors = game.input.keyboard.createCursorKeys();

                angel = game.add.audio('angel');
                angel.loop = true;
                angel.play();
                
            }

            function update() {

                // Scroll the background
                roadway.tilePosition.x -= 2;
                
                //  If the sprite is > 8px away from the pointer then let's move to it
                if (game.physics.arcade.distanceToPointer(mycar, game.input.activePointer) > 8) {
                    //  Make the object seek to the active pointer (mouse or touch).
                    game.physics.arcade.moveToPointer(mycar, 300);
                }
                else {
                    //  Otherwise turn off velocity because we're close enough to the pointer
                    mycar.body.velocity.set(0);
                }

                // After traffic passes mycar and goes down the road
                // Move it back up the road to go by again and faster
                if (dumptruck.body.x < mycar.body.x - 1000) {
                    dumptruck.body.x = mycar.body.x + 1000;
                    dumptruck.body.velocity.x -= 20;
                }
                // Make it veer toward your lane and get faster
                dumptruck.body.y += 0.1;
                if (dumptruck.body.y > game.world.centerY + 100) {
                    dumptruck.body.y = game.world.centerY - 150;
                }

                game.physics.arcade.overlap(mycar, dumptruck, crash,null,this);

                if(myswitch = true){
                    game.debug.text('Game Over',32,62);
                }
                else{
                    game.debug.text('Avoid the truck',32,62);
                }

                score = score + 1;
                game.debug.text('Your score is ' + score,43,72);

            }

            function crash(mycar, dumptruck){
                mycar.kill();
                myswitch = true;
            }
                
        };
