function RiktigLøsning() {
    soundExpression.giggle.play()
    Lysstyrke = 255
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 20; index++) {
            Lysstyrke += -12
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.setBrightness(Lysstyrke)
            strip.show()
            basic.pause(5)
        }
        for (let index = 0; index < 20; index++) {
            Lysstyrke += 12
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.setBrightness(Lysstyrke)
            strip.show()
            basic.pause(5)
        }
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(2500)
    CheckTest = 0
}
function FeilLøsning() {
    soundExpression.sad.play()
    Lysstyrke = 255
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 20; index++) {
            Lysstyrke += -12
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            strip.setBrightness(Lysstyrke)
            strip.show()
            basic.pause(5)
        }
        for (let index = 0; index < 20; index++) {
            Lysstyrke += 12
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            strip.setBrightness(Lysstyrke)
            strip.show()
            basic.pause(5)
        }
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(2500)
    CheckTest = 0
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Feil") {
        FeilLøsning()
    }
})
function NeoPixelsControl() {
    if (CheckTest == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (CheckTest == 1) {
        Steg1.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (CheckTest == 2) {
        Steg2.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (CheckTest == 3) {
        Steg3.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (CheckTest == 4) {
        Mål.showColor(neopixel.colors(NeoPixelColors.Green))
        radio.sendString("T")
        radio.sendNumber(10)
        RiktigLøsning()
    }
}
function CheckpointCheck() {
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && CheckTest == 0) {
        CheckTest = 1
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1 && CheckTest == 1) {
        CheckTest = 2
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 1 && CheckTest == 2) {
        CheckTest = 3
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (pins.digitalReadPin(DigitalPin.P16) == 1 && CheckTest == 3) {
        CheckTest = 4
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
}
let Lysstyrke = 0
let CheckTest = 0
let Mål: neopixel.Strip = null
let Steg3: neopixel.Strip = null
let Steg2: neopixel.Strip = null
let Steg1: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
Steg1 = strip.range(0, 6)
Steg2 = strip.range(0, 12)
Steg3 = strip.range(0, 18)
Mål = strip.range(0, 24)
CheckTest = 0
radio.setGroup(1)
basic.showNumber(1)
basic.forever(function () {
    CheckpointCheck()
    NeoPixelsControl()
    basic.pause(100)
})
