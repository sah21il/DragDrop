var containerCount = 3; // Total number of containers

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  var target = event.target;
  while (target.tagName !== 'DIV') {
    target = target.parentNode;
  }
  event.dataTransfer.setData('text/plain', target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData('text/plain');
  var draggableElement = document.getElementById(data);
  var container = event.target;

  // Get the assigned image for the container
  var assignedImage = container.getAttribute('data-image');

  // Check if the dropped image matches the container's assigned image
  if (assignedImage && assignedImage !== draggableElement.id) {
    alert('Wrong Emotion! Please drop the Emoji into the correct Emotion.');
    filledContainers=filledContainers-1;
    return;
  }

  // Check if the container already contains an image
  if (container.querySelectorAll('img').length > 0) {
    alert('Classic case of Emotionful!');
    filledContainers=filledContainers-1;
    return;
  }

  var clone = draggableElement.cloneNode(true);
  container.appendChild(clone);

  // Check if all containers are filled
  var filledContainers = document.querySelectorAll('.drag-container img').length;
  if (filledContainers === containerCount) {
    setTimeout(function() {
        alert('Yay You Did ITTTTT!');
    }, 0);
  }
}