$(document).ready(function(){   
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.image-gallery img').on('click', function(){
        var imgSrc = $(this).attr('src');
        $('.main-image img').attr('src', imgSrc);
    });

    $('[data-nextimage], [data-previousimage]').on('click', function(e) {
        e.preventDefault();
        console.log('click');
    
        // Get current image and its index
        var currentImage = $('.main-image img').attr('src');
        var currentImageIndex = $('.image-gallery img[src="'+currentImage+'"]').index();
        var totalImages = $('.image-gallery img').length;
    
        // Check if it's next or previous action
        var isPrevious = $(this).is('[data-previousimage]');  // Checks if the clicked button is the previous button
    
        // Update the index based on the action
        var newImageIndex = isPrevious ? currentImageIndex - 1 : currentImageIndex + 1;
    
        // Wrap around logic for when the index is out of bounds
        if (newImageIndex < 0) {
            newImageIndex = totalImages - 1; // Go to last image if index is below 0
        } else if (newImageIndex >= totalImages) {
            newImageIndex = 0; // Go to first image if index exceeds total
        }
    
        // Update the main image with the new source
        var newImageSrc = $('.image-gallery img').eq(newImageIndex).attr('src');
        $('.main-image img').attr('src', newImageSrc);
    });
    
});