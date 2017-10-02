// content.js

const videoContainer = document.querySelector(".video-container")

const notificationContainer = document.createElement('div');
notificationContainer.style.position = 'fixed';
notificationContainer.style.top = '20px';
notificationContainer.style.right = '20px';
notificationContainer.style.zIndex = 2000;

videoContainer.appendChild(notificationContainer);


function createNotification(message) {
  const notification = document.createElement('div');
  
  notification.innerText = message;
   
  return notification;
}

// TIME TO DRINK
//createNotifcation('Mark has mentioned his baby!');



setInterval(function(){ 


var CurTime = (Math.trunc(document.querySelector('.video-container video').currentTime))
var TestingTest = "Take a drink"


if (CurTime == 173) {
        //alert("Interlude music - Take a drink!"); 
        //$(".PlayerControls--container").notify("Interlude music - Take a drink!", "info");
        //alertify.message('Interlude music - Take a drink!').bringToFront(); 
        //Push.create(TestingTest, {
         //       body: 'Interlude Music',
         //   });


}


}, 1000);


