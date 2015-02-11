function initializeExpandCollapse() {
	$('.expand-collapse-underlay .expand-collapse').click(function() {
		navigationMenu.expandCollapse();
/*
		$('.main-navigation').toggleClass('collapsed'); 
		$('.main-block').toggleClass('expanded');
		setTimeout(function() { 
			initializeBreadcrumbs();
			initializeFooter();
		}, 200);
*/
	});
	$('.expand-collapse-underlay .expand-collapse-lock').click(function() {
		navigationMenu.toggleAutoCollapse();
	});
}

function initializeDropdown() {
	// Set dropdown options width
	var dropdowns = $('.dd');
	for(i = 0; i < dropdowns.length ; i++) {
		$(dropdowns[i]).find('.options').width('1000px');
		
		var options = $(dropdowns[i]).find('.option .dropdown-item-title');
		var maxWidth = 0;
		for(j = 0; j < options.length ; j++) {
			if ($(options[j]).outerWidth(true) > maxWidth) maxWidth = $(options[j]).outerWidth(true);
		}
		$(dropdowns[i]).find('.options').width((maxWidth + 10) + 'px');
	}
	
	// Show options
	$('.dd').unbind('click').click(function() {
		// Set overflow to visible to aviod clipping
		$(this).parents('.section-content').removeAttr("style");
		$(this).parents('.section-content').css('overflow', 'visible');
		$(this).parents('.section-content').css('overflow-y', 'visible');
		
		$(this).toggleClass('active');
		
		if ($(this).children('.options').outerHeight() < $(window).height() - $(this).offset().top - $(this).outerHeight() - $('.content-footer').outerHeight()) {
			$(this).addClass('down');
		} else {
			$(this).addClass('up');
		}

		// Make option list align to right border if not enough space on the right
		if (($(this).children('.options').outerWidth() > $(this).parent().innerWidth() - $(this).position().left) &&
			$(this).children('.options').outerWidth() < $(this).position().left) {
			$(this).addClass('drop-left');
		}
		
		event.stopPropagation();
	}).unbind('mouseleave').mouseleave(function(){
		// Set overflow-x auto to enable scrolling
		$(this).parents('.section-content').removeAttr("style");
		
		$(this).removeClass('up');
		$(this).removeClass('down');
		$(this).removeClass('active');
	});
	// Set value
	$('.dd .option').unbind('click').click(function() {
		if ($(this).attr('value') !== undefined) {
			var selectedValue = $(this).attr('value');
			$(this).parents('.dd').children('.title').html(selectedValue);
		}
	});
	// Delete functionality
	$('.dd .dropdown-item-delete').unbind('mouseenter').mouseenter(function(){
		$(this).parent().addClass('to-delete');
	}).unbind('mouseleave').mouseleave(function() {
		$(this).parent().removeClass('to-delete');
	}).unbind('click').click(function(event) {
		$(this).parent().remove();
		event.stopPropagation();
	});
}

function initializeDatepicker() {
	$(".datepicker").datepicker({ 
		dayNames: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
		dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
		monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
		dateFormat: "dd.mm.yy"
	});
	$(".timepicker").timepicker({
		timeOnlyTitle: 'Выберите время',
		timeText: 'Время',
		hourText: 'Часы',
		minuteText: 'Минуты',
		secondText: 'Секунды',
		currentText: 'Сейчас',
		closeText: 'Закрыть'
	});
}

function initialiazeChosen() {
	var options = {
		no_results_text: "Данные не найдены!"
	};
	$('.chsn').chosen(options);
}

function initializeCheckbox() {
	// Do not process checkbox click if it is wrapped in checkbox-holder
	$('.checkbox-holder input').click(function(event) { 
		event.stopPropagation();
	});

	// Process click bu checkbox-holder
	$('.checkbox-holder').click(function() {
		var checkbox = $(this).children('input');
		if (checkbox.is(':checked')) {
			checkbox.prop('checked', false); 
		} else { 
			checkbox.prop('checked', true);
		}
	});	
}

