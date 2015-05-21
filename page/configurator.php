	<!-- Breadcrumbs -->
	<?php include "../templates/breadcrumbs/configurator.html"; ?>
	
	<!-- Content -->
	<div class="content with-side-panel">
		
		<!-- Section -->
		<?php include "../templates/content/configurator.html"; ?>

	</div>
	
	<!-- Side Panel -->
	<div class="side-panel-list">
		<div class="side-panel-list-item" onclick="toggleSidePanel(this, 'configurator-style');" title="Стиль ячейки"><div class="icon fa fa-paint-brush"></div></div>
		<div class="side-panel-list-item" onclick="toggleSidePanel(this, 'configurator-edit');" title="Настройки ячейки"><div class="icon fa fa-edit"></div></div>
	</div>
	<?php include "../templates/side-panel/configurator-style.html"; ?>
	<?php include "../templates/side-panel/configurator-edit.html"; ?>