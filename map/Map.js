/*
    /oth/filled-array.js
*/

class Map {
    map_grid = filled_array(10, 10, new Block())

    show() {
        let stout = ''
        stout += '++++++++++++\n'
        this.map_grid.forEach(row => {
            stout += '+'
            row.forEach(block => {
                stout += block.texture
            })
            stout += '+\n'
        })
        stout += '++++++++++++\n'
        console.log(stout)
    }

    place_block(x, y, block) {
        this.map_grid[x][y] = block
    }

    mine_block(x, y, tool_level, speed) {
        if(this.map_grid[x][y].destroy(tool_level, speed)) { console.log('Success') }
        else { console.log('Impossible') }
    }
}