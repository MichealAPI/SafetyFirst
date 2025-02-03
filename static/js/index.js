document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('podcasts-container');

    podcasts.forEach(podcast => {
        const card = document.createElement('div');
        card.className = 'podcast';
        card.innerHTML = `
      <div class="content">
        <div class="card-background">
          <img src="${podcast.image}" alt="${podcast.title}">
        </div>
        <div class="text">
          <div class="title">
            <h1 class="phantom-bold m-0">${podcast.title}</h1>
          </div>
          <div class="description">
            <p class="phantom-bold m-0">${podcast.episode}</p>
          </div>
        </div>
        <div class="next-arrow"></div>
      </div>
    `;
        card.onclick = () => window.location.href = `player.html?id=${podcast.id}`;
        container.appendChild(card);
    });
});