function initializeHint() {
	// Get All hints on the page
	var hints = $('[hint]');
	
	for(i = 0; i < hints.length ; i++) {
		var el = $(hints[i]);
		
		// Create Hint Element
		el.wrap('<div class="hint-holder"></div>');
		el.before('<div class="hint"><div class="arrow icon-caret-left"></div>' + el.attr('hint') + '</div>');
		
		// Set Mouse Enter Event Listener
		el.mouseenter(function() {
			currentHint = $(this);
			setTimeout(function(){
				if (currentHint !== undefined) {
					// Positioning
					currentHint.parent().children('.hint').css('top', (currentHint.parent().outerHeight() - currentHint.parent().children('.hint').outerHeight()) / 2);
					currentHint.parent().children('.hint').css('left', currentHint.parent().outerWidth() + 15);
					currentHint.parent().addClass('active');
				}
			}, hintDelay);
		});
		
		// Set Mouse Leave Event Listener
		el.mouseleave(function() {
			if (currentHint !== undefined) {
				currentHint.parent().removeClass('active');
				currentHint =  undefined;
			}
		});	
	}
}

function initializeSortableList(id) {
	headers = id !== undefined ? $('#' + id + ' .column.sortable') : $('.column.sortable');
	
	for (i = 0; i < headers.length; i++) {
		var header = $(headers[i]);
		header.wrapInner('<div class="column-title" />');
		
		// Set width
		if (header.find('.column-title').outerWidth(true) + 22 > header.innerWidth()) {
			header.find('.column-title').width(header.innerWidth() - 22);
		}
		
		header.append('<div class="sort">&nbsp;</div>');
		header.click(function() {
			// Get sort direction
			direction = $(this).hasClass('desc') ? 'asc' : 'desc';
			
			// Clear Sorting
			$(this).parents('.list-header').find('.column').removeClass('asc').removeClass('desc');
			
			// Show sort order
			$(this).addClass(direction);
		});	
	}
}


function initializeTree() {
	$('.tree .leaf').unbind('click').click(function(event) {
		 $(this).toggleClass('expanded'); 
		 event.stopPropagation();
	});
}

function initializeAttachment() {
//	$('.attachment').
}

function initializeBreadcrumbs() {
	$('.breadcrumbs .breadcrumb').css('max-width', '');
	var breadrcrumbs = $('.breadcrumbs .breadcrumb');
	var totalWidth = 0;
	for (i = 0; i < breadrcrumbs.length; i++) {
		totalWidth += $(breadrcrumbs[i]).outerWidth(true);
	}
	if (totalWidth > $('.breadcrumbs').innerWidth() - $('.breadcrumbs .add-to-favorite').outerWidth(true)) {
		var  averageWidth = Math.floor(($('.breadcrumbs').innerWidth() - $('.breadcrumbs .add-to-favorite').outerWidth(true)) / breadrcrumbs.length) - parseInt($('.breadcrumbs .breadcrumb').css('padding-left')) - parseInt($('.breadcrumbs .breadcrumb').css('padding-right'));
		$('.breadcrumbs .breadcrumb').css('max-width', averageWidth);
	}
}

function initializeFooter() {
	$('.main-block .content-footer span').css('max-width', '');
	var criteriaWidth = $('.main-block .content-footer .footer-criteria').outerWidth();
	var allowedWidth = $('.main-block .content-footer').innerWidth() - parseInt($('.main-block .content-footer').css('padding-left')) - parseInt($('.main-block .content-footer').css('padding-right'));
	var btns = $('.main-block .content-footer > div');
	var btnsWidth = 0;
	for (i = 0; i < btns.length; i++) {
		btnsWidth += $(btns[i]).outerWidth(true);
	}
	btnsWidth -= criteriaWidth;
	if (criteriaWidth > allowedWidth - btnsWidth) {
		//alert(allowedWidth - btnsWidth - btns.length*5);
		$('.main-block .content-footer .footer-criteria').css('max-width', allowedWidth - btnsWidth - btns.length*5);
	}
}

