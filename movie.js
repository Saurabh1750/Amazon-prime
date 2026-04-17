function getSafeString(value) {
  return String(value || '').replace(/&/g, '&amp;').replace(/</g, '<').replace(/>/g, '>').replace(/"/g, '"');
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast toast-info';
  toast.textContent = message;
  document.getElementById('toast-container').appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

let currentTitle = '';

function toggleWatchlist(title, img) {
  currentTitle = title;
  const watchlist = JSON.parse(localStorage.getItem('primeWatchlist') || '[]');
  const index = watchlist.findIndex(m => m.title === title);
  if (index > -1) {
    watchlist.splice(index, 1);
    const watchlistBtn = document.querySelector('#watchlist-btn');
    watchlistBtn.textContent = 'Add to Watchlist';
    watchlistBtn.className = 'btn secondary';
    showToast(`${title} removed from watchlist`);
  } else {
    watchlist.unshift({ title, img });
    const watchlistBtn = document.querySelector('#watchlist-btn');
    watchlistBtn.textContent = 'Remove from Watchlist';
    watchlistBtn.className = 'btn tertiary';
    showToast(`${title} added to watchlist`);
  }
  localStorage.setItem('primeWatchlist', JSON.stringify(watchlist));
}

function loadMovie() {
  const urlParams = new URLSearchParams(window.location.search);
  const title = decodeURIComponent(urlParams.get('title') || localStorage.getItem('currentMovie') || 'Oppenheimer');
  currentTitle = title;

  const movie = MOVIES_DATA[title] || {
    title,
    img: 'placeholder.svg',
    desc: 'Movie details not available. Go back to home.',
    rating: 0,
    category: 'Unknown',
    cast: [],
    trailer: ''
  };

  const castHtml = movie.cast && movie.cast.length ? movie.cast.map(actor => `<span class="cast-item">${getSafeString(actor)}</span>`).join(' ') : '<span class="cast-item">No cast info</span>';

  const contentHTML = `
    <div class="movie-poster-container">
      <img src="images/${movie.img}" alt="${getSafeString(movie.title)}" class="movie-poster" 
           onerror="this.src='images/placeholder.svg'">
    </div>
    <div class="movie-details">
      <h1>${getSafeString(movie.title)}</h1>
      <div class="rating">⭐ ${movie.rating || 'N/A'}</div>
      <span class="category-badge">${getSafeString(movie.category)}</span>
      <div class="movie-description-section">
        <h2>Description</h2>
        <p class="movie-desc">${getSafeString(movie.desc)}</p>
      </div>
      <div class="cast-section">
        <h3>Cast</h3>
        <div class="cast-list">${castHtml}</div>
      </div>
      <div class="movie-actions">
        <button class="btn primary" id="watch-now">Watch Now</button>
        <button class="btn secondary" id="watchlist-btn" data-img="${movie.img}">Add to Watchlist</button>
        ${movie.trailer ? `<button class="btn tertiary" id="play-trailer">▶ Play Trailer</button>` : ''}
      </div>
    </div>
  `;

  document.getElementById('movie-content').innerHTML = contentHTML;

  document.getElementById('watch-now').onclick = () => showToast(`Now playing ${movie.title}`);
  document.getElementById('watchlist-btn').onclick = () => toggleWatchlist(title, movie.img);

  if (movie.trailer) {
    document.getElementById('play-trailer').onclick = () => {
      document.getElementById('trailer-source').src = movie.trailer;
      document.getElementById('movie-trailer').load();
      document.getElementById('trailer-section').style.display = 'block';
      document.getElementById('trailer-section').scrollIntoView({ behavior: 'smooth' });
    };
  }

  const watchlist = JSON.parse(localStorage.getItem('primeWatchlist') || '[]');
  const watchlistBtn = document.getElementById('watchlist-btn');
  if (watchlist.some(m => m.title === title)) {
    watchlistBtn.textContent = 'Remove from Watchlist';
    watchlistBtn.className = 'btn tertiary';
  }
}

// Load after DOM and scripts ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadMovie);
} else {
  loadMovie();
}
