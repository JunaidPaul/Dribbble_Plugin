$(function(){
	$.dribbble.getShots({

	    per_page: 3,
	    page: 2,
		callback: function(data){
			console.log(data);
			for (var i=0; i< data.shots.length; i++){
		var shot=data.shots[i];
		var wrapperDiv= $("<div/>", {

				});
				var title= $("<h2/>", {
					text: shot.title
				});
				var img= $("<img/>", {
					alt: shot.title,
					src: shot.image_url

				});
				var user =$("<a/>", {
					text: shot.player.name,
					href: shot.player.url
				});
				wrapperDiv
				.append(title)
				.append(img)
				.append(user);
				$("body").append(wrapperDiv);   

	}

		}
	});
});