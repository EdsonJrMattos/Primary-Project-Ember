Todos.Router.map(function(){
    this.resource('todos', { path : '/'},function(){
    	this.route('active');
    });
});

Todos.TodosRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('todo');
	}
});
Todos.TodosIndexRoute = Ember.Route.extend({
	model: function(){
		return this.modelFor('todos');
	}
});
Todos.TodsoActiveRoute = Ember.Route.extend({
	model: function(){
		return this.store.filter('todo', function(todo){
			return !todo.get('isCompleted');
		});
	}
   ,renderTemplate: function(controller){
   		this.render('todo/index',{controller: controller});
   }
});
