/*
    /oth/sleep.js
*/

class Bloc {
    hardness = 1   // Hardness
    tool_level = 0 // Tool level
    texture = ' '  // Texture

    destroy(tool_level, speed) {
        if(tool_level < this.tool_level) {
            return false
        }
        sleep(Math.round(this.hardness / speed * 1000))
        return true
    }
}