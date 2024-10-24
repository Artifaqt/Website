// Get the audio element
var audio = document.getElementById('audio');

// Add a click event listener to the "enter" element
document.getElementById("enter").addEventListener("click", function() {
    
    const target = document.getElementById("enter");

    // Fade out and remove the "enter" screen
    target.style.opacity = '0';
    target.addEventListener('transitionend', () => target.remove());

    // Ensure audio is not blocked on non-mobile devices
    if (audio) {
        // If it's a non-mobile device, play the audio
        if (typeof window.orientation === 'undefined') { 
            audio.play().catch(function(error) {
                console.log('Audio autoplay blocked:', error);
            });
        } else {
            // On mobile devices, play after click or touch event
            audio.play().catch(function(error) {
                console.log('Audio autoplay blocked on mobile:', error);
            });
        }
    } else {
        console.error('Audio element not found');
    }
});
