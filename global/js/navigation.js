function NavigationMenu() {
	var navigationItems = [];
	var selectedItem;
	var expanded = false;
	var locked = false;
	
	function expand() {
		expanded = true;
		$('.main-navigation').removeClass('collapsed');
		$('.expand-collapse-underlay').removeClass('collapsed');
		$('.main-block').removeClass('expanded');
		setTimeout(function() { 
			initializeBreadcrumbs();
			initializeFooter();
		}, 100);
	}
	
	function collapse() {
		expanded = false;
		$('.main-navigation').addClass('collapsed');
		$('.expand-collapse-underlay').addClass('collapsed');
		$('.main-block').addClass('expanded');
		setTimeout(function() { 
			initializeBreadcrumbs();
			initializeFooter();
		}, 100);
	}
	
	function onClick() {
		clickedElement = $(this);
		selectedLevel = clickedElement.attr('level');

		// Collapse all navigation items of level more then selected
		for(id in navigationItems) {
			if (navigationItems[id].level > selectedLevel) {
				navigationItems[id].setActive(false);
			}					
		}
		
		// Show all child navigation items
		for(id in navigationItems) {
			if (navigationItems[id].parent == clickedElement.attr('id')) navigationItems[id].setActive(true);
		}

		// Select clicked item
		if (selectedItem !== undefined && selectedLevel <= selectedItem.level) {
			for(id in navigationItems) {
				if (navigationItems[id].level >= selectedLevel) {
					navigationItems[id].setSelected(false);
					navigationItems[id].setExpanded(false);
				}	
			}
		}
		
		// Deselect selected item
		if (selectedItem !== undefined) selectedItem.setSelected(false);
		
		// Set selected item and expand it
		selectedItem = navigationItems[clickedElement.attr('id')];
		selectedItem.setSelected(true);
		selectedItem.setExpanded(true);
		// Expand if not expanded
		// if (!expanded) expand();
		
		// Ajax request
		if (clickedElement.attr('url') !== undefined && clickedElement.attr('url') != '') {
			showContent(clickedElement.attr('url'));
		}
	}
	
	function initializeNavigation() {
		var navigation = $('.main-navigation .navigation');
		
		expanded = !$('.main-navigation').hasClass('collapsed');
		
		for(i = 0; i < navigation.length; i++) {
			navigationItems[$(navigation[i]).attr('id')] = new NavigationItem(navigation[i]);

			// Process click
			$(navigation[i]).click(onClick);
		}
		
		selectedItem = navigationItems[$('.main-navigation .navigation.selected').attr('id')];
		
		// Enable expand/collapse on mouseover/mouseout events
/*
		$('.main-navigation').mouseover(function(){
			if (!expanded) expand();
		}).mouseout(function(){
			if (expanded && !locked) collapse();
		});
*/
	}
	
	function constructor() {
		initializeNavigation();
		
		locked = false;
		
		this.autoCollapse = function(flag) {
			$('.main-block').unbind('click');
			if (flag === true && !this.locked === false) {
				$('.main-block').click(function() {
					if (expanded) collapse();
				});
			}
		}
		
		this.expandCollapse = function() {
			if (!expanded) 
				expand();
			else 
				collapse();
		}
		
		this.toggleAutoCollapse = function() {
			if (locked) {
				this.autoCollapse(true);
				locked = false;
				$('.expand-collapse-underlay .expand-collapse-lock').removeClass('locked');
			} else {
				this.autoCollapse(false);
				locked = true;
				$('.expand-collapse-underlay .expand-collapse-lock').addClass('locked');
			}
		}
	}
	
	return new constructor();
}



function NavigationItem(elem) {
	var el = $(elem);
	
	el.addClass('level-' + el.attr('level'));
	
	this.id = el.attr('id');
	this.level = el.attr('level');
	this.parent = el.attr('parent');
	this.url = el.attr('url');
	
	this.setActive = function(flag) {
		if (flag === true)
			el.addClass('active');
		else 
			el.removeClass('active');
	}
	
	this.setSelected = function(flag) {
		if (flag === true)
			el.addClass('selected');
		else 
			el.removeClass('selected');	
	}
	
	this.setExpanded = function(flag) {
		if (flag === true)
			el.addClass('expanded');
		else 
			el.removeClass('expanded');	
	}
}



function showContent(url) {
	$('.main-block').removeClass('active');
	
	$.post(url, function(data) {
		$('.main-block').html(data);
		$('.main-block').addClass('active');

		initializeDropdown();
		initializeDatepicker();
		initialiazeChosen();
		initializeHint();
		initializeTree();
		initializeSortableList();
		initializePreview();
		initializeDraggable();
		initializeTableSelection();
		initializeTableFocus();
		initializeCell();
		initializeResizable();
		initializeRotators();
		initializeSidePanel();
		initializeFixedRightColumn();
		
		// Set breadcrumbs size
		initializeBreadcrumbs();
		initializeFooter();
		
		// Initialize Image Gallery if not inline
		$('.auction-gallery').not('.inline').children('img').click(function() { showImageGallery(this); });
		
		// Initialize Inline Gallery
		initializeInlineGallery('.auction-gallery.inline');
		
		// initialize map
		if (document.getElementById("map")) {
			var myLatlng = new google.maps.LatLng(53.870958,27.562794);
	    var mapOptions = {
	      center: myLatlng,
	      zoom: 17,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	    var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map,
	      title: 'Novacom'
		  });
	  }

	});
}