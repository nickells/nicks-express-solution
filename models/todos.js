// BUILD A MODULE THAT PASSES THE TESTS IN THE MODEL TEST FILE

var toDoList = {}

module.exports = {
  reset: function() {
  	toDoList = {}
  },
  listPeople: function(){
  	return Object.keys(toDoList);
  },
  add: function(name,action){
  	if (!toDoList[name]) toDoList[name] = []
  	action.complete = false;
  	toDoList[name].push(action)
    //toDoList: {zeke: [{name: 'clean bath room'}]}
  },
  list: function(name){
  	return toDoList[name]
  },
  complete: function(name, idx){
  	toDoList[name][idx].complete = true;
  },
  remove: function(name,idx){
  	toDoList[name].splice(idx,1)
  }
}