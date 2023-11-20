const sendCallBut = document.querySelector('#send_call');
	const alertWindow = document.querySelector('.alert');
	
	sendCallBut.addEventListener('click', (e) => {
		e.preventDefault();
		
		
		// const tel = document.querySelector('#phone2').value;
		// const name = document.querySelector('#name').value;
		// const email = document.querySelector('#email').value;
		const message = document.querySelector('#comment').value;
		
		
		
		
		let errorMessage = (usesLang && usesLang !== undefined && usesLang == 'ru') 
							? 'Укажите, пожалуйста, телефон или email для связи' 
							: 'გთხოვთ მიუთითონ თქვენი ტელეფონის ნომერი ან email';
							
		let successMesage = (usesLang && usesLang !== undefined && usesLang == 'ru') 
							? 'Сообщение отправленно' 
							: 'შეტყობინება გაგზავნილია, დაელოდეთ დაგიკავშირდებით';
			
		// if(tel.length == 0 && email.length == 0) {
		// 	alertWindow.style.display = 'block';
		// 	const text = document.createTextNode(errorMessage);
		// 	alertWindow.appendChild(text);
			
		// } else {
			var params = new URLSearchParams(); 
			// params.set('tel', tel);
			// params.set('name', name);
			// params.set('email', email);
			params.set('message', message);

			fetch('/send_email.php', {
			   method: 'POST',
			   body: params
			});
			
			alertWindow.style.display = 'block';
			alertWindow.classList.remove('alert-danger');
			alertWindow.classList.add('alert-success');
			const text = document.createTextNode(successMesage);
			alertWindow.appendChild(text);
			
		//}

	});
	
	
