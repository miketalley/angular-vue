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
  .controller('StageController', ($scope) => {
    $scope.title = 'Planet Shop';

    $scope.items = [{
      title: 'Moon',
      price: '9.99€',
      src: '//resources.brunoscopelliti.com/codepen/images/moon.png'
    }, {
      title: 'Sun',
      price: '29.99€',
      src: '//resources.brunoscopelliti.com/codepen/images/sun.png'
    }, {
      title: 'Earth',
      price: '19.99€',
      src: '//resources.brunoscopelliti.com/codepen/images/earth.png'
    }, {
      title: 'Pluton',
      price: '5.50€',
      src: '//resources.brunoscopelliti.com/codepen/images/pluton.png'
    }, {
      title: 'Mars',
      price: '24.00€',
      src: '//resources.brunoscopelliti.com/codepen/images/mars.png'
    }];

    $scope.cartItems = [];

    $scope.buyItem = (title, price) => {
      const objAdded = {
        title,
        price
      };
      $scope.cartItems.push(objAdded);
    };
  });


window.angular.module('myApp.directives', [])
  .directive('itemCard', () => {
    return {
      scope: {
        title: '@itemTitle',
        price: '@itemPrice',
        src: '@itemSrc'
      },
      controller: ($scope) => {
        $scope.addToCart = (t, p) => {
          const mainScope = window.angular.element('#main').scope();
          mainScope.buyItem(t, p);
          return false;
        };
      },
      replace: true,
      template: '<div class="item-int"><h3>{{title}}</h3><div class="data"><img src="{{src}}" title="{{title}}"><span class="left">price: {{price}}</span><span class="right"><a ng-click="addToCart(title, price);">Add to cart</a></span></div></div>'
    };
  })
  .directive('shoppingCart', () => {
    return {
      replace: true,
      restrict: 'EACM',
      template: '<div class="sCart"><img src="//resources.brunoscopelliti.com/codepen/images/cart.png" alt="Items: "/> <span class="quantity">{{cartItems.length}}</span></div>'
    };
  });
