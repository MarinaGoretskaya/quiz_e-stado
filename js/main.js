$(document).ready ( function(){
	let body = $(document);

	let countCow;
	let countMilk;
	let position;
	let contact;
	let contactValue;

	let section1 = body.find('#section-rect-1');
	let section2 = body.find('#section-rect-2');
	let section3 = body.find('#section-rect-3');
	let section4 = body.find('#section-rect-4');

	$('#section-rect-1').find('button').click(displaySection1);
	$('#section-rect-2').find('button').click(displaySection2);
	$('#section-rect-3').find('button').click(displaySection3);
	$('#section-rect-4').find('input').click(displaySection4);
	$('#section-rect-4').find('button').click(submitData);

	// $('#section-rect-1').find('button').click(displaySection);

	let allInp = section4.find('.input-txt__wrapper');
	let inpTel = section4.find('#input-tel');
	let inpEmail = body.find('#input-email');
	let inpViber = body.find('#input-viber');
	let inpTelegram = body.find('#input-telegram');
	let inpWhatsapp = body.find('#input-whatsapp');

	let formMail = body.find('#form-email');

	let btnSubmit = section4.find("button[type='submit']");
	console.log(btnSubmit);

	// let inputTel = body.find('#inp-phone');

	body.find('#inp-phone').mask("+375(99) 999-99-99");
	// body.find('#inp-email').mask("sample@some.by");
	body.find('#inp-viber').mask("+375(99) 999-99-99");
	body.find('#inp-telegram').mask("+375(99) 999-99-99");
	body.find('#inp-whatsapp').mask("+375(99) 999-99-99");

	function displaySection1() {
		section1.addClass('display-none');
		section2.removeClass('display-none');
		countCow = section1.find('input').val();
		if (!countCow) {
			countCow = 45;
		}
		console.log(countCow);
	}

	function displaySection2() {
		section2.addClass('display-none');
		section3.removeClass('display-none');

		countMilk = section2.find('input').val();
		if (!countMilk) {
			countMilk = 12;
		}
		console.log(countMilk);
	}
	function displaySection3() {
		section3.addClass('display-none');
		section4.removeClass('display-none');

		position = section3.find('input:checked').val();
		console.log(position);
	}
	function displaySection4() {
		contact = section4.find('input:checked').val();
		console.log(contact);

		if(!contact) {
			contact = 'Телефон';
		}

		switch (contact) {
			case 'Телефон':
				allInp.addClass('display-none');
				inpTel.removeClass('display-none');
				break;
			case 'e-mail':
				allInp.addClass('display-none');
				inpEmail.removeClass('display-none');
				break;
			case 'viber':
				allInp.addClass('display-none');
				inpViber.removeClass('display-none');
				break;
			case 'telegram':
				allInp.addClass('display-none');
				inpTelegram.removeClass('display-none');
				break;
			case 'whatsapp':
				allInp.addClass('display-none');
				inpWhatsapp.removeClass('display-none');
				break;
			default:
				allInp.addClass('display-none');
				inpTel.removeClass('display-none');
				break;
		}
	}

	function submitData() {
		// btnSubmit.addClass('display-none');

		if(!contact) {
			contact = 'Телефон';
		}
		checkContactValue(contact);
		if (!contactValue || (contactValue === 'Вы не ввели данные')) {
			contactValue = 'Вы не ввели данные';
			alert(contactValue);
			return;
		}



		section4.html('div').html('Количество дойных коров: ' + countCow + '. Вы доите ' + countMilk + ' л молока в сутки. Вы – ' + position + '. Ваш ' + contact + ': ' + contactValue + '.');

		allInp.addClass('display-none');
		inpTel.removeClass('display-none');

		sendForm(formMail);

		console.log('Данные отправлены');
		open("https://www.figma.com/file/NgF3FzxtgvbiZqmprLURlS/e-stado-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD?node-id=0%3A1");
	}

	function checkContactValue(contact) {
		switch (contact) {
			case 'Телефон':
				contactValue = inpTel.find('#inp-phone').val();
				console.log(contactValue);
				break;
			case 'e-mail':
				contactValue = inpEmail.find('#inp-email').val();
				console.log(contactValue);
				break;
			case 'viber':
				contactValue = inpViber.find('#inp-viber').val();
				console.log(contactValue);
				break;
			case 'telegram':
				contactValue = inpTelegram.find('#inp-telegram').val();
				console.log(contactValue);
				break;
			case 'whatsapp':
				contactValue = inpWhatsapp.find('#inp-whatsapp').val();
				console.log(contactValue);
				break;
			default:
				contactValue = 'Вы не ввели данные';
				console.log(contactValue);
				break;
		}
	}
	function sendForm(mail) {
		// var form = $('#'+form_id);
		var msg   = mail.serialize();
		$.ajax({
			type: 'POST',
			url: '../handlers/hSentEmailCall.php', // Обработчик собственно
			data: msg,
			success: function(data) {
				// запустится при успешном выполнении запроса и в data будет ответ скрипта
			},
			error:  function(){
				alert('Ошибка!');
			}
		});

	}

});

