<template>
</template>

<script>
export default {
}

let game = new Phaser.Game(800, 600, Phaser.AUTO, '',
{preload: preload, create: create, update: update});

let paddle1
let paddle2
let ball

let ball_launched
let ball_velocity

let score1_text
let score2_text

let score1
let score2


function preload() {
  game.load.image('paddle','assets/paddle.png')
  game.load.image('ball', 'assets/ball.png')

  game.load.audio('hit_1', 'assets/hit_1.wav')
  game.load.audio('hit_2', 'assets/hit_2.wav')

}

function create() {
  this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();

  ball_launched = false
  ball_velocity = 400

  paddle1 = create_paddle(0, game.world.centerY)
  paddle2 = create_paddle(game.world.width - 8, game.world.centerY)

  ball = create_ball(game.world.centerX,game.world.centerY)

  game.input.onDown.add(launch_ball, this)
  score1_text = game.add.text(128, 128, '0', {
    font: '64px Gabriella',
    fill: '#ffffff',
    align: 'center'
  })

  score2_text = game.add.text(game.world.width - 128, 128, '0', {
    font: '64px Gabriella',
    fill: '#ffffff',
    align: 'center'
  })


  score1 = 0
  score2 = 0

}

function update() {

  score1_text.text = score1
  score2_text.text = score2


  control_paddle(paddle1, game.input.y)
  game.physics.arcade.collide(paddle1, ball, function(){
    game.sound.play('hit_1')
  })
  game.physics.arcade.collide(paddle2, ball, function(){
    game.sound.play('hit_2')
  })

  if (ball.body.blocked.left) {
    console.log('player 2 scores');
    score2 ++
  } else if (ball.body.blocked.right) {
    console.log('player 1 scores');
    score1 ++
  }

  paddle2.body.velocity.setTo(ball.body.velocity.y)
  paddle2.body.velocity.x = 0
  paddle2.body.maxVelocity.y = 250
}


function create_paddle(x, y) {
  let paddle = game.add.sprite(x, y, 'paddle')
  paddle.anchor.setTo(0.5, 0.5)
  game.physics.arcade.enable(paddle)
  paddle.body.collideWorldBounds = true
  paddle.body.immovable = true
  paddle.scale.setTo(0.5, 0.5)

  return paddle
}

function control_paddle(paddle, y) {
  paddle.y = y

  if (paddle.y < paddle.height/2) {
    paddle.y = paddle.height/2
  } else if (paddle.y > game.world.height - paddle.height/2) {
    paddle.y = game.world.height - paddle.height/2
  }
}

function create_ball(x, y) {
  let ball = game.add.sprite(x, y, 'ball')
  ball.anchor.setTo(0.5, 0.5)
  game.physics.arcade.enable(ball)
  ball.body.collideWorldBounds = true
  ball.body.bounce.setTo(1, 1)

  return ball
}

function launch_ball() {
  if (ball_launched) {
    ball.x = game.world.centerX
    ball.y = game.world.centerY
    ball.body.velocity.setTo(0,0)
    ball_launched = false
  } else {
    ball.body.velocity.x = -ball_velocity
    ball.body.velocity.y = ball_velocity
    ball_launched = true
  }
}
</script>
