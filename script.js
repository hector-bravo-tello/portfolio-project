document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById('lightbox-modal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");
    var images = document.getElementsByClassName('project-image');

    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
});
