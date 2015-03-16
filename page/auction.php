	<!-- Breadcrumbs -->
	<?php include "../templates/breadcrumbs/auction.html"; ?>
	
	<!-- Content -->
	<div class="content with-breadcrumbs with-side-panel">
		
		<!-- Section -->
		<?php include "../templates/content/auction.html"; ?>

	</div>
	

	
	<!-- Side Panel -->
	<div class="side-panel-list">
		<div class="side-panel-list-item" onclick="$(this).parent().children().removeClass('active'); $(this).addClass('active'); $('.side-panel').removeClass('active'); $('#auction-categories').addClass('active');" title="Рубрикатор"><div class="icon icon-sitemap"></div></div>
		<div class="side-panel-list-item" onclick="$(this).parent().children().removeClass('active'); $(this).addClass('active'); $('.side-panel').removeClass('active'); $('#auction-filter').addClass('active');" title="Фильтр данных"><div class="icon icon-filter"></div></div>
		<div class="side-panel-list-item" onclick="$(this).parent().children().removeClass('active'); $(this).addClass('active'); $('.side-panel').removeClass('active'); $('#auction-settings').addClass('active');" title="Настройки списка"><div class="icon icon-cog"></div></div>
	</div>
	<?php include "../templates/side-panel/auction-filter.html"; ?>
	<?php include "../templates/side-panel/auction-settings.html"; ?>
	<?php include "../templates/side-panel/auction-categories.html"; ?>