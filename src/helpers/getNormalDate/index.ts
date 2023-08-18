export const getNormalDate = (timestamp: Date) => {
	const currentDate = new Date();

	const date = timestamp.getDate();
	const month = timestamp.getMonth();
	const year = timestamp.getFullYear();
	const hour = timestamp.getHours();

	const minutes = timestamp.getMinutes();
	const formattedMinute = minutes.toString().length < 2 ? `0${minutes}` : minutes;

	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	// Days
	if (currentDate.getMonth() > month || currentDate.getFullYear() > year) return `${date} ${months[month]} ${year}`;
	switch (date) {
		case (currentDate.getDate()):
			return currentDate.getHours() - hour !== 0
				? `${currentDate.getHours() - hour} hours ago`
				: `${currentDate.getMinutes() - minutes} minutes ago`;
		case (currentDate.getDate()-1):
			return `Yesterday at ${hour}:${formattedMinute}`;
		case (currentDate.getDate()-7):
			return `Last week at ${hour}:${formattedMinute}`;
	}

	return `${date} ${months[month]} ${year}`;
}