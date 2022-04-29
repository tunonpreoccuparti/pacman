statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += 10
    if (pacman.overlapsWith(bibbia)) {
        bibbia.destroy(effects.spray, 500)
        macchie += 1
    }
    if (pacman.overlapsWith(crose)) {
        bibbia.destroy(effects.spray, 500)
        macchie += 1
    }
})
let crose: Sprite = null
let bibbia: Sprite = null
let statusbar: StatusBarSprite = null
let pacman: Sprite = null
pacman = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 5 5 5 . . . . . 
    . . . 1 1 1 1 1 5 5 5 5 . . . . 
    . . 1 1 1 1 1 5 5 f f 5 5 . . . 
    . 1 1 1 1 5 5 5 5 f f 5 5 5 . . 
    . 1 1 1 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . 5 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 1 1 1 1 1 1 9 1 1 1 1 1 1 . . 
    . . 1 1 1 9 9 9 9 9 1 1 1 . . . 
    . . . 1 1 1 1 9 1 1 1 1 . . . . 
    . . . . 1 1 1 9 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(pacman)
pacman.setPosition(25, 119)
controller.moveSprite(pacman, 100, 100)
pacman.setBounceOnWall(true)
animation.runImageAnimation(
pacman,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 5 5 5 . . . . . 
    . . . 1 1 1 1 1 5 5 5 5 . . . . 
    . . 1 1 1 1 1 5 5 f f 5 5 . . . 
    . 1 1 1 1 5 5 5 5 f f 5 5 5 . . 
    . 1 1 1 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . 5 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 1 1 1 1 1 1 9 1 1 1 1 1 1 . . 
    . . 1 1 1 9 9 9 9 9 1 1 1 . . . 
    . . . 1 1 1 1 9 1 1 1 1 . . . . 
    . . . . 1 1 1 9 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 5 5 5 . . . . . 
    . . . 1 1 1 1 1 5 5 5 5 . . . . 
    . . 1 1 1 1 1 5 5 f f 5 5 . . . 
    . 1 1 1 1 5 5 5 5 f f 5 5 5 . . 
    . 1 1 1 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 1 1 1 1 1 1 9 1 1 1 1 1 1 . . 
    . . 1 1 1 9 9 9 9 9 1 1 1 . . . 
    . . . 1 1 1 1 9 1 1 1 1 . . . . 
    . . . . 1 1 1 9 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
100,
true
)
let macchie = 0
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.value = 50
statusbar.setBarBorder(1, 15)
statusbar.positionDirection(CollisionDirection.Top)
statusbar.attachToSprite(pacman, 5, 5)
tiles.setCurrentTilemap(tilemap`level1`)
let fantasma1 = sprites.create(img`
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 3 3 3 3 3 3 3 3 1 1 1 . 
    . 1 1 3 f f 3 3 3 3 f f 3 1 1 . 
    1 1 1 3 f f 3 3 3 3 f f 3 3 1 1 
    1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    f f f f f f f 5 5 f f f f f f f 
    f f f f 5 5 5 5 5 5 5 5 f f f f 
    f f f f f f f 5 5 f f f f f f f 
    f f f f f f f 5 5 f f f f f f f 
    f f f f f f f 5 5 f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f . . f f f . . f f f . . f f 
    f . . . . f . . . . f . . . . f 
    `, SpriteKind.Enemy)
fantasma1.setPosition(randint(80, 200), randint(80, 200))
fantasma1.setBounceOnWall(true)
fantasma1.setVelocity(50, 50)
let fantasma2 = sprites.create(img`
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 4 4 4 4 4 4 4 4 1 1 1 . 
    . 1 1 4 f f 4 4 4 4 f f 4 1 1 . 
    1 1 1 4 f f 4 4 4 4 f f 4 4 1 1 
    1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 1 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    f f f f f f f 5 5 f f f f f f f 
    f f f f 5 5 5 5 5 5 5 5 f f f f 
    f f f f f f f 5 5 f f f f f f f 
    f f f f f f f 5 5 f f f f f f f 
    f f f f f f f 5 5 f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f . . f f f . . f f f . . f f 
    f . . . . f . . . . f . . . . f 
    `, SpriteKind.Enemy)
