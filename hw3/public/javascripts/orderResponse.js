	// This script to handle displaying order details
let success = document.getElementById("successText");
let form = document.getElementsByTagName("form")[0];
	//Listener to, on form subimt, display order results or an error message
    //I consulted this link for listening for form submission:
		// https://stackoverflow.com/questions/61358620/display-message-after-form-submit-with-javascript
	form.addEventListener("submit", (e) => {
	  e.preventDefault();
	  // If response contains vegan, alert and return to form
	  let lowCaseResponse = document.getElementById("notes").value.toLowerCase();
  	  if (lowCaseResponse.includes("vegan")){
		
		
  		alert("We're sorry, cheesecake cannot be vegan.");
  		}
	  // Else, replace form area with entered values.
	  else {
		form.style['display'] = 'none';  
		var num = document.getElementById("number");
		var val = num.value;
		
		// Check for type, then amount, then re-set success text accordingly and re-display it
		if(document.getElementById("plain").checked){
			if (val == 1){
				success.innerText = success.innerText + "\n1 Plain";
			}
			else if (val == 2){
				success.innerText = success.innerText + "\n2 Plain";
			}
			else if (val == 3){
				success.innerText = success.innerText + "\n3 Plain";
			}
			else {
				success.innerText = success.innerText + "\n4 Plain";
			}
			success.style.display='block';
		}
		else if(document.getElementById("cherry").checked){
			if (val == 1){
				success.innerText = success.innerText + "\n1 Cherry";
			}
			else if (val == 2){
				success.innerText = success.innerText + "\n2 Cherry";
			}
			else if (val == 3){
				success.innerText = success.innerText + "\n3 Cherry";
			}
			else {
				success.innerText = success.innerText + "\n4 Cherry";
			}
			success.style.display='block';
		}
		else if(document.getElementById("chocolate").checked){
			if (val == 1){
				success.innerText = success.innerText + "\n	1 Chocolate";
			}
			else if (val == 2){
				success.innerText = success.innerText + "\n2 Chocolate";
			}
			else if (val == 3){
				success.innerText = success.innerText + "\n3 Chocolate";
			}
			else {
				success.innerText = success.innerText + "\n4 Chocolate";
			}
			success.style.display='block';
		}
		else {
			// Alert user they failed to select flavor, re-display form.
			alert("Please select a flavor");
			form.style['display'] = 'block'; 
		}
		
  	  }
	});