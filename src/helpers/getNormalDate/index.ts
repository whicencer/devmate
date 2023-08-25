export const getNormalDate = (timestamp: Date) => {
	const stringToTimestamp = new Date(timestamp);

	const date = stringToTimestamp.getDate();
	const month = stringToTimestamp.getMonth();
	const year = stringToTimestamp.getFullYear();
	const hour = stringToTimestamp.getHours();

	const minutes = stringToTimestamp.getMinutes();
	const formatMinute = minutes.toString().length < 2 ? `0${minutes}` : minutes;

	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	return `${date} ${months[month]} ${year} at ${hour}:${formatMinute}`;
}