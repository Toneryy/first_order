function validate(value, expected, func) {
	const passed = func(value) === expected;
	console.log(`Test for "${value}" | ${passed ? 'PASSED' : 'FAILED'}`);
}

function validatePhone(number) {
	if (number == null || number == undefined) {
		return false
	}
	if (number.length < 18) {
		return false;
	}

	let i = 1;
	if (number[0] != "+") {
		i = 0;
	}

	while (i < number.length) {
		if (isNaN(number[i]) && number[i] != ")" && number[i] != "(" && number[i] != "-") {
			return false;
		}
		i++;
	}
	return true;
}

const validateName = (name) => {
	let index = 0;
	while (index < name.length) {
		if (!isNaN(name[index])) {
			return false
		}
		index++
	}
	return true
}


const validateLocation = (location) => {
	return location.length >= 4;
}


const validateDate = (date) => {
	return date.length > 0;
}

validate('+1 (234) 567 89 10', true, validatePhone);
validate('+1 (234) 567-89-10', true, validatePhone);
validate('+1234567890', false, validatePhone);
validate('+1 (234) 567-8901a', false, validatePhone);
validate('+1 (234) 567-8901!', false, validatePhone);
validate('', false, validatePhone);
validate(null, false, validatePhone);
validate(undefined, false, validatePhone);
validate(1234567890, true, validatePhone);

validate('John Doe', false, validateName);
validate('Jane Doe', false, validateName);
validate('John-Doe', true, validateName);
validate('John123', false, validateName);
validate('John@Doe', true, validateName);
validate('', true, validateName);
validate('     ', false, validateName);

validate('New York', true, validateLocation);
validate('London', true, validateLocation);
validate('Paris', true, validateLocation);
validate('Moscow', true, validateLocation);
validate('Tokyo', true, validateLocation);
validate('Berlin', true, validateLocation);
validate('Rome', true, validateLocation);
validate('Sydney', true, validateLocation);
validate('Madrid', true, validateLocation);
validate('Athens', true, validateLocation);
validate('Cairo', true, validateLocation);

validate('2023-12-10', true, validateDate);
validate('2023-12-01', true, validateDate);
validate('2024-01-01', true, validateDate);
validate('', false, validateDate);
