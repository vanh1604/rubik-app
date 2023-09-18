export const isNumber = (str: string): boolean => {
	return !isNaN(parseFloat(str)) && isFinite(Number(str));
};

export const timeConvert = (time: string) => {
	//check if validate
	const isValidate = time.includes(":") && isNumber(time.replace(":", ""));
	if (isValidate) {
		const currentDate = new Date();

		// Extract the hours and minutes from the time string
		const [hours, minutes] = time.split(":").map(Number);

		// Set the hours and minutes of the Date object
		currentDate.setHours(hours);
		currentDate.setMinutes(minutes);

		return currentDate;
	}
	return;
};
