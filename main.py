# Gráfico de temperatura en leds (0 a 50 ºC)
def on_forever():
    led.plot_bar_graph(max(0, input.temperature()), 50) # 0 el valor mínimo y 50 el máximo
    serial.write_value("T", input.temperature())
    basic.pause(200)
basic.forever(on_forever)