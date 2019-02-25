/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
   var count = 0;
   preferences.unshift(0);
  for(var a = 1; a < preferences.length; a++){
      var b = preferences[a];
      var c = preferences[b];
      if(preferences[c] == a) {
        count ++;
      }                     
  }
  return Math.floor(count / 3);
  }

  
  

