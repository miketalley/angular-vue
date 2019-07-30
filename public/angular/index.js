/* eslint-disable arrow-body-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */

// const App = window.angular.module('App', []);

// App.controller('TodoController', ($scope) => {
//   $scope.todos = [
//     { text: 'learn angular', done: true },
//     { text: 'build an angular app', done: false }];

//   $scope.addTodo = () => {
//     $scope.todos.push({ text: $scope.todoText, done: false });
//     $scope.todoText = '';
//   };

//   $scope.remaining = () => {
//     let count = 0;
//     window.angular.forEach($scope.todos, (todo) => {
//       count += todo.done ? 0 : 1;
//     });
//     return count;
//   };

//   $scope.archive = () => {
//     const oldTodos = $scope.todos;
//     $scope.todos = [];
//     window.angular.forEach(oldTodos, (todo) => {
//       if (!todo.done) $scope.todos.push(todo);
//     });
//   };
// });

window.angular
  .module('myApp', ['myApp.directives'])
  .controller('BaseController', ($scope) => {
    $scope.title = 'Angular Items';

    $scope.items = [
      {
        id: 1,
        text: 'Learn Vue',
      },
      {
        id: 2,
        text: 'Learn about single-file components',
      },
      {
        id: 3,
        text: 'Fall in love',
      },
    ];
  });


window.angular.module('myApp.directives', [])
  .directive('itemList', () => {
    return {
      template: '<div><div ng-repeat="item in items">{{ item.text }}</div></<div>'
    };
  });
