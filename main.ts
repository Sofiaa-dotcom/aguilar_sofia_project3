while (true) {
    if (input.lightLevel() > 2) {
        music.playMelody("C4 D4 E4 F4 G4 A4", 50)
    }
    
    if (input.lightLevel() > 2) {
        light.setAll(light.rgb(138, 43, 226))
    }
    
}
