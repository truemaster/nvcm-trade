	<!-- Breadcrumbs -->
	<?php include "../templates/breadcrumbs/help-guide.html"; ?>
	
	<!-- Content -->
	<div class="content with-side-panel">
		
		<!-- Section -->
		<?php include "../templates/content/help-guide.html"; ?>

	</div>
	
			<!-- Side Panel -->
	<div class="side-panel-list">
		<div class="side-panel-list-item" onclick="$(this).parent().children().removeClass('active'); $(this).addClass('active'); $('.side-panel').removeClass('active'); $('#help-guide-table-of-content').addClass('active');" title="Оглавление"><div class="icon icon-sitemap"></div></div>
	</div>
	<?php include "../templates/side-panel/table-of-content.html"; ?>