// Function to fetch the list of MP3 files from the PHP script
async function getMusicFiles() {
    try {
        const response = await fetch('/assets/php/music-files.php'); // Adjust the path as needed
        if (response.ok) {
            const musicFiles = await response.json();
            return musicFiles;
        } else {
            console.error('Failed to fetch music files:', response.statusText);
            return [];
        }
    } catch (error) {
        console.error('Error fetching music files:', error);
        return [];
    }
}

// Function to randomly select and play a song
async function playRandomSong() {
    const audioElement = document.getElementById('audio');
    
    // Set the volume to 10%
    audioElement.volume = 0.1;

    // Get the list of MP3 files
    const musicFiles = await getMusicFiles();
    
    if (musicFiles.length > 0) {
        // Select a random song
        const randomIndex = Math.floor(Math.random() * musicFiles.length);
        const selectedSong = 'assets/music/' + musicFiles[randomIndex];
        
        // Set the source and play the song
        audioElement.src = selectedSong;
        console.log('Playing: ' + selectedSong);
        audioElement.play().catch(function(error) {
            console.log('Autoplay blocked:', error);
        });
    } else {
        console.error('No music files found');
    }
}

// Automatically play a random song on page load and listen for song end
window.onload = function() {
    const audioElement = document.getElementById('audio');
    
    // Play a random song when the page loads
    playRandomSong();

    // When the current song ends, play another random song
    audioElement.addEventListener('ended', function() {
        playRandomSong();  // Play a new random song
    });
};