fantasma2.setPosition(randint(80, 200), randint(80, 200))
fantasma2.setBounceOnWall(true)
fantasma2.setVelocity(50, 50)
let fantasma3 = sprites.create(img`
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 8 8 8 8 8 8 8 8 1 1 1 . 
    . 1 1 8 f f 8 8 8 8 f f 8 1 1 . 
    1 1 1 8 f f 8 8 8 8 f f 8 8 1 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f f f f 5 5 f f f f f f f 
    f f f f 5 5 5 5 5 5 5 5 f f f f 
    f f f f f f f 5 5 f f f f f f f 
    f f f f f f f 5 5 f f f f f f f 
    f f f f f f f 5 5 f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f . . f f f . . f f f . . f f 
    f . . . . f . . . . f . . . . f 
    `, SpriteKind.Enemy)
fantasma3.setPosition(randint(80, 200), randint(80, 200))
fantasma3.setBounceOnWall(true)
fantasma3.setVelocity(50, 50)
let fantasma4 = sprites.create(img`
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 a a a a a a a a 1 1 1 . 
    . 1 1 a f f a a a a f f a 1 1 . 
    1 1 1 a f f a a a a f f a a 1 1 
    1 a a a a a a a a a a a a a a 1 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    f f f f f f f 5 5 f f f f f f f 
    f f f f 5 5 5 5 5 5 5 5 f f f f 
    f f f f f f f 5 5 f f f f f f f 
    f f f f f f f 5 5 f f f f f f f 
    f f f f f f f 5 5 f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f . . f f f . . f f f . . f f 
    f . . . . f . . . . f . . . . f 
    `, SpriteKind.Enemy)
fantasma4.setPosition(randint(80, 200), randint(80, 200))
fantasma4.setBounceOnWall(true)
fantasma4.setVelocity(50, 50)
bibbia = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . f f 1 1 1 1 1 1 1 1 1 1 1 . 
    . . f f e e e e e e e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e 9 9 9 9 9 9 9 9 e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e e e e e e e e . 
    . . f f 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
bibbia.setPosition(200, 115)
bibbia.setBounceOnWall(true)
crose = sprites.create(img`
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 9 9 5 5 . . . . . 
    . . . . . 5 5 9 9 5 5 . . . . . 
    . 5 5 5 5 5 5 9 9 5 5 5 5 5 5 . 
    . 5 5 9 9 9 9 9 9 9 9 9 9 5 5 . 
    . 5 5 9 9 9 9 9 9 9 9 9 9 5 5 . 
    . 5 5 5 5 5 5 9 9 5 5 5 5 5 5 . 
    . . . . . 5 5 9 9 5 5 . . . . . 
    . . . . . 5 5 9 9 5 5 . . . . . 
    . . . . . 5 5 9 9 5 5 . . . . . 
    . . . . . 5 5 9 9 5 5 . . . . . 
    . . . . . 5 5 9 9 5 5 . . . . . 
    . . . . . 5 5 9 9 5 5 . . . . . 
    . . . . . 5 5 9 9 5 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
crose.setBounceOnWall(true)
crose.setPosition(118, 24)
bibbia = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . f f 1 1 1 1 1 1 1 1 1 1 1 . 
    . . f f e e e e e e e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e 9 9 9 9 9 9 9 9 e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e 9 9 e e e e e . 
    . . f f e e e e e e e e e e e . 
    . . f f 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
bibbia.setPosition(158, 115)
bibbia.setBounceOnWall(true)
if (macchie == 3) {
    game.over(true, effects.melt)
}
