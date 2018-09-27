
const second = document.querySelector('.indicator.second');
const minute = document.querySelector('.indicator.minute');
const hour = document.querySelector('.indicator.hour');


function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = (360/60) * seconds;
	second.style.transform = 'rotate('+secondsDegrees + 'deg)';

	const minutes = now.getMinutes();
	const minutesDegrees = (360 / 60) * minutes;
	minute.style.transform = 'rotate('+ minutesDegrees +'deg)';

	const hours = now.getHours();
	const hoursDegrees = (360/60) * hours;
	hour.style.transform = 'rotate('+hoursDegrees +'deg)';

}


setInterval(setDate, 1000);
