/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, newColor) {
    const currentColor = image[sr][sc];
    if (currentColor === newColor) return image;
  
    const dfs = (r, c) => {
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) return;
        if (image[r][c] !== currentColor) return;
        
        image[r][c] = newColor;

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }
  
    dfs(sr, sc);

    return image;
};