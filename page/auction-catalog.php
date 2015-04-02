	<!-- Breadcrumbs -->
	<?php include "../templates/breadcrumbs/auction-catalog.html"; ?>
	
	<!-- Content -->
	<div class="content with-side-panel">
		
		<!-- Section -->
		<?php include "../templates/content/auction-catalog.html"; ?>

	</div>
	
	<!-- Side Panel -->
	<div class="side-panel-list">
		<div class="side-panel-list-item" onclick="toggleSidePanel(this, 'auction-categories');" title="Рубрикатор"><div class="icon icon-sitemap"></div></div>
		<div class="side-panel-list-item" onclick="toggleSidePanel(this, 'auction-filter');" title="Фильтр данных"><div class="icon icon-filter"></div></div>
		<div class="side-panel-list-item" onclick="toggleSidePanel(this, 'auction-settings');" title="Настройки списка"><div class="icon icon-cog"></div></div>
	</div>
	<?php include "../templates/side-panel/auction-filter.html"; ?>
	<?php include "../templates/side-panel/auction-settings.html"; ?>
	<?php include "../templates/side-panel/auction-categories.html"; ?>