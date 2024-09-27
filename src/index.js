
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix? matrix.map((i, index)=>{
    if(index%2!==0){
     return i.reverse()
    } else return i
  }).flat() : []
}
