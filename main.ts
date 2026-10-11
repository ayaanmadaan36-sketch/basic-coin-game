let Coin = game.createSprite(randint(0, 4), randint(0, 4))
let Player = game.createSprite(2, 2)
Coin.set(LedSpriteProperty.Brightness, 100)
game.setScore(0)
game.startCountdown(20000)
basic.forever(function () {
    if (Player.isTouching(Coin)) {
        game.addScore(1)
        Coin.set(LedSpriteProperty.X, randint(0, 4))
        Coin.set(LedSpriteProperty.Y, randint(0, 4))
    }
    if (input.acceleration(Dimension.X) > 0) {
        Player.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) < 0) {
        Player.change(LedSpriteProperty.X, -1)
        basic.pause(1000)
    }
    if (input.acceleration(Dimension.Y) > 0) {
        Player.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) < 0) {
        Player.change(LedSpriteProperty.Y, -1)
        basic.pause(1000)
    }
})
