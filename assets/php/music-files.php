<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Define the correct path to the music folder
$musicDir = '../music/';  // Relative path from music-files.php to the assets/music folder

// Check if the directory exists
if (is_dir($musicDir)) {
    // Get all files in the directory with .mp3 extension
    $musicFiles = array_filter(scandir($musicDir), function($file) use ($musicDir) {
        return pathinfo($file, PATHINFO_EXTENSION) === 'mp3';
    });

    // Return the list of music files as a JSON response
    header('Content-Type: application/json');
    echo json_encode(array_values($musicFiles));
} else {
    // If directory is not found, return an error message
    echo json_encode(["error" => "Music directory not found"]);
}