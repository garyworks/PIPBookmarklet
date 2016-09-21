# PIPBookmarklet
A Bookmarklet to enable PIP(Picture-in-Picture) feature on webpage with HTML5 Video content. For macOS Sierra and iPads with PIP support.

This is something I made in a short time, don't expect anything pretty.



### How to Use
[> Drag this to your Safari Toolbar to add as Bookmarklet <](javascript:(function()%7Bvar%20video%20%3D%20document.getElementsByTagName('video')%5B0%5D%3Bvideo.play()%3Bvideo.webkitSetPresentationMode(video.webkitPresentationMode%20%3D%3D%3D%20%22picture-in-picture%22%20%3F%20%22inline%22%20%3A%20%22picture-in-picture%22)%7D)())

You can rename it as anything you like.  
Then go to any webpage with HTML5 Video (YouTube, Vimeo, Twitch..etc.), click it and go.


### Why bookmarklet instead of extension ###

- Works on iPad too!
- I tried to do it with Safari App Extension, but it seems to require users' actions with the video first. A bookmarklet treated as a users' interactions.

###Contact
Made by [@garyworks](https://twitter.com/garyworks)



