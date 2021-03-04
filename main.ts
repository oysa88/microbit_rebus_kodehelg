input.onButtonPressed(Button.A, function () {
    radio.sendValue("spill", 2)
    radio.sendValue("spill", 0)
    radio.sendValue("spill", 1)
    radio.sendValue("spill", 3)
    radio.sendString("")
})
input.onGesture(Gesture.Shake, function () {
	
})
radio.setGroup(4)
