//  RETO 6
//  Gráfico de temperatura en leds (0 a 50 ºC)
basic.forever(function on_forever() {
    led.plotBarGraph(Math.max(0, input.temperature()), 50)
    //  0 el valor mínimo y 50 el máximo
    serial.writeValue("T", input.temperature())
    basic.pause(200)
})
//  RETO 7
//  Mover la gota con el acelerómetro
let x = 2
let y = 2
let T = 150
//  sensibilidad
basic.forever(function on_forever_drop() {
    
    //  dibuja la gota
    led.plot(x, y)
    basic.pause(80)
    led.unplot(x, y)
    //  lee aceleraciones
    let ax = input.acceleration(Dimension.X)
    let ay = input.acceleration(Dimension.Y)
    //  mueve en X
    if (ax < -T && x > 0) {
        x -= 1
    }
    
    if (ax > T && x < 4) {
        x += 1
    }
    
    //  mueve en Y
    if (ay < -T && y > 0) {
        y -= 1
    }
    
    if (ay > T && y < 4) {
        y += 1
    }
    
})
