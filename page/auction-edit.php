	<!-- Breadcrumbs -->
	<?php include "../templates/breadcrumbs/auction.html"; ?>
	
	<!-- Content -->
	<div class="content with-breadcrumbs with-side-panel">
		
		<!-- Section -->
		<?php include "../templates/content/auction-edit.html"; ?>

	</div>
	
	<!-- Side Panel -->
	<div class="side-panel-list">
		<div class="side-panel-list-item" onclick="toggleSidePanel(this, 'key-value');" title="Параметры публикации"><div class="icon fa fa-cogs"></div></div>
		<div class="side-panel-list-item" onclick="toggleSidePanel(this, 'table');" title="Параметры публикации"><div class="icon fa fa-table"></div></div>
	</div>
	<?php include "../templates/side-panel/key-value.html"; ?>
	<?php include "../templates/side-panel/table.html"; ?>