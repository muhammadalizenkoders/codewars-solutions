// Description:
// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.
// URL:https://www.codewars.com/kata/53f40dff5f9d31b813000774
var recoverSecret = function(triplets) {
    let duplets = [];
    let res = '';
  
    triplets.forEach(trip => {
      let str = trip.join('');
      let d1 = str.substr(0,2);
      let d2 = str.substr(1,3);
      if (duplets.indexOf(d1) === -1) { duplets.push(d1); } 
      if (duplets.indexOf(d2) === -1) { duplets.push(d2); }
    });
    
    let nxt = findNext(duplets);
    while (nxt) {
      res += nxt;
      duplets = duplets.filter(d => d.indexOf(nxt) === -1);
      nxt = findNext(duplets);
    }
    
    return res;
  }
  function findNext(duplets) {
    let nxt = duplets.find(d => duplets.every(_d => d[0] !== _d[1])); 
    return duplets.length > 1 ? nxt[0] : duplets[0];
  }