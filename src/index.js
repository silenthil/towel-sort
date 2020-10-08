
// You should implement your task here.
module.exports = function towelSort (matrix) {
  if(matrix===undefined) return [];
  if (matrix.length==0) return [];
  return matrix.reduce(function f(result,item,index){
    if ((index+1)%2==0&&Array.isArray(item))
     item=item.reverse()
    if (Array.isArray(item)) 
    return  result.concat(item)
  })
}
