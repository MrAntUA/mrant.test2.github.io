jQuery(document).ready(function ($) {
	var priceTotal; //GLOBAL VARIABLE FOR TOTAL PRICE
	var currentTour; //GLOBAL VARIABLE FOR CURRENT TOUR
	$.ajaxSetup({async: false}); //SYNC OPTION FOR AJAX REQUESTS

	var priceCont = $('#price');

	function printPrice() {
		priceCont.html(priceTotal);
	}

	function priceOptionInit() {
		var amountPeople = $('.amount_of_people').find('select');
		var extras1 = $('.extras1').find('input');
		var extras2 = $('.extras2').find('input');

		// additional value to price on changing extras
		extras1.on('change', function () {
			if ($(this).attr('checked')) {
				priceTotal = parseInt(priceTotal) + +$(this).val();
				printPrice();
			} else {
				priceTotal = parseInt(priceTotal) - +$(this).val();
				printPrice();
			}
		})

		extras2.on('change', function () {
			if ($(this).attr('checked')) {
				priceTotal = parseInt(priceTotal) + +$(this).val();
				printPrice();
			} else {
				priceTotal = parseInt(priceTotal) - +$(this).val();
				printPrice();
			}
		})

		//calculating price on people amount select change
		amountPeople.on('change', function () {
			extras1.removeAttr('checked');
			$('.extras1').removeClass('checked');

			extras2.removeAttr('checked');
			$('.extras2').removeClass('checked');


			var amountPeople = $(this).val();
			if (currentTour == 'Platinum leisure') {
				switch (amountPeople) {
					case '2' :
						priceTotal = '585';
						printPrice();
						break;

					case '3' :
						priceTotal = '650';
						printPrice();
						break;

					case '4' :
						priceTotal = '715';
						printPrice();
						break;

					case '5' :
						priceTotal = '780';
						printPrice();
						break;

					case '6' :
						priceTotal = '845';
						printPrice();
						break;

					case '7' :
						priceTotal = '910';
						printPrice();
						break;

					case '8' :
						priceTotal = '975';
						printPrice();
						break;
				}
			} else if (currentTour == 'Gold leisure') {
				switch (amountPeople) {
					case '2' :
						priceTotal = '520';
						printPrice();
						break;

					case '3' :
						priceTotal = '585';
						printPrice();
						break;

					case '4' :
						priceTotal = '650';
						printPrice();
						break;

					case '5' :
						priceTotal = '715';
						printPrice();
						break;

					case '6' :
						priceTotal = '780';
						printPrice();
						break;
				}
			} else if (currentTour == 'Silver leisure') {
				switch (amountPeople) {
					case '2' :
						priceTotal = '455';
						printPrice();
						break;

					case '3' :
						priceTotal = '520';
						printPrice();
						break;

					case '4' :
						priceTotal = '553';
						printPrice();
						break;

					case '5' :
						priceTotal = '585';
						printPrice();
						break;

					case '6' :
						priceTotal = '640';
						printPrice();
						break;
				}
			}

		});

	}


	//show thumbnail row on weather click
	var chosenTime;
	$('#morning-input, #sunset-input').on('change', function () {
		$('#tours_thmbnails_row').fadeIn();
		tripTime = $(this).data('sql');    //APPLYING TIME TO SQL QUERY FOR DATAPICKER
		chosenTime = $(this).data('time');
		getDataForDatapicker(boatName, tripTime);
		parseDataForDatapicker(datapickerDataString);
		datePickerInit(datapickerDataParsed);

	});

	//CLICK ON THUMBNAIL
	$('.tour-thumbnail').on('click', function (e) {

		e.preventDefault(); //preventing double action

		$('#additional-data').fadeIn();  //showing form with inputs
		$('.price-container').fadeIn(); //showing price container

		$('.tour-thumbnail').removeClass('tour-active');
		$(this).addClass('tour-active');


		var selector = $(this).data('tourname');
		var tourItem = $('#' + selector);
		var container = $('#tour-info');
		var content = tourItem.html();

		container.html('');
		container.html(content);

		currentTour = $(this).data('tourslug');

		switch (currentTour) {
			case 'Platinum leisure' :
				priceTotal = '585';
				break;
			case 'Gold leisure' :
				priceTotal = '520';
				break;
			case 'Silver leisure' :
				priceTotal = '455';
				break;
		}

		printPrice();

		var input = $('#tour-info').find('.select-form-jq input');
		var select = $('#tour-info').find('.select-form-jq select');

		boatName = $(this).data('sql');   //APPYING BOATNAME DATA FOR DATA PICKER SQL QUERY

		getDataForDatapicker(boatName, tripTime);         //DATAPICKER INIT
		parseDataForDatapicker(datapickerDataString);
		datePickerInit(datapickerDataParsed);

		$('.transport-row select').styler();

		input.styler();
		select.styler();   //pretty view for selects checkboxes

		priceOptionInit();   //init func for price selects

	});
	//display transportation tip

	$('.transport-select select').on('change', function () {
		if ($(this).val() == 'No transportation') {
			$('.info-nor').fadeOut();
		} else {
			$('.info-nor').fadeIn();
		}
	});


	// DISPLAY PRICE CONTAINER
	// $(document).on('scroll', function(){
	//   var priceCont = $('.price-container');
	//   var priceParent = $('#price-parent');
	//
	//   var top = priceParent.offset().top;
	//   var width = priceParent.width();
	//   var windowWidth = $(window).width();
	//   var right = (windowWidth - width) / 2 -15;
	//
	//   if ($('body').scrollTop() > top) {
	//     priceCont.css({'position':'fixed','top': '0','right': right});
	//   } else {
	//     priceCont.css({'position': 'absolute','right': '0'});
	//   }
	//
	// });
	//Transport ->
	window.transportFun = function (val) {
		var stringVal = val.match(/(\d+)$/g);
		document.getElementById('timeTransport').innerText = stringVal[0] + ' minutes';
		console.log(val);
	};

	//DATAPICKER
	var datapickerWrapper = $('#datapicker-wrapper');

	var boatName = 'breakers1';   //GLOBAL VARIABLES FOR DATAPICKER SQL
	var tripTime = 'morning';     //basic init for avoiding console errors
	var datapickerDataString = '';
	var datapickerDataParsed = [];


	function getDataForDatapicker(boatName, tripTime) {
		$.post(
			'/wp-admin/admin-ajax.php',
			{
				action: 'get_date_frontend',
				boatName: boatName,
				tripTime: tripTime
			},
			function (response) {
				datapickerDataString = response;
				console.log(response);
			}
		);
	}

	function parseDataForDatapicker(data) {  //creating data for datapicker
		if (data == '') {
			datapickerDataParsed = [];
		} else {
			var dataArray = [];

			if (data.indexOf(', ') != -1) {
				var rawDateArray = data.split(', ');

				for (var i = 0; i < rawDateArray.length; i++) {
					dataArray.push(rawDateArray[i]);

				}

			} else {
				dataArray.push(data);
			}

			datapickerDataParsed = dataArray;
			console.log(datapickerDataParsed)
		}
	}

	function datePickerInit(datapickerDisabledDays) {
		var disabledDays;
		if (datapickerDisabledDays.length == 0) {
			var yesterday = new Date(new Date() - 24 * 3600 * 1000).getDate();
			disabledDays = [];
			disabledDays.push(yesterday);
		} else {

			disabledDays = datapickerDisabledDays;
		}
		datapickerWrapper.html('');
		datapickerWrapper.html('<div id=datePicker class=data-picker></div>');

		$('#datePicker').multiDatesPicker({
			maxPicks: 1,
			minDate: 0,
			mode: 'daysRange',
			autoselectRange: [0, 1],
			addDisabledDates: disabledDays
		});

	}

	$('.modal-revision').hide();
	var messagesFormValue;

	function createdElementModal(name, value) {
		if (name == 'time') {
			return false;
		}
		var newElement = document.createElement('div');
		newElement.className = "tr";
		newElement.innerHTML = '<div class="td">' +
			name +
			'</div>' +
			'<div class="td hr"></div>' +
			'<div class="td">' +
			value +
			'</div>';
		document.getElementById('containerModal').appendChild(newElement);
	}

	var test_data;
	var form = $("#form");

	form.submit(function (e) {
		if ($('#datePicker').multiDatesPicker('value') == '') {
			alert('Please select date of your trip');

			$(document).scrollTop($('#datePicker').offset().top);
			return false;
		}
		$('#bookNowPreview').hide();
		//test variable ->
		test_data = $(this).serialize();
		//test variable end ||

		var form_data = $(this).serializeArray(); //собираем все данные из формы
		messagesFormValue = form_data;

		createdElementModal('Tour', currentTour);

		var datePickerValue = $('#datePicker').multiDatesPicker('value');
		createdElementModal('Date', datePickerValue);

		createdElementModal('Time', chosenTime);

		var amountOfPeople = $('#tour-info .amount_of_people select').val();
		createdElementModal('Amount of people', amountOfPeople);

		var amountOfKids = $('#tour-info .amount_of_kids select').val();
		createdElementModal('Amount of kids', amountOfKids);

		var countriesValue = $('#countries input').val();
		createdElementModal('Coutnry', countriesValue);


		form_data.forEach(function (item, i, form_data) {
			console.log(item.name + ': ', item.value);
			createdElementModal(item.name, item.value);
		});

		var price = '$ ' + $('#price').html();
		createdElementModal('Total price', price);

		$('.modal-revision').show();
		$('body').css('overflow', 'hidden');
		//Stop propagation
		return false;
	});

	//back to form
	window.backEditor = function () {
		var el = document.getElementById('containerModal');
		el.innerHTML = '';
		$('#bookNowPreview').show();
		$('.modal-revision').hide();
		$('body').css('overflow', '');
	};

	//created messages
	var sendMailBtn = $('#sendmail');

	sendMailBtn.on('click', function () {
		createdMessages();
	});

	window.createdMessages = function () {
		var messagesWrapper = document.createElement('div');
		var messagesText = document.createElement('table');
		messagesText.style.width = "100%";
		messagesText.style.maxWidth = "1000px";
		messagesText.style.margin = "0 auto";
		messagesText.style.padding = "10px";

		var messages = function (name, value) {
			if (name == 'time') {
				return false;
			}
			var newElement = document.createElement('tr');
			newElement.innerHTML = '<td>' +
				name +
				'</td>' +
				'<td>' +
				value +
				'</td>';
			messagesText.appendChild(newElement);
		};

		messages('Tour', currentTour);

		var datePickerValue = $('#datePicker').multiDatesPicker('value');
		messages('Date', datePickerValue);

		messages('Time', chosenTime);

		var amountOfPeopleElement = $('#tour-info .amount_of_people select');
		var amountOfPeople = amountOfPeopleElement.val();
		messages('Amount of people', amountOfPeople);

		var countriesValue = $('#countries input').val();
		messages('Coutnry', countriesValue);

		messagesFormValue.forEach(function (item, i, form_data) {
			messages(item.name, item.value);
		});

		var price = '$ ' + $('#price').html();
		messages('Total price', price);

		messagesWrapper.appendChild(messagesText);
		var message = messagesWrapper.innerHTML;

		$.post(
			'/wp-admin/admin-ajax.php',
			{
				action: 'sendmail',
				message: message,
				address: 'den.dmytruk@gmail.com'
			},
			function () {
				alert("письмо успешно отправлено");
			}
		);


	};


	function alterDatabase(boatName, tripTime, newDate) {
		$.post(
			'/wp-admin/admin-ajax.php',
			{
				action: 'alter_data_frontend',
				boatName: boatName,
				tripTime: tripTime,
				newDate: newDate
			},
			function (response) {

			}
		);
	}

	$('#test').on('click', function () {
		var newDate = $('#datePicker').multiDatesPicker('value');
		alterDatabase(boatName, tripTime, newDate);
	});
});
