// Assignment code here
const generateBtn = document.querySelector("#generate");
const passwordArea = document.querySelector("#password");
//charcaters defined
const upperCase = [...Array(26)].map((_, i) =>
	String.fromCharCode(i + 97).toUpperCase()
);
const lowerCase = [...Array(26)].map((_, i) =>
	String.fromCharCode(i + 97).toLowerCase()
);
const numeric = [...Array(10).keys()];

const specialChar = [
	"@",
	"#",
	"$",
	"$",
	"%",
	"^",
	"+",
	"-",
	"~",
	"(",
	")",
	"[",
	"]",
	"{",
	"}",
];

const generatePassword = () => {
	let passwordCharacters = [];
	let charLength = prompt(
		"Input a value of  at least 8 characters and no more than 128!"
	);

	if (charLength < 8 || charLength > 128) {
		alert("Please input character amount \nmin: 8 \n max:128");
	}
	let upperCaseConfirm = confirm(
		"Click OK if you would like to add uppercase characters."
	);
	let lowerCaseConfirm = confirm(
		"Click OK if you would like to add lower case characters."
	);
	let numericConfirm = confirm("Click OK if you would like to add numbers.");
	let specialCharConfirm = confirm(
		"Click OK if you would like to add special Characters."
	);

	if (
		!upperCaseConfirm &&
		!lowerCaseConfirm &&
		!numericConfirm &&
		!specialCharConfirm
	) {
		return alert(
			"Please return and select at least one of the character classes "
		);
	}

	if (upperCaseConfirm) {
		passwordCharacters = passwordCharacters.concat(upperCase);
	}
	if (lowerCaseConfirm) {
		passwordCharacters = passwordCharacters.concat(lowerCase);
	}
	if (numericConfirm) {
		passwordCharacters = passwordCharacters.concat(numeric);
	}
	if (specialCharConfirm) {
		passwordCharacters = passwordCharacters.concat(specialChar);
	}

	let newPassword = "";

	for (let i = 0; i < charLength; i++) {
		randomNumber = [Math.floor(Math.random() * passwordCharacters.length)];
		newPassword += passwordCharacters[randomNumber];
		passwordArea.textContent = newPassword;
		console.log(newPassword);
	}
};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
