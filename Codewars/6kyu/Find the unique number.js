/* 
There is an array with some numbers. All numbers are equal except for one. 
Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
*/

  //Solution #1
  function findUniq(arr) {
    let obj = {}
    
    arr.forEach(function (a) {
      if(obj.hasOwnProperty(a)) {
        obj[a] = true
      } else {
        obj[a] = false
      }
    })
    
    let keys = Object.keys(obj)
    
    for(let i = 0; i < keys.length; i++) {
      if(!obj[keys[i]]) {
        return Number(keys[i])
      }
    }
  }

  // Solution #2
  function findUniq(arr) {
    arr = arr.sort()
    if (arr[0] === arr[1]){
      return arr[arr.length -1]
    } else {
      return arr[0]
    } 
  }