// content.js
function getNotificationContainer() {
  const notificationContainer = document.querySelector('.DrinkerNC');
  return notificationContainer;
}

function createNotifcationCenter(videoContainer) {
  const notificationContainer = document.createElement('div');
  notificationContainer.className = 'DrinkerNC';
  notificationContainer.style.position = 'fixed';
  notificationContainer.style.top = '20px';
  notificationContainer.style.right = '20px';
  notificationContainer.style.fontSize = '3rem';
  notificationContainer.style.zIndex = 2000;
  
  videoContainer.appendChild(notificationContainer);
}


function addNotification(message, timeout) {
  console.log('[drinker] adding notification: ' + message);
  
  const notificationContainer = getNotificationContainer();
  const notification = document.createElement('div');
  
  notification.innerText = message;
   
  notificationContainer.appendChild(notification);

  setTimeout(() => notification.remove(), timeout)
}

// TIME TO DRINK
//createNotifcation('Mark has mentioned his baby!');



function addNeededNotificationsForSecond(){ 
  var currentTime = (Math.trunc(document.querySelector('.video-container video').currentTime))
  console.log('[drinker] currentTime: ' + currentTime);


  if (currentTime == 173) {
    addNotification('Interlude music - Take a drink!', 5000);
  }

  if (currentTime == 174) {
    addNotification('Hahaha, Mark ugh', 5000);
  }

  if (currentTime == 176) {
    addNotification('Dobby changes personality', 5000);
  }

  if (currentTime == 179) {
    addNotification('Mark is in a club', 5000);
  }
}


function checkForVideo() {
  const videoContainer = document.querySelector(".video-container")
  
  if (!videoContainer) {
    setTimeout(checkForVideo, 500);    
    return;
  }

  console.log('[drinker] found video! starting drinker.')
  createNotifcationCenter(videoContainer);
  setInterval(addNeededNotificationsForSecond, 1000);
}

checkForVideo();