input.onButtonPressed(Button.AB, function () {
    if (AvPå == 0) {
        AvPå = 1
    } else {
        AvPå = 0
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    AvPå = 0
})
let Roll = 0
let Pitch = 0
let AvPå = 0
radio.setGroup(1)
basic.forever(function () {
    Pitch = input.rotation(Rotation.Pitch)
    Roll = input.rotation(Rotation.Roll)
    radio.sendValue("P", Pitch)
    radio.sendValue("A", AvPå)
    radio.sendValue("R", Roll)
})
