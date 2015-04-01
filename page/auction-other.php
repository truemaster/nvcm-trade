	<!-- Breadcrumbs -->
	<?php include "../templates/breadcrumbs/auction-catalog-archive.html"; ?>
	
	<!-- Content -->
	<div class="content with-side-panel">
		
		<!-- Section -->
		<?php include "../templates/content/auction-catalog-table-other.html"; ?>

	</div>
	
	<!-- Side Panel -->
	<div class="side-panel-list">
		<div class="side-panel-list-item" onclick="toggleSidePanel('auction-categories');" title="Рубрикатор"><div class="icon icon-sitemap"></div></div>
		<div class="side-panel-list-item" onclick="toggleSidePanel('auction-filter');" title="Фильтр данных"><div class="icon icon-filter"></div></div>
		<div class="side-panel-list-item" onclick="toggleSidePanel('auction-settings');" title="Настройки списка"><div class="icon icon-cog"></div></div>
	</div>
	<?php include "../templates/side-panel/auction-filter.html"; ?>
	<?php include "../templates/side-panel/auction-settings.html"; ?>
	<?php include "../templates/side-panel/auction-categories.html"; ?>