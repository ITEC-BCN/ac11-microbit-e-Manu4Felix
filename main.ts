//  Gráfico de temperatura en leds (0 a 50 ºC)
basic.forever(function on_forever() {
    led.plotBarGraph(Math.max(0, input.temperature()), 50)
    //  0 el valor mínimo y 50 el máximo
    serial.writeValue("T", input.temperature())
    basic.pause(200)
})
