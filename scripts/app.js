function getAllUsers() {
	$.getJSON('http://localhost:3001/users', function(data) {
	//$.getJSON('https://api.github.com/users', function(data) {
		var allUsersDisplay = '';
		
		$.each(data, function(index, item){
			var userDisplay = '<div class=\"user-card\" >';
			userDisplay += "<a href="+item.html_url+"><p class=\"usernameMain\" >"+capitalizeFirstLetter(item.login)+"</p></a>";
			userDisplay += "<a onclick=\"userClicked('"+item.html_url+"')\" href=\"#\"><img src=\""+item.avatar_url+"\"  class=\"pictureMain\" /></a>" ;
			userDisplay += "<a href=\""+item.html_url+"\"><img class=\"github-icon\" src=\"images/github-icon.png\"></a>"
			userDisplay += "</div>";
			
			allUsersDisplay+= userDisplay;
			
		});
		
		$(allUsersDisplay).appendTo('#usersList');
		
	
	});

}

getAllUsers();
startSetup();

