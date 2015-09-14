'use strict';

var button=$('#button');


button.on('click', function(){
	button.prop('disabled', true);
	button.html('loading...');
	button.css('font-weight: none');
	setTimeout(function(){
		button.prop('disabled', false);
		button.html('Submit');
	}, 4000);
});




