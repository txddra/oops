const Stack = function() {
  return {
    items: [],

    add: function(item) {
      return this.items.push(item);
    
}
}
}
const Queue = function() {
}

module.exports = {
  Stack,
  Queue,
}