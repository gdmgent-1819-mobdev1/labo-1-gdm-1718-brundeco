let main = document.getElementById('mainFrame');
let left = document.getElementById('leftSide');
let right = document.getElementById('rightSide');
let button = document.getElementById('newChar');
let randomDiv1;
let randomDiv2;


	for (let i = 0; i < 50; i++) {
		randomDiv1 = document.createElement('div');
		randomDiv1.setAttribute('class', 'opp1');
		randomDiv2 = document.createElement('div');
		randomDiv2.setAttribute('class', 'opp2');
		let number = Math.random();
	
		if(number < 0.4) {
			randomDiv1.style.backgroundColor = '#ff00c8';
			randomDiv2.style.backgroundColor = '#ff00c8';
	
		} else {
			randomDiv1.style.backgroundColor = '#0008ff';
			randomDiv2.style.backgroundColor = '#0008ff';
		};
	
		left.appendChild(randomDiv1);
		right.appendChild(randomDiv2);
	};

	function newCharacter() {
		location.reload();
	}


button.addEventListener('click', newCharacter);


