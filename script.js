// script.js

const songs = {
    1: { title: 'Aaj Ki Raat', artist: 'Madhubanti Bgchi', file: 'song1.mp3' },
    2: { title: 'Her Eyes', artist: 'Hesham Abdul Wahab', file: 'song2.mp3' },
    3: { title: 'Dippa Dappam', artist: 'Anirudh Ravichander and Anthony Daasan', file: 'song3.mp3' },
    // Add more songs here
};

document.querySelectorAll('.play-song').forEach(button => {
    button.addEventListener('click', () => {
        const songId = button.closest('.song').getAttribute('data-id');
        playSong(songId);
    });
});

function playSong(songId) {
    const song = songs[songId];
    const audioPlayer = document.getElementById('audio-player');
    const currentSong = document.getElementById('current-song');

    // Set the song title and artist
    currentSong.textContent = `${song.title} by ${song.artist}`;
    
    // Set the audio source and play
    audioPlayer.src = song.file;
    audioPlayer.play();
}


