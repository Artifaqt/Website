# **Artifaqt.io Website**

This project is the source code for **Artifaqt.io**, a personal website with dynamic music playback, social links, and video backgrounds. This README provides an overview of the website’s structure, installation, and key features.

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [File Structure](#file-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Customization](#customization)

---

## **Project Overview**

The **Artifaqt.io** website includes:
- Dynamic background video (`bg2.mp4`) and audio player for background music.
- Social media links (Discord, Instagram, GitHub, etc.).
- Randomized MP3 playback from the `/assets/music` folder.
- Custom font integration and optimized styles.

## **Features**

- **Video Background**: A full-screen looping video (`bg2.mp4`) plays on the landing page.
- **Music Player**: Background music is randomly selected from the `/assets/music` folder and automatically plays at a reduced volume.
- **Custom Fonts**: Google Fonts are integrated, and local fonts are available via the `@font-face` declarations.
- **Responsive Layout**: The site is mobile-friendly and adjusts based on device screen size.
- **Hover Effects**: Interactive hover effects over social media icons.

## **File Structure**

Here’s an overview of the project’s file structure:
```bash
/public_html │ ├── /assets │ ├── /css │ │ ├── landing.css # Main CSS for landing page │ │ └── archive.css # Additional CSS for the archive page │ ├── /fonts # Custom font files │ ├── /img # Images and video files (background, icons) │ ├── /js │ │ ├── cursor.js # JavaScript controlling sparkles effect │ │ ├── enter.js # Script handling enter button functionality │ │ └── musicPlayer.js # Script for dynamic MP3 playback │ └── /music # Folder containing MP3 files for background music │ ├── index.html # Main landing page └── music-files.php # PHP script to dynamically list music files
```
### Key Files:
- **`index.html`**: The landing page that displays the background video, social links, and initiates the music player.
- **`music-files.php`**: A PHP script that scans the `/assets/music/` folder and returns a list of available MP3 files in JSON format.
- **`musicPlayer.js`**: JavaScript to randomly select and play one of the available MP3 files on page load.

## **Installation**

### Prerequisites:
- A web hosting environment (e.g., Hostinger) with PHP enabled.
- Ability to upload files via FTP or a file manager.

### Steps:
1. **Upload Files**: Upload the entire project directory (`/public_html`) to your web host using FTP or the hosting control panel.
2. **Ensure PHP is Enabled**: Make sure your hosting provider supports PHP, as it is required for listing music files dynamically.
3. **Place MP3 Files**: Add any `.mp3` files to the `/assets/music` directory. The site will automatically load a random song on page load.

## **Usage**

1. **Background Music**: 
   - The music will play automatically upon entering the website.
   - Music is selected randomly from the files in `/assets/music`.
   - Volume is set at 30% but can be adjusted in the `musicPlayer.js` file by changing the `audioElement.volume` value.

2. **Video Background**:
   - A full-screen looping video (`bg2.mp4`) plays in the background of the landing page.

3. **Social Links**:
   - Links to social media profiles are available on the landing page and are displayed with hover effects.

## **Customization**

- **Change Video**: Replace `bg2.mp4` in `/assets/img/` with any video of your choice, ensuring the file format is compatible with modern browsers.
- **Adjust Music Volume**: Edit the `volume` property in the `musicPlayer.js` file to adjust the background music volume.
- **Add More Music**: Simply place additional `.mp3` files in the `/assets/music/` folder. The PHP script will dynamically list them.
- **Fonts**: You can update the custom fonts by editing the `@font-face` rules in the `landing.css` file or by importing new fonts from Google Fonts.

