
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function userClicked(i) {
	//$('#usersList').hide();
	$('#userDetails').show();
}

function startSetup() {
	$(document).ready(function(){
		$('#userDetails').hide();
		
		$('#closeModal').on('click', function(){
			console.log('clicked');
			$('#userDetails').hide();
		});
	});
	
	
}

