/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function(mat) {
    const rows = mat.length;
    const cols = mat[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];
        
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 0) {
                result[i][j] = 0;
            } else {
                result[i][j] = Infinity;
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i > 0) {
                result[i][j] = Math.min(result[i][j], result[i - 1][j] + 1);
            }

            if (j > 0) {
                result[i][j] = Math.min(result[i][j], result[i][j - 1] + 1);
            }
        }
    }

    for (let i = rows - 1; i >= 0; i--) {
        for (let j = cols - 1; j >= 0; j--) {
            if (i < rows - 1) {
                result[i][j] = Math.min(result[i][j], result[i + 1][j] + 1);
            }

            if (j < cols - 1) {
                result[i][j] = Math.min(result[i][j], result[i][j + 1] + 1);
            }
        }
    }

    return result;
};