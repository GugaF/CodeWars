// https://www.codewars.com/kata/588a00ad70720f2cd9000005
// 6 Kyu - Simple Web Framework #1: Create a basic router

// In this Kata, you have to design a simple routing class for a web framework.
// The router should accept bindings for a given url, http method and an action.
// Then, when a request with a bound url and method comes in, it should return the result of the action.

// Example usage:

// var router = new Router;
// router.bind('/hello', 'GET', function(){ return 'hello world'; });
// router.runRequest('/hello', 'GET') // returns 'hello world';

// When asked for a route that doesn't exist, router should return:
// 'Error 404: Not Found'

// The router should also handle modifying existing routes. See the example tests for more details.

// First Try
// var Router = function()
// {
//     this.bindings = [],
    
//     this.bind = function(url, httpMethod, action) {  
//       for(let i = 0; i < this.bindings.length; i++) {
//         if (url === this.bindings[i][0] && httpMethod === this.bindings[i][1]) { 
//           this.bindings[i][2] = action; 
//         }
//       }
//       this.bindings.push([url, httpMethod, action])
//     },
      
//     this.runRequest = function(url, httpMethod) {
//       for (let i = 0; i < this.bindings.length; i++) {
//         if ( url === this.bindings[i][0] && httpMethod === this.bindings[i][1] ) { 
//           return this.bindings[i][2]();
//         }
//       }
//       return 'Error 404: Not Found';    
//     }
// }

var Router = function() {
    this.routes = new Map();
    
    this.bind = function(url, method, action) {
      this.routes.set(url + ":" + method, action)
    },
      
    this.runRequest = function(url, method) {
      if(!this.routes.has(url + ":" + method)) {
        return "Error 404: Not Found";
      }
      return this.routes.get(url + ":" + method)();
    }
}

var router = new Router;

router.bind('/hello', 'GET', function() { return 'hello world'; });
router.bind('/login', 'GET', function() { return 'Please log-in.'; });
console.log(router.runRequest('/hello', 'GET'), 'hello world');
console.log(router.runRequest('/login', 'GET'), 'Please log-in.');

router.bind('/vote', 'POST', function() { return 'Voted.'; });
router.bind('/comment', 'POST', function() { return 'Comment sent.'; });
console.log(router.runRequest('/vote', 'POST'), 'Voted.');
console.log(router.runRequest('/comment', 'POST'), 'Comment sent.');

router.bind('/login', 'GET', function() { return 'Please log-in.'; });
router.bind('/login', 'POST', function() { return 'Logging-in.'; });
console.log(router.runRequest('/login', 'GET'), 'Please log-in.');
console.log(router.runRequest('/login', 'POST'), 'Logging-in.');

var router2 = new Router;  
console.log(router2.runRequest('/this-url-does-not-exist', 'GET'), 'Error 404: Not Found');

var router3 = new Router;
router3.bind('/page', 'GET', function() { return 'First binding.'; });
router3.bind('/page', 'GET', function() { return 'Modified binding.'; });
console.log(router3.runRequest('/page', 'GET'), 'Modified binding.');