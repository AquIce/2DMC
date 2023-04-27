/*
    /oth/sleep.js
*/

class Block {
    hardness   // Hardness
    tool_level // Tool level
    texture    // Texture

    constructor(hardness = 1, tool_level = 0, texture = ' ') {
        this.hardness = hardness
        this.tool_level = tool_level
        this.texture = texture
    }

    destroy(tool_level, speed) {
        if(tool_level < this.tool_level) {
            return false
        }
        sleep(Math.round(this.hardness / speed * 1000))
        return true
    }
}