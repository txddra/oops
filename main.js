const Stack = function() {
  return {
    items: [],

    add: function(num) {
      return this.items.push(num);
    
},
remove : function(){
  return this.items.pop();

}
}
}
const Queue = function() {
}

module.exports = {
  Stack,
  Queue,
}