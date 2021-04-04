var TabTrigger = { 'work': false, 'skills': false };
$(window).on("load", function(){
	$('div.this__header_navigation_wrapper .__navigation_tab_trigger').on('click', function(event){
		event.preventDefault();
		var triggerData = $(this).data('trigger-id');
		switch(triggerData){
			case 'work':
				TabTrigger.work = !TabTrigger.work;
				$('section.this__tab_content[data-trigger-content-id="work"]').attr('data-trigger-action', TabTrigger.work);
				$('section.this__tab_content[data-trigger-content-id="skills"]').attr('data-trigger-action', false);
				TabTrigger.skills = false;
				break;
			case 'skills':
				TabTrigger.skills = !TabTrigger.skills;
				$('section.this__tab_content[data-trigger-content-id="skills"]').attr('data-trigger-action', TabTrigger.skills);
				$('section.this__tab_content[data-trigger-content-id="work"]').attr('data-trigger-action', false);
				TabTrigger.work = false;
				break;
		}
	});
});