function RiktigLøsning () {
    bitbot.setLedColor(0x00FF00)
    basic.pause(4000)
    Restart()
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        LøstOppgave = true
        RiktigLøsning()
    }
})
function Restart () {
    LøstOppgave = false
    Sekvens = false
    bitbot.setLedColor(0xFFFF00)
}
function FeilLøsning () {
    bitbot.setLedColor(0xFF0000)
    basic.pause(4000)
    Restart()
}
radio.onReceivedValue(function (name, value) {
    if (name == "P") {
        Pitch = value * -20
    } else if (name == "A") {
        AvPå = value
    } else if (name == "R") {
        Roll = value * -20
    }
    if (!(Sekvens) && AvPå == 1) {
        Sekvens = true
        Kjøretid = input.runningTime()
    }
})
let DriveRight = 0
let DriveLeft = 0
let Kjøretid = 0
let Roll = 0
let AvPå = 0
let Pitch = 0
let Sekvens = false
let LøstOppgave = false
bitbot.select_model(BBModel.XL)
radio.setGroup(1)
let Sekvenstid = 45000
Restart()
basic.forever(function () {
    if (AvPå == 1) {
        DriveLeft = Pitch - pins.map(
        Roll,
        0,
        1023,
        Pitch,
        Pitch * -1
        )
        DriveRight = Pitch - pins.map(
        Roll,
        0,
        -1023,
        Pitch,
        Pitch * -1
        )
        bitbot.motor(BBMotor.Left, Pitch - DriveLeft)
        bitbot.motor(BBMotor.Right, Pitch - DriveRight)
    } else {
        bitbot.motor(BBMotor.Both, 0)
    }
    if (input.runningTime() - Kjøretid > Sekvenstid && !(LøstOppgave) && Sekvens) {
        radio.sendNumber(11)
        AvPå = 0
        FeilLøsning()
    }
})
