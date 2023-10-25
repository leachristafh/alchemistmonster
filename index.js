$ = (queryString) => document.querySelector(queryString);

$('a-sphere').setAttribute('color','blue');
navigator.mediaDevices.getUserMedia({ video: true })
.then(function(stream) {
  let video = document.createElement('video');
  video.srcObject = stream;
  document.body.appendChild(video);
})
.catch(function(err) {
  console.error('Error accessing the camera: ', err);
});
