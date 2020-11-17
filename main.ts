let manyetizma = 0
basic.forever(function () {
    manyetizma = input.magneticForce(Dimension.Strength)
    led.plotBarGraph(
    manyetizma,
    1024
    )
    if (manyetizma > 200) {
        pins.analogWritePin(AnalogPin.P0, manyetizma)
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
    }
})
