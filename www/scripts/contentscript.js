import {  } from "./processimg/tracking-min";
import {  } from "./processimg/face-min";



var showEffect = "normal";
var items = document.querySelectorAll("img");
var myTracker = new tracking.ObjectTracker(['face']);  

myTracker.on('track', function(event) {
  if (event.data.length === 0) {
    // No objects were detected in this frame.
    console.log('no face');
    return false;

  } else {
    event.data.forEach(function(rect) {
      // rect.x, rect.y, rect.height, rect.width
      console.log('face');
      return true;
    });
  }
});


for (var i = 0; items.length; i++) {
  tracking.track(items[i], myTracker)
}
