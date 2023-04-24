function filled_array(x, y, filler) {
    rt = []
    for(let i = 0; i < x; i++) {
        rt.push([...Array(y)].fill(filler))
    }
    return rt
}