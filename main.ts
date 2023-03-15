input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
radio.setGroup(1)
basic.showIcon(IconNames.No)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) >= 1000) {
        radio.sendNumber(0)
        basic.showIcon(IconNames.Happy)
        radio.setGroup(40)
    }
})
