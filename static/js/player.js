document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const podcastId = parseInt(urlParams.get('id'));
    const podcast = podcasts.find(p => p.id === podcastId);

    if (!podcast) {
        alert('Podcast not found!');
        window.location.href = 'index.html';
        return;
    }

    // Update page content
    document.querySelector('.podcast-icon img').src = podcast.image;
    document.querySelector('.podcast-text .title p').textContent = podcast.title;
    document.querySelector('.podcast-text .subtitle p').textContent = podcast.description;

    // Audio player logic
    const audio = new Audio(podcast.audio);
    const playButton = document.querySelector('.play img');
    let isPlaying = false;

    playButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playButton.src = 'static/image/play.png';
        } else {
            audio.play();
            playButton.src = 'static/image/pause.png';
        }
        isPlaying = !isPlaying;
    });

    audio.addEventListener('ended', () => {
        isPlaying = false;
        playButton.src = 'static/image/play.png';
    });
});