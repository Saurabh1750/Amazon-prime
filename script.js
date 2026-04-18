const HERO_SLIDES = [
  { img: 'Godfather banner.webp', title: 'The Godfather', description: "An offer you can't refuse - the epic saga of power and family." },
  { img: 'Oppenheimer banner.jpg', title: 'Oppenheimer', description: 'A gripping account of the scientist behind the bomb.' },
  { img: 'Barbie banner.jpg', title: 'Barbie', description: 'A bold, visionary reboot of a cinematic icon.' },
  { img: 'The boys banner.jpg', title: 'The Boys', description: 'The edge-of-your-seat saga of heroes gone rogue.' },
  { img: 'John Wick Chapter 4.jpg', title: 'John Wick Chapter 4', description: 'Keanu Reeves returns in the explosive fourth chapter.' },
  { img: 'The Hangover.jpg', title: 'The Hangover', description: 'What happens in Vegas stays in Vegas... or does it?' }
];

const MOVIES_DATA = {
  'Oppenheimer': {
    img: 'Oppenheimer.jpg',
    desc: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. Directed by Christopher Nolan.',
    rating: 8.4,
    category: 'Drama',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Robert Downey Jr.', 'Matt Damon'],
    trailer: 'trailers/Oppenheimer _ New Trailer 720P.mp4'
  },
  'Top Gun Maverick': {
    img: 'Top Gun Maverick.jpg',
    desc: 'After more than thirty years of service as one of the Navy\'s top aviators, Pete Mitchell is training a detachment of Top Gun graduates.',
    rating: 8.3,
    category: 'Action',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Spider-Man No Way Home': {
    img: 'Spider-Man No Way Home.jpg',
    desc: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds are released.',
    rating: 8.2,
    category: 'Action',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Dune': {
    img: 'Dune.jpg',
    desc: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset: the desert planet Arrakis.',
    rating: 8.0,
    category: 'Sci-Fi',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Everything Everywhere All at Once': {
    img: 'Everything Everywhere All at Once.jpg',
    desc: 'A woman navigates bureaucracy, politics, family, and the multiverse to save existence.',
    rating: 8.0,
    category: 'Sci-Fi',
    trailer: 'trailers/Everything Everywhere All At Once _ Official Trailer HD _ A24 1080p.mp4'
  },
  'The Batman': {
    img: 'The Batman.jpg',
    desc: 'When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is on the case.',
    rating: 7.8,
    category: 'Action',
    trailer: 'trailers/THE BATMAN – Main Trailer 720p.mp4'
  },
  'John Wick Chapter 4': {
    img: 'John Wick Chapter 4.jpg',
    desc: 'John Wick uncovers a path to defeating the High Table. But before he can earn his freedom, Wick must face his most lethal foes yet.',
    rating: 8.2,
    category: 'Action',
    cast: ['Keanu Reeves', 'Donnie Yen', 'Bill Skarsgård', 'Laurence Fishburne'],
    trailer: 'trailers/John Wick_ Chapter 4 (2023 Movie) Official Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård 1080p.mp4'
  },
  'Mission Impossible - Dead Reckoning': {
    img: 'Mission Impossible - Dead Reckoning.jpg',
    desc: 'Ethan Hunt and his IMF team embark on their most dangerous mission yet.',
    rating: 7.9,
    category: 'Action',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Bullet Train': {
    img: 'Bullet Train.jpg',
    desc: 'Five assassins aboard a Japanese bullet train find their missions have overlapping objectives.',
    rating: 7.3,
    category: 'Action',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'The Gray Man': {
    img: 'The Gray Man.jpg',
    desc: 'CIA operative Court Gentry must outrun assassins sent by his former employer.',
    rating: 6.5,
    category: 'Action',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Black Panther Wakanda Forever': {
    img: 'Black Panther Wakanda Forever.jpg',
    desc: 'The people of Wakanda fight to protect their nation from intervening world powers.',
    rating: 6.7,
    category: 'Action',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Furiosa A Mad Max Saga': {
    img: 'Furiosa A Mad Max Saga.jpg',
    desc: 'The origin story of renegade warrior Furiosa before her encounter with Mad Max.',
    rating: 8.0,
    category: 'Action',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Superbad': {
    img: 'Superbad.jpg',
    desc: 'Two co-dependent high school seniors are forced to deal with separation anxiety.',
    rating: 7.6,
    category: 'Comedy',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'The Hangover': {
    img: 'The Hangover.jpg',
    desc: 'Three groomsmen lose their about-to-be-wed bachelor bridegroom in Las Vegas.',
    rating: 7.7,
    category: 'Comedy',
    trailer: 'trailers/The Hangover - Trailer 1080P.mp4'
  },
  'Step Brothers': {
    img: 'Step Brothers.jpg',
    desc: 'Two spoiled men become stepbrothers and must learn to get along.',
    rating: 6.9,
    category: 'Comedy',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Pineapple Express': {
    img: 'Pineapple Express.jpg',
    desc: 'A stoner and his dealer are forced to go on the run from the cops and a drug lord.',
    rating: 6.9,
    category: 'Comedy',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Knocked Up': {
    img: 'Knocked Up.jpg',
    desc: 'A one-night stand results in an unexpected pregnancy for a slacker and a career woman.',
    rating: 6.9,
    category: 'Comedy',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'This Is the End': {
    img: 'This Is the End.jpg',
    desc: 'Six LA celebrities are stuck together in a bunker during the apocalypse.',
    rating: 6.6,
    category: 'Comedy',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'The Godfather': {
    img: 'The Godfather.jpg',
    desc: 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.',
    rating: 9.2,
    category: 'Crime',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Schindler\'s List': {
    img: 'Schindler\'s List.jpg',
    desc: 'Oskar Schindler saves Jews from the Nazis by employing them in his factories.',
    rating: 9.0,
    category: 'Drama',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Parasite': {
    img: 'Parasite.jpg',
    desc: 'Greed and class discrimination threaten the newly formed symbiotic relationship.',
    rating: 8.5,
    category: 'Thriller',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Fight Club': {
    img: 'Fight Club.jpg',
    desc: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club.',
    rating: 8.8,
    category: 'Drama',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'The Shawshank Redemption': {
    img: 'The Shawshank Redemption.jpg',
    desc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption.',
    rating: 9.3,
    category: 'Drama',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Forrest Gump': {
    img: 'Forrest Gump.jpg',
    desc: 'The history of the US from the 1950s to the \'70s unfolds from the perspective of an Alabama man.',
    rating: 8.8,
    category: 'Drama',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'The Boys': {
    img: 'The Boys.jpg',
    desc: 'A group of vigilantes set out to take down corrupt superheroes.',
    rating: 8.7,
    category: 'Action',
    trailer: 'trailers/The Boys - Final Season Teaser Trailer _ Prime Video 720p.mp4'
  },
  'Reacher': {
    img: 'Reacher.jpg',
    desc: 'Jack Reacher roams the country investigating suspicious crimes.',
    rating: 8.0,
    category: 'Action',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Hunters': {
    img: 'Hunters.jpg',
    desc: 'In 1977 New York, a group of Nazi hunters uncovers a vast Nazi conspiracy.',
    rating: 7.2,
    category: 'Drama',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Upload': {
    img: 'Upload.jpg',
    desc: 'In 2033, people upload their minds to a virtual afterlife.',
    rating: 7.9,
    category: 'Sci-Fi',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Homecoming': {
    img: 'Homecoming.jpg',
    desc: 'Heidi works at a facility helping soldiers transition to civilian life.',
    rating: 7.5,
    category: 'Thriller',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'The Lord of the Rings The Rings of Power': {
    img: 'The Lord of the Rings The Rings of Power.jpg',
    desc: 'Epic drama set thousands of years before the events of J.R.R. Tolkien\'s The Hobbit.',
    rating: 7.0,
    category: 'Fantasy',
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  }
};

const MOVIES = {
  trending: [
    { title: 'Oppenheimer', img: 'Oppenheimer.jpg' },
    { title: 'Top Gun Maverick', img: 'Top Gun Maverick.jpg' },
    { title: 'Spider-Man No Way Home', img: 'Spider-Man No Way Home.jpg' },
    { title: 'Dune', img: 'Dune.jpg' },
    { title: 'Everything Everywhere All at Once', img: 'Everything Everywhere All at Once.jpg' },
    { title: 'The Batman', img: 'The Batman.jpg' },{ title: 'John Wick Chapter 4', img: 'John Wick Chapter 4.jpg' },
    { title: 'Mission Impossible - Dead Reckoning', img: 'Mission Impossible - Dead Reckoning.jpg' },
    { title: 'Bullet Train', img: 'Bullet Train.jpg' }
  ],
  action: [
    { title: 'John Wick Chapter 4', img: 'John Wick Chapter 4.jpg' },
    { title: 'Mission Impossible - Dead Reckoning', img: 'Mission Impossible - Dead Reckoning.jpg' },
    { title: 'Bullet Train', img: 'Bullet Train.jpg' },
    { title: 'The Gray Man', img: 'The Gray Man.jpg' },
    { title: 'Black Panther Wakanda Forever', img: 'Black Panther Wakanda Forever.jpg' },
    { title: 'Furiosa A Mad Max Saga', img: 'Furiosa A Mad Max Saga.jpg' },
     { title: 'The Hangover', img: 'The Hangover.jpg' },
    { title: 'Step Brothers', img: 'Step Brothers.jpg' },
    { title: 'Pineapple Express', img: 'Pineapple Express.jpg' }
  ],
  comedy: [
    { title: 'Superbad', img: 'Superbad.jpg' },
    { title: 'The Hangover', img: 'The Hangover.jpg' },
    { title: 'Step Brothers', img: 'Step Brothers.jpg' },
    { title: 'Pineapple Express', img: 'Pineapple Express.jpg' },
    { title: 'Knocked Up', img: 'Knocked Up.jpg' },
    { title: 'This Is the End', img: 'This Is the End.jpg' }, { title: 'Oppenheimer', img: 'Oppenheimer.jpg' },
    { title: 'Top Gun Maverick', img: 'Top Gun Maverick.jpg' },
    { title: 'Spider-Man No Way Home', img: 'Spider-Man No Way Home.jpg' }
  ],
  drama: [
    { title: 'The Godfather', img: 'The Godfather.jpg' },
    { title: 'Schindler\'s List', img: 'Schindler\'s List.jpg' },
    { title: 'Parasite', img: 'Parasite.jpg' },
    { title: 'Fight Club', img: 'Fight Club.jpg' },
    { title: 'The Shawshank Redemption', img: 'The Shawshank Redemption.jpg' },
    { title: 'Forrest Gump', img: 'Forrest Gump.jpg' }, { title: 'The Hangover', img: 'The Hangover.jpg' },
    { title: 'Step Brothers', img: 'Step Brothers.jpg' },
    { title: 'Pineapple Express', img: 'Pineapple Express.jpg' }
  ],
  originals: [
    { title: 'The Boys', img: 'The Boys.jpg' },
    { title: 'Reacher', img: 'Reacher.jpg' },
    { title: 'Hunters', img: 'Hunters.jpg' },
    { title: 'Upload', img: 'Upload.jpg' },
    { title: 'Homecoming', img: 'Homecoming.jpg' },
    { title: 'The Lord of the Rings The Rings of Power', img: 'The Lord of the Rings The Rings of Power.jpg' },
    { title: 'The Godfather', img: 'The Godfather.jpg' },
    { title: 'Schindler\'s List', img: 'Schindler\'s List.jpg' },
    { title: 'Parasite', img: 'Parasite.jpg' }
  ]
};

// TRAILERS merged into MOVIES_DATA.trailer - keeping for compatibility
const TRAILERS = {
  'Barbie': 'trailers/Barbie  Trailer 1080P.mp4',
  'Everything Everywhere All at Once': 'trailers/Everything Everywhere All At Once _ Official Trailer HD _ A24 1080p.mp4',
  'John Wick Chapter 4': 'trailers/John Wick_ Chapter 4 (2023 Movie) Official Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård 1080p.mp4',
  'The Godfather': 'trailers/1  Paramount Movies 720P.mp4',
  'Oppenheimer': 'trailers/Oppenheimer _ New Trailer 720P.mp4',
  'The Batman': 'trailers/THE BATMAN – Main Trailer 720p.mp4',
  'The Boys': 'trailers/The Boys - Final Season Teaser Trailer _ Prime Video 720p.mp4',
  'The Godfather': 'trailers/1  Paramount Movies 720P.mp4',
  'The Hangover': 'trailers/The Hangover - Trailer 1080P.mp4',
  'Top Gun Maverick': 'trailers/1  Paramount Movies 720P.mp4',
  'Spider-Man No Way Home': 'trailers/1  Paramount Movies 720P.mp4',
  'Dune': 'trailers/1  Paramount Movies 720P.mp4',
  'Superbad': 'trailers/1  Paramount Movies 720P.mp4',
  'Step Brothers': 'trailers/1  Paramount Movies 720P.mp4',
  'Pineapple Express': 'trailers/1  Paramount Movies 720P.mp4',
  'Knocked Up': 'trailers/1  Paramount Movies 720P.mp4',
  'This Is the End': 'trailers/1  Paramount Movies 720P.mp4',
  'Schindler\'s List': 'trailers/1  Paramount Movies 720P.mp4',
  'Parasite': 'trailers/1  Paramount Movies 720P.mp4',
  'Fight Club': 'trailers/1  Paramount Movies 720P.mp4',
  'The Shawshank Redemption': 'trailers/1  Paramount Movies 720P.mp4',
  'Forrest Gump': 'trailers/1  Paramount Movies 720P.mp4',
  'Reacher': 'trailers/1  Paramount Movies 720P.mp4',
  'Hunters': 'trailers/1  Paramount Movies 720P.mp4',
  'Upload': 'trailers/1  Paramount Movies 720P.mp4',
  'Homecoming': 'trailers/1  Paramount Movies 720P.mp4',
  'The Lord of the Rings The Rings of Power': 'trailers/1  Paramount Movies 720P.mp4',
  'Mission Impossible - Dead Reckoning': 'trailers/1  Paramount Movies 720P.mp4',
  'Bullet Train': 'trailers/1  Paramount Movies 720P.mp4',
  'The Gray Man': 'trailers/1  Paramount Movies 720P.mp4',
  'Black Panther Wakanda Forever': 'trailers/1  Paramount Movies 720P.mp4',
  'Furiosa A Mad Max Saga': 'trailers/1  Paramount Movies 720P.mp4'
};

const FALLBACK_IMAGE = 'images/placeholder.svg';
const state = {
  watchlist: JSON.parse(localStorage.getItem('primeWatchlist') || '[]'),
  users: JSON.parse(localStorage.getItem('primeStreamUsers') || '[]'),
  currentUser: JSON.parse(localStorage.getItem('primeStreamUser') || 'null'),
  selectedPlan: localStorage.getItem('primeSelectedPlan') || 'Standard'
};

const elements = {
  heroTitle: document.querySelector('.hero-title'),
  heroText: document.querySelector('.hero-copytext'),
  heroSlides: Array.from(document.querySelectorAll('.hero-slide')),
  heroIndicators: document.getElementById('hero-indicators'),
  searchInput: document.getElementById('search-input'),
  searchNotice: document.getElementById('search-notice'),
  authModal: document.getElementById('auth-modal'),
  authForm: document.getElementById('auth-form'),
  authEmail: document.getElementById('auth-email'),
  authPassword: document.getElementById('auth-password'),
  modalHeading: document.getElementById('modal-heading'),
  modalDescription: document.getElementById('modal-description'),
  switchText: document.getElementById('switch-text'),
  switchAuth: document.getElementById('switch-auth'),
  closeAuth: document.getElementById('close-auth'),
  openAuth: document.getElementById('open-auth'),
  openSignup: document.getElementById('open-signup'),
  logoutButton: document.getElementById('logout-button'),
  userBadge: document.getElementById('user-badge'),
  userName: document.getElementById('user-name'),
  currentPlan: document.getElementById('current-plan'),
  planButtons: Array.from(document.querySelectorAll('.plan-button')),
  rowIds: {
    trending: document.getElementById('trending-row'),
    action: document.getElementById('action-row'),
    comedy: document.getElementById('comedy-row'),
    drama: document.getElementById('drama-row'),
    originals: document.getElementById('originals-row'),
    watchlist: document.getElementById('watchlist-row')
  },
  heroWatch: document.getElementById('hero-watch'),
  heroWatchlist: document.getElementById('hero-watchlist'),
  menuToggle: document.getElementById('menu-toggle'),
  navCenter: document.getElementById('nav-center'),
  themeToggle: document.getElementById('theme-toggle')
};

let currentSlide = 0;
let heroInterval = null;
let isLoginMode = true;

function getSafeString(value) {
  return String(value || '').replace(/"/g, '&quot;');
}

function saveState() {
  localStorage.setItem('primeWatchlist', JSON.stringify(state.watchlist));
  localStorage.setItem('primeStreamUsers', JSON.stringify(state.users));
  localStorage.setItem('primeStreamUser', JSON.stringify(state.currentUser));
  localStorage.setItem('primeSelectedPlan', state.selectedPlan);
}

function showToast(type, message) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.getElementById('toast-container').appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function getMovieData(title) {
  return MOVIES_DATA[title] || {
    img: 'placeholder.svg',
    desc: 'Movie details not available.',
    rating: 0,
    category: 'Unknown',
    cast: [],
    trailer: ''
  };
}

function getMovieImagePath(fileName) {
  return `images/${fileName}`;
}

function isInWatchlist(title) {
  return state.watchlist.some((movie) => movie.title === title);
}

function toggleWatchlist(title, img) {
  const existingIndex = state.watchlist.findIndex((item) => item.title === title);
  if (existingIndex >= 0) {
    state.watchlist.splice(existingIndex, 1);
    showToast('info', `${title} removed from Watchlist`);
  } else {
    state.watchlist.unshift({ title, img });
    showToast('success', `${title} added to Watchlist`);
  }
  saveState();
  renderAll();
}

function createMovieCard(movie, options = {}) {
  const inList = isInWatchlist(movie.title);
  const label = options.watchlist ? 'Remove' : inList ? 'Remove' : 'Watchlist';
  const buttonClass = options.watchlist || inList ? 'btn tertiary' : 'btn secondary';
  const buttonText = options.watchlist ? 'Remove' : inList ? 'Remove' : 'Add to Watchlist';

  return `
    <article class="card" data-title="${getSafeString(movie.title)}">
      <img src="${getMovieImagePath(movie.img)}" alt="${getSafeString(movie.title)}" loading="lazy" onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}';" />
      <div class="card-meta">
        <h3 class="card-title">${getSafeString(movie.title)}</h3>
        <div class="card-details">
          <span>HD</span>
          <span>4.7 ★</span>
        </div>
        <div class="card-actions">
          <button class="btn primary play-btn" data-title="${getSafeString(movie.title)}" data-trailer="${TRAILERS[movie.title] || ''}">Watch Trailer</button>
          <button class="${buttonClass} watchlist-btn" data-title="${getSafeString(movie.title)}" data-img="${getSafeString(movie.img)}">${buttonText}</button>
        </div>
      </div>
    </article>
  `;
}

function renderSection(category, query = '') {
  const container = elements.rowIds[category];
  const baseMovies = MOVIES[category];
  let movies = baseMovies.filter((movie) => movie.title.toLowerCase().includes(query));
  if (movies.length === 0) {
    movies = baseMovies;
  }
  // Expand to 20 items for scrolling
  while (movies.length < 20) {
    movies = movies.concat(baseMovies);
  }
  movies = movies.slice(0, 20);
  container.innerHTML = movies.map((movie) => createMovieCard(movie)).join('');
  return movies.length;
}

function renderWatchlist(query = '') {
  const container = elements.rowIds.watchlist;
  const filteredList = state.watchlist.filter((movie) => movie.title.toLowerCase().includes(query));
  if (!filteredList.length) {
    container.innerHTML = `
      <div class="watchlist-empty">
        <p>Your watchlist is empty.</p>
      </div>
    `;
    return 0;
  }
  container.innerHTML = filteredList.map((movie) => createMovieCard(movie, { watchlist: true })).join('');
  return filteredList.length;
}

function renderSearchResults(query) {
  const searchResultsContainer = document.getElementById('search-results');
  const allMovies = Object.keys(MOVIES).flatMap((category) => 
    MOVIES[category].map((movie) => ({ ...movie, category }))
  );

  const filteredMovies = allMovies.filter((movie) => 
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredMovies.length === 0) {
    searchResultsContainer.innerHTML = `
      <div class="section intro" style="padding: var(--space-lg) 0;">
        <div class="container">
          <p class="search-notice">No results found for "${query}". Try different keywords.</p>
        </div>
      </div>
    `;
  } else {
    // Duplicate for scroll effect like rows
    let moviesToRender = [...filteredMovies];
    while (moviesToRender.length < 20) {
      moviesToRender = moviesToRender.concat(filteredMovies);
    }
    moviesToRender = moviesToRender.slice(0, 20);

    searchResultsContainer.innerHTML = `
      <div class="section" style="padding-top: var(--space-lg);">
        <div class="container">
          <div class="section-header">
            <div>
              <p class="section-label">Search Results</p>
              <h2>Found ${filteredMovies.length} ${filteredMovies.length === 1 ? 'result' : 'results'}</h2>
            </div>
          </div>
          <div class="row">
            <div class="row-list" id="search-row">
              ${moviesToRender.map(movie => createMovieCard(movie)).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  searchResultsContainer.classList.remove('hidden');
  document.querySelector('main').classList.add('hidden');
}

function renderAll(query = '') {
  const searchTerm = query.trim().toLowerCase();
  const searchResultsContainer = document.getElementById('search-results');

  if (searchTerm) {
    renderSearchResults(searchTerm);
  } else {
    searchResultsContainer.classList.add('hidden');
    document.querySelector('main').classList.remove('hidden');
    Object.values(elements.rowIds).forEach((row) => row.classList.remove('hidden'));
    renderSection('trending');
    renderSection('action');
    renderSection('comedy');
    renderSection('drama');
    renderSection('originals');
    renderWatchlist();
  }
}

let videoTimeout = null;

function clearHeroVideo() {
  if (videoTimeout) {
    clearTimeout(videoTimeout);
    videoTimeout = null;
  }
  elements.heroSlides.forEach(slide => {
    const video = slide.querySelector('.hero-video');
    if (video) {
      video.pause();
      video.remove();
    }
  });
}

function updateHero() {
  clearHeroVideo(); // Cleanup previous

  elements.heroSlides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
  const activeSlide = HERO_SLIDES[currentSlide];
  elements.heroTitle.textContent = activeSlide.title;
  elements.heroText.textContent = activeSlide.description;
  Array.from(elements.heroIndicators.children).forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });

  // Delayed video load after image shows (2.5s)
  const activeSlideEl = elements.heroSlides[currentSlide];
  const trailer = TRAILERS[activeSlide.title];
  if (trailer) {
    videoTimeout = setTimeout(() => {
      const heroVideo = document.createElement('video');
      heroVideo.className = 'hero-video';
      heroVideo.muted = true;
      heroVideo.loop = true;
      heroVideo.autoplay = true;
      heroVideo.playsInline = true;
      heroVideo.style.position = 'absolute';
      heroVideo.style.inset = '0';
      heroVideo.style.width = '100%';
      heroVideo.style.height = '100%';
      heroVideo.style.objectFit = 'cover';
      heroVideo.style.zIndex = '1';
      activeSlideEl.appendChild(heroVideo);
      heroVideo.src = trailer;
      heroVideo.load();
      heroVideo.addEventListener('loadeddata', () => {
        heroVideo.classList.add('fade-in');
        heroVideo.play().catch(e => console.log('Video play prevented:', e));
      });
    }, 2500);
  }
}


function createHeroIndicators() {
  elements.heroIndicators.innerHTML = HERO_SLIDES.map((_, index) => `<button class="hero-indicator ${index === 0 ? 'active' : ''}" data-slide="${index}" aria-label="Slide ${index + 1}"></button>`).join('');
}

function startHeroTimer() {
  heroInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % HERO_SLIDES.length;
    updateHero();
  }, 10000);
}

function stopHeroTimer() {
  clearInterval(heroInterval);
}

function openAuthModal(mode = 'login') {
  isLoginMode = mode === 'login';
  elements.authModal.classList.add('active');
  elements.authModal.setAttribute('aria-hidden', 'false');
  elements.modalHeading.textContent = isLoginMode ? 'Sign In' : 'Sign Up';
  elements.modalDescription.textContent = isLoginMode ? 'Access your account to save watchlists and manage your plan.' : 'Create your account to keep your watchlist safe.';
  elements.switchText.textContent = isLoginMode ? 'New here?' : 'Already have an account?';
  elements.switchAuth.textContent = isLoginMode ? 'Create an account' : 'Sign in instead';
}

function closeAuthModal() {
  elements.authModal.classList.remove('active');
  elements.authModal.setAttribute('aria-hidden', 'true');
  elements.authForm.reset();
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function updateUserView() {
  if (state.currentUser) {
    elements.userName.textContent = state.currentUser.email.split('@')[0];
    elements.userBadge.hidden = false;
    elements.openAuth.hidden = true;
    elements.openSignup.hidden = true;
  } else {
    elements.userBadge.hidden = true;
    elements.openAuth.hidden = false;
    elements.openSignup.hidden = false;
  }
}

function updatePlanView() {
  elements.currentPlan.textContent = state.selectedPlan;
  elements.planButtons.forEach((button) => {
    const plan = button.dataset.plan;
    const card = button.closest('.plan-card');
    card.classList.toggle('selected', plan === state.selectedPlan);
    button.textContent = plan === state.selectedPlan ? 'Current Plan' : 'Select Plan';
  });
}

function subscribePlan(planName) {
  state.selectedPlan = planName;
  saveState();
  updatePlanView();
  showToast('success', `${planName} plan selected.`);
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const email = elements.authEmail.value.trim();
  const password = elements.authPassword.value.trim();
  if (!validateEmail(email)) {
    showToast('error', 'Enter a valid email address.');
    return;
  }
  if (password.length < 6) {
    showToast('error', 'Password must be at least 6 characters.');
    return;
  }

  const existingUser = state.users.find((user) => user.email === email);

  if (isLoginMode) {
    if (!existingUser || existingUser.password !== password) {
      showToast('error', 'Invalid login credentials.');
      return;
    }
    state.currentUser = { email };
    saveState();
    updateUserView();
    closeAuthModal();
    showToast('success', 'Welcome back!');
  } else {
    if (existingUser) {
      showToast('error', 'An account with that email already exists.');
      return;
    }
    state.users.push({ email, password });
    state.currentUser = { email };
    saveState();
    updateUserView();
    closeAuthModal();
    showToast('success', 'Account created successfully!');
  }
}

function handleCardClick(event) {
  const card = event.target.closest('.card');
  const watchButton = event.target.closest('.watchlist-btn');
  const playButton = event.target.closest('.play-btn');
  
  if (card && !watchButton && !playButton) {
    const title = card.dataset.title;
    localStorage.setItem('currentMovie', title);
    window.location.href = `movie.html?title=${encodeURIComponent(title)}`;
    return;
  }
  
  if (watchButton) {
    const title = watchButton.dataset.title;
    const img = watchButton.dataset.img;
    toggleWatchlist(title, img);
  }
  if (playButton) {
    const title = playButton.dataset.title;
    const trailer = TRAILERS[title] || getMovieData(title).trailer;
    if (trailer) {
      const videoSource = document.getElementById('trailer-source');
      const video = document.getElementById('movie-trailer');
      const modal = document.getElementById('video-modal');
      videoSource.src = trailer;
      video.load();
      video.play().catch(e => console.log('Autoplay prevented:', e));
      modal.classList.remove('hidden');
    } else {
      showToast('info', `Trailer not available for ${title}`);
    }
  }
}

function initScrolling() {
  document.querySelectorAll('.scroll-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      const target = document.getElementById(targetId);
      if (target) {
        const distance = button.classList.contains('left') ? -420 : 420;
        target.scrollBy({ left: distance, behavior: 'smooth' });
      }
    });
  });
}

function initHeroControls() {
  createHeroIndicators();
  updateHero();
  elements.heroPrev = document.getElementById('hero-prev');
  elements.heroNext = document.getElementById('hero-next');
  elements.heroPrev.addEventListener('click', () => {
    currentSlide = currentSlide === 0 ? HERO_SLIDES.length - 1 : currentSlide - 1;
    updateHero();
    stopHeroTimer();
    setTimeout(startHeroTimer, 3000); // Delay restart for video settle
  });
  elements.heroNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % HERO_SLIDES.length;
    updateHero();
    stopHeroTimer();
    setTimeout(startHeroTimer, 3000);
  });
  elements.heroIndicators.addEventListener('click', (event) => {
    const dot = event.target.closest('.hero-indicator');
    if (!dot) return;
    currentSlide = Number(dot.dataset.slide);
    updateHero();
    stopHeroTimer();
    startHeroTimer();
  });
}

function getActiveHero() {
  return HERO_SLIDES[currentSlide];
}

function attachEvents() {
  elements.searchInput.addEventListener('input', () => renderAll(elements.searchInput.value));
  elements.openAuth.addEventListener('click', () => openAuthModal('login'));
  elements.openSignup.addEventListener('click', () => openAuthModal('signup'));
  elements.closeAuth.addEventListener('click', closeAuthModal);
  elements.switchAuth.addEventListener('click', () => openAuthModal(isLoginMode ? 'signup' : 'login'));
  elements.logoutButton.addEventListener('click', () => {
    state.currentUser = null;
    saveState();
    updateUserView();
    showToast('info', 'Signed out successfully.');
  });
  elements.authForm.addEventListener('submit', handleAuthSubmit);
elements.planButtons.forEach((button) => button.addEventListener('click', () => { window.location.href = 'payment.html?plan=' + button.dataset.plan; }));
  elements.heroWatch.addEventListener('click', () => {
    const slide = getActiveHero();
    localStorage.setItem('currentMovie', slide.title);
    window.location.href = `movie.html?title=${encodeURIComponent(slide.title)}`;
  });
  elements.heroWatchlist.addEventListener('click', () => {
    const slide = getActiveHero();
    const movieData = getMovieData(slide.title);
    toggleWatchlist(slide.title, movieData.img);
  });
  elements.menuToggle.addEventListener('click', () => {
    elements.navCenter.classList.toggle('open');
  });
  document.body.addEventListener('click', (event) => {
    if (event.target === elements.authModal) {
      closeAuthModal();
    }
  });
  document.body.addEventListener('click', (event) => {
    if (event.target.closest('.row-list, .watchlist-row, #search-row')) {
      handleCardClick(event);
    }
  });

  // Video modal controls
  const videoModal = document.getElementById('video-modal');
  const closeVideoBtn = document.getElementById('close-video');
  const movieTrailer = document.getElementById('movie-trailer');
  closeVideoBtn.addEventListener('click', () => {
    videoModal.classList.add('hidden');
    movieTrailer.pause();
    movieTrailer.currentTime = 0;
  });
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      videoModal.classList.add('hidden');
      movieTrailer.pause();
      movieTrailer.currentTime = 0;
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) {
      videoModal.classList.add('hidden');
      movieTrailer.pause();
      movieTrailer.currentTime = 0;
    }
  });
}


function init() {
  updateUserView();
  updatePlanView();
  renderAll();
  initScrolling();
  initHeroControls();
  attachEvents();
  // startHeroTimer(); // Disabled for hover-only mode
}


init();

// Theme toggle removed (no button in HTML)
