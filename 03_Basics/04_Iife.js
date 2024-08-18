//  Immediately Invoked Function Expression (IIFE)
//  to avoid polluting the global scope with variables we can use IIFE to create a new scope for our variables

(function() {
  console.log('IIFE');
})();

( (todaysDate) => {
    console.log(todaysDate);
})(new Date(Date.now()).toISOString());