function initializePreview() {
	$('.preview').unbind('mouseenter').mouseenter(function(event){
		if ($('#imgprvw').length == 0) {
			// Set overflow to visible to aviod clipping
			$(this).parents('.section-content').removeAttr("style");
			$(this).parents('.section-content').css('overflow', 'visible');
			$(this).parents('.section-content').css('overflow-y', 'visible');
		
			// insert popup if doesn't exist
			// prepare parent element for popup
			$(this).parent().css('position', 'relative').css('overflow', 'visible');
			// build and insert preview popup
			preview = $('<div id="imgprvw"></div>').addClass('image-preview').css('background-image', 'url(' + $(this).attr('src') + ')');
			$(this).before(preview);
			// positioning
			var left = $(this).position().left + ($(this).outerWidth(true) - $('#imgprvw').outerWidth(true)) / 2 + 25; // $(this).position().left;
			var top = $(this).position().top - $('#imgprvw').outerHeight(true) - 4;	
			if ($(this).hasClass('bottom')) {
				var top = $(this).position().top + $(this).outerHeight(true) + 4;	
			} 
			$('#imgprvw').css('left', left).css('top', top);
		}
	}).unbind('mouseleave').mouseleave(function() {
		if ($('#imgprvw')) {
			// Set overflow-x auto to enable scrolling
			$(this).parents('.section-content').removeAttr("style");
		
			// remove popup if exist
			$('#imgprvw').remove();
		}
	});
}

function initializeDraggable() {
	$(".draggable").draggable({
		axis: "x",
		helper : 'clone',
		opacity : 0.3
	});
	$(".droppable").droppable({
		hoverClass: "draggable-hover",
		activeClass: "draggable-active",
		drop: function( event, ui ) {
			var source = ui.draggable.attr('column');
			var destination = $(this).attr('column');

			// Swap header
			$(this).before(ui.draggable);

			// Swap columns
			var rows = $(this).parents('.section-content').find('.list-row');
			for(i = 0; i < rows.length; i++) {
				$(rows[i]).find('.' + destination).before($(rows[i]).find('.' + source));
			}
		}
    });
	$(".droppable.table1").droppable({
		accept: ".table1",
		hoverClass: "draggable-hover",
		activeClass: "draggable-active",
		drop: function( event, ui ) {
			var source = ui.draggable.attr('column');
			var destination = $(this).attr('column');

			// Swap header
			$(this).before(ui.draggable);

			// Swap columns
			var rows = $(this).parents('.section-content').find('.list-row');
			for(i = 0; i < rows.length; i++) {
				$(rows[i]).find('.' + destination).before($(rows[i]).find('.' + source));
			}
		}
    });
    $(".droppable.table2").droppable({
		accept: ".table2",
		hoverClass: "draggable-hover",
		activeClass: "draggable-active",
		drop: function( event, ui ) {
			var source = ui.draggable.attr('column');
			var destination = $(this).attr('column');

			// Swap header
			$(this).before(ui.draggable);

			// Swap columns
			var rows = $(this).parents('.section-content').find('.list-row');
			for(i = 0; i < rows.length; i++) {
				$(rows[i]).find('.' + destination).before($(rows[i]).find('.' + source));
			}
		}
    });
}

function initializeTableSelection() {
	$('.list-header input[type="checkbox"]').unbind('change').change(function() {
		if ($(this).is(':checked')) { 
			$(this).parents('.section-content').find('.list-row').addClass('selected');
			$(this).parents('.section-content').find('input[type=checkbox]').prop('checked', true); 
		} else {
			$(this).parents('.section-content').find('.list-row').removeClass('selected');
			$(this).parents('.section-content').find('input[type=checkbox]').prop('checked', false);
		}
	});

	$('.list-row').unbind('click').click(function() {
		$(this).toggleClass('selected');
		if ($(this).hasClass('selected')) {
			$(this).find('input[type="checkbox"]').prop('checked', true);
		} else {
			$(this).find('input[type="checkbox"]').prop('checked', false);
		}
	});
}

function initializeTableSelection() {
	$( ".autocomplete" ).autocomplete({
	  source: [ "Novacom Web Site", "Novacom BBGC"]
	});
}

function initializeCell() {
	$('.section-content.tables .column').click(function() {
		$('.section-content.tables .column').removeClass('active');
		$('.section-content.tables .column').removeClass('highlighted');
		
		$(this).parents('.list-row').find('.column').addClass('highlighted');
		$(this).parents('.section-content').find("." + $(this).attr('column')).addClass('highlighted');
		
		$(this).addClass('active');
	}).dblclick(function(){
		$(this).find('input').select();
	});
}

