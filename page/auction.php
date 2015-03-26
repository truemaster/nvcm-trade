	<!-- Breadcrumbs -->
	<?php include "../templates/breadcrumbs/auction.html"; ?>
	
	<!-- Content -->
	<div class="content with-breadcrumbs with-side-panel">
		
		<!-- Section -->
		<?php include "../templates/content/auction.html"; ?>

	</div>

	<!-- Side Panel -->
	<div class="side-panel-list">
		<div class="side-panel-list-item" onclick="openSidePanel('list'); $(this).addClass('active');" title="Список"><div class="icon icon-list"></div></div>
	</div>
	<?php include "../templates/side-panel/list.html"; ?>