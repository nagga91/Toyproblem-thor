/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



 var commonCharacters = function(string1, string2) {
   var ch=''
   for(var i=0;i<string2.length;i++){
       if(string1.includes(string2[i])){
           ch+=string2[i]}
   }
   while(i<ch.length){
      if(ch.includes(ch[i])){
          ch.slice(i,1)}
      i++
  }
   return ch
    }
    
    