function initializeResizable() {
	var options = { 
		maxHeight: $(".resizable").height(),
		resize: function( event, ui ) {
			$(this).css('position', 'relative').css('left', '0').css('top', '0');
			var rows = $(this).parents('.section-content').find('.column.' + ui.element.attr('column')).width($(this).width());
		},
		stop: function( event, ui ) {
			$(this).css('position', 'relative').css('left', '0').css('top', '0');
		}
	};
	$( ".resizable" ).resizable(options);
}


function validateForm() {
	var fields = ['#employeeName', '#employeePhone'];
	for(i = 0; i < fields.length; i++) {
		if ($(fields[i])) {
			$('.content-holder').scrollTop($(fields[i]).scrollTop());
			
			el = $(fields[i]);
			el.addClass('warning');
			if (!el.parent().hasClass('hint-holder')) {
				el.wrap('<div class="hint-holder"></div>');
			}
			el.parent().children('.error').remove();
			el.before('<div class="error"><div class="arrow"></div><span class="icon-warning-sign"></span> Такое имя уже существует</div>');
	
			el.parent().children('.error').css('top', (el.parent().outerHeight() - el.parent().children('.error').outerHeight()) / 2);
			el.parent().children('.error').css('left', el.parent().outerWidth() + 15);
			el.parent().children('.error').addClass('active');
		}
	}
}

function initializeRotators() {
	var rotators = $('.rotator');

	for(i = 0; i < rotators.length; i++) { 
		Rotator(rotators[i], 5000);
	}
}

/*
function initializeRotator(rotator) {
	var interval = 5000;
	var items = $(rotator).find('div[slide]');
	
	for(j = 0; j < items.length; j++) { 
		console.log($(items[j]).attr('slide'));
	}
	
	setTimeout(function() {
		
	}, interval);
}
*/



function Rotator(id, timeout) {
	var rotator;
	var timeout;
	var rotatorItems;
	var activeItem;
	var interval;
	var paused = true;
	
	function next() {
		$(rotatorItems[activeItem]).removeClass('active');
		rotator.find('.rotator-navigation-item:nth-child(' + (activeItem+1) + ')').removeClass('active');

		activeItem++;
		if (activeItem == rotatorItems.length) activeItem = 0;
				
		$(rotatorItems[activeItem]).addClass('active');
		rotator.find('.rotator-navigation-item:nth-child(' + (activeItem+1) + ')').addClass('active');
	}
	
	function previous() {
		$(rotatorItems[activeItem]).removeClass('active');
		rotator.find('.rotator-navigation-item:nth-child(' + (activeItem+1) + ')').removeClass('active');
		
		activeItem--;
		if (activeItem < 0) activeItem = rotatorItems.length-1;
		
		$(rotatorItems[activeItem]).addClass('active');
		rotator.find('.rotator-navigation-item:nth-child(' + (activeItem+1) + ')').addClass('active');
	}
	
	function custom(ind) {
		$(rotatorItems[activeItem]).removeClass('active');
		activeItem = ind;
		$(rotatorItems[activeItem]).addClass('active');
	}
	
	function stop() {
		clearInterval(interval);
	}

	function play() {
		interval = setInterval(function() {
			next();
		}, timeout);
	}
	
	function initializeRotator(id, timeout) {
		rotator = $(id);		
		timeout	= timeout;
		activeItem = 0;
		
		rotatorItems = rotator.find('.rotator-item');
		$(rotatorItems[activeItem]).addClass('active');
		
		var rotatorNavigation = $('<div class="rotator-navigation"></div>');
		for(i = 0; i < rotatorItems.length; i++) {
			var rotatorNavigationItem = $('<div class="rotator-navigation-item"></div>');
			
			rotatorNavigationItem.click(function() {
				alert('Not supported');
			});
			
			if (i == activeItem) rotatorNavigationItem.addClass('active');
			
			rotatorNavigation.append(rotatorNavigationItem);
		}
		rotator.append(rotatorNavigation);
		
/*
		rotator.mouseover(stop);
		rotator.mouseleave(play);
*/

		play();
	}
	
	function constructor(id, timeout) {
		initializeRotator(id, timeout);
		
		this.stop = function() {	
			stop();
		}
		
		this.play = function() {
			play();
		}
		
		this.show = function(ind) {
			custom(ind);
		}

	}
	
	return new constructor(id, timeout);
}

