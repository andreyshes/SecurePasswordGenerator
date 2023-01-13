// Assignment code here
let passwordArea = document.getElementById("password");
//charcaters defined
let characters = {
	uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	lowercase: "abcdefghijklmnopqrstuvwxyz",
	numbers: "0123456789",
	special: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
};

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

// PASSWORD Function
writePassword = () => {
	let passwordString = "";

	let charactersLength = prompt("Select the desired amount of characters:");

	if (charactersLength < 8 || charactersLength > 128) {
		alert("Please select valid amount of characters.\n - Min: 8\n- Max: 128");
	}

	let uppercaseConfirm = confirm(
		"Would you like to include uppercase characters?"
	);
	let lowercaseConfirm = confirm(
		"Would you like to include lowercase characters?"
	);
	let numbersConfirm = confirm("Would you like to include numbers?");
	let specialConfirm = confirm("Would you like to include special characters?");

	if (
		uppercaseConfirm === false &&
		lowercaseConfirm === false &&
		numbersConfirm === false &&
		specialConfirm === false
	) {
		alert("Please select OK on one of the desried options below!");
	}

	if (uppercaseConfirm === true) {
		passwordString = passwordString.concat(characters.uppercase);
	}

	if (lowercaseConfirm === true) {
		passwordString = passwordString.concat(characters.lowercase);
	}

	if (numbersConfirm === true) {
		passwordString = passwordString.concat(characters.numbers);
	}

	if (specialConfirm === true) {
		passwordString = passwordString.concat(characters.special);
	}

	let passwordOptions = passwordString.split("");
	let password = [];

	for (let i = 0; i < charactersLength; i++) {
		let randomNumber = Math.floor(Math.random() * passwordOptions.length);
		let random = passwordOptions[randomNumber];
		password.push(random);
	}

	password = password.join("");
	passwordArea.textContent = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
