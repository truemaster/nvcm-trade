	<!-- Breadcrumbs -->
	<?php include "../templates/breadcrumbs/auction-catalog-archive.html"; ?>
	
	<!-- Content -->
	<div class="content with-side-panel">
		
		<!-- Section -->
		<?php include "../templates/content/auction-catalog-table-other.html"; ?>

	</div>
	
	<!-- Side Panel -->
	<div class="side-panel-list">
		<div class="side-panel-list-item" onclick="openSidePanel('auction-categories'); $(this).addClass('active');" title="Рубрикатор"><div class="icon icon-sitemap"></div></div>
		<div class="side-panel-list-item" onclick="openSidePanel('auction-filter'); $(this).addClass('active');" title="Фильтр данных"><div class="icon icon-filter"></div></div>
		<div class="side-panel-list-item" onclick="openSidePanel('auction-settings'); $(this).addClass('active');" title="Настройки списка"><div class="icon icon-cog"></div></div>
	</div>
	<?php include "../templates/side-panel/auction-filter.html"; ?>
	<?php include "../templates/side-panel/auction-settings.html"; ?>
	<?php include "../templates/side-panel/auction-categories.html"; ?>