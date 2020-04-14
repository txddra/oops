const Stack = function() {
  return {
    items: [],

add: function(num) {
    return this.items.push(num);
    
},
remove : function(){
  return this.items.pop();

},
peek:function(){
  return this.items[this.items.length-1]
},
}
}
const Queue = function() {
}

module.exports = {
  Stack,
  Queue,
}