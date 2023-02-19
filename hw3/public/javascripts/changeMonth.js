//Lukas Miller
//Helper function for changing month-button text
//Also now issues a POST and reflect in "orders" list
function changeMonth(text) {
	document.getElementById('ddbutton').innerText = text;   
	//Issue post
	$.post("http://localhost:3000/orders",
	//Hold onto the month for grabbing that month's data in later versions
 	{
 		 month: text
  	},
	//"data" is array of 3 Json objects
	//Parse each one for its Quantity and Topping
	//Set those valuse to a string to set text of bullet points
	//Consulted this resource for the parsing:
	//		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
  	function(data,status){
		
		const jsonOne = data[0];
		const one = JSON.parse(jsonOne);
		const cherries = one.Quantity + " " + one.Topping;
		
		const jsonTwo = data[1];
		const two = JSON.parse(jsonTwo);
		const chocolates = two.Quantity + " " + two.Topping;
		
		const jsonThree = data[2];
		const three = JSON.parse(jsonThree);
		const plains = three.Quantity + " " + three.Topping;
		
		document.getElementById('cherryOrders').innerText = cherries;
		document.getElementById('chocolateOrders').innerText = chocolates;
		document.getElementById('plainOrders').innerText = plains;
  	});
} 