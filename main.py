# RETO 6
# Gráfico de temperatura en leds (0 a 50 ºC)
def on_forever():
    led.plot_bar_graph(max(0, input.temperature()), 50) # 0 el valor mínimo y 50 el máximo
    serial.write_value("T", input.temperature())
    basic.pause(200)
basic.forever(on_forever)

# RETO 7
# Mover la gota con el acelerómetro
x = 2
y = 2
T = 150  # sensibilidad

def on_forever_drop():
    global x, y
    # dibuja la gota
    led.plot(x, y)
    basic.pause(80)
    led.unplot(x, y)

    # lee aceleraciones
    ax = input.acceleration(Dimension.X)
    ay = input.acceleration(Dimension.Y)

    # mueve en X
    if ax < -T and x > 0: x -= 1
    if ax >  T and x < 4: x += 1
    # mueve en Y
    if ay < -T and y > 0: y -= 1
    if ay >  T and y < 4: y += 1

basic.forever(on_forever_drop)
