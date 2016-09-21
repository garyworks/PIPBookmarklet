javascript:(
	function(){

		var video = document.getElementsByTagName('video')[0];
		video.play();
		video.webkitSetPresentationMode(video.webkitPresentationMode === "picture-in-picture" ? "inline" : "picture-in-picture");

	})()
