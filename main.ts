basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # #
        . # . . #
        . # # # #
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # #
        . # . . #
        . # # # #
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.clearScreen()
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() < 50) {
    	
    } else {
    	
    }
})
