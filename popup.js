
console.log("ok");


document.addEventListener('DOMContentLoaded', function() {
	console.log("loaded");
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
console.log("clicked");

  var all = document.getElementsByTagName("*");

	  for (var i=0, max=all.length; i < max; i++) {
		       // Do something with the element here
		  // i
		 console.log(all[i]); 
		   }
  
  
  }, false);
}, false);
