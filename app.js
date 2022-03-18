const Button = document.querySelector('.advice-generator-btn');
const Advice_id = document.querySelector('.advice-id');
const Advice = document.querySelector('.advice');

Button.addEventListener(
	'click',
	(GetQuote = async () => {
		try {
			const res = await fetch('https://api.adviceslip.com/advice');
			const data = await res.json();
			Advice_id.innerHTML = data.slip.id;
			Advice.innerHTML = data.slip.advice;
		} catch (error) {
			Advice_id.innerHTML = res.status;
			Advice.innerHTML = error.message;
		}
	})
);
