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
    desc: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is training a detachment of Top Gun graduates.",
    rating: 8.3,
    category: 'Action',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Spider-Man No Way Home': {
    img: 'Spider-Man No Way Home.jpg',
    desc: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds are released.",
    rating: 8.2,
    category: 'Action',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Dune': {
    img: 'Dune.jpg',
    desc: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset: the desert planet Arrakis.',
    rating: 8.0,
    category: 'Sci-Fi',
    cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Zendaya'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Everything Everywhere All at Once': {
    img: 'Everything Everywhere All at Once.jpg',
    desc: 'A woman navigates bureaucracy, politics, family, and the multiverse to save existence.',
    rating: 8.0,
    category: 'Sci-Fi',
    cast: ['Michelle Yeoh', 'Stephanie Hsu', 'Ke Huy Quan'],
    trailer: 'trailers/Everything Everywhere All At Once _ Official Trailer HD _ A24 1080p.mp4'
  },
  'The Batman': {
    img: 'The Batman.jpg',
    desc: 'When the Riddler begins murdering key political figures in Gotham, Batman is on the case.',
    rating: 7.8,
    category: 'Action',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
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
    cast: ['Tom Cruise', 'Simon Pegg', 'Ving Rhames'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Bullet Train': {
    img: 'Bullet Train.jpg',
    desc: 'Five assassins aboard a Japanese bullet train find their missions have overlapping objectives.',
    rating: 7.3,
    category: 'Action',
    cast: ['Brad Pitt', 'Sandra Bullock', 'Joey King'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'The Gray Man': {
    img: 'The Gray Man.jpg',
    desc: 'CIA operative Court Gentry must outrun assassins sent by his former employer.',
    rating: 6.5,
    category: 'Action',
    cast: ['Ryan Gosling', 'Chris Evans', 'Ana de Armas'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Black Panther Wakanda Forever': {
    img: 'Black Panther Wakanda Forever.jpg',
    desc: 'The people of Wakanda fight to protect their nation from intervening world powers.',
    rating: 6.7,
    category: 'Action',
    cast: ['Letitia Wright', 'Angela Bassett', 'Lupita Nyong\\'o'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Furiosa A Mad Max Saga': {
    img: 'Furiosa A Mad Max Saga.jpg',
    desc: 'The origin story of renegade warrior Furiosa before her encounter with Mad Max.',
    rating: 8.0,
    category: 'Action',
    cast: ['Anya Taylor-Joy', 'Chris Hemsworth'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Superbad': {
    img: 'Superbad.jpg',
    desc: 'Two co-dependent high school seniors are forced to deal with separation anxiety.',
    rating: 7.6,
    category: 'Comedy',
    cast: ['Jonah Hill', 'Michael Cera', 'Christopher Mintz-Plasse'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'The Hangover': {
    img: 'The Hangover.jpg',
    desc: 'Three groomsmen lose their about-to-be-wed bachelor bridegroom in Las Vegas.',
    rating: 7.7,
    category: 'Comedy',
    cast: ['Bradley Cooper', 'Ed Helms', 'Zach Galifianakis'],
    trailer: 'trailers/The Hangover - Trailer 1080P.mp4'
  },
  'Step Brothers': {
    img: 'Step Brothers.jpg',
    desc: 'Two spoiled men become stepbrothers and must learn to get along.',
    rating: 6.9,
    category: 'Comedy',
    cast: ['Will Ferrell', 'John C. Reilly'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Pineapple Express': {
    img: 'Pineapple Express.jpg',
    desc: 'A stoner and his dealer are forced to go on the run from the cops and a drug lord.',
    rating: 6.9,
    category: 'Comedy',
    cast: ['Seth Rogen', 'James Franco'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Knocked Up': {
    img: 'Knocked Up.jpg',
    desc: 'A one-night stand results in an unexpected pregnancy for a slacker and a career woman.',
    rating: 6.9,
    category: 'Comedy',
    cast: ['Seth Rogen', 'Katherine Heigl'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'This Is the End': {
    img: 'This Is the End.jpg',
    desc: 'Six LA celebrities are stuck together in a bunker during the apocalypse.',
    rating: 6.6,
    category: 'Comedy',
    cast: ['Seth Rogen', 'James Franco', 'Craig Robinson'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'The Godfather': {
    img: 'The Godfather.jpg',
    desc: 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.',
    rating: 9.2,
    category: 'Crime',
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Schindler\'s List': {
    img: "Schindler's List.jpg",
    desc: 'Oskar Schindler saves Jews from the Nazis by employing them in his factories.',
    rating: 9.0,
    category: 'Drama',
    cast: ['Liam Neeson', 'Ben Kingsley', 'Ralph Fiennes'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Parasite': {
    img: 'Parasite.jpg',
    desc: 'Greed and class discrimination threaten the newly formed symbiotic relationship.',
    rating: 8.5,
    category: 'Thriller',
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Fight Club': {
    img: 'Fight Club.jpg',
    desc: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club.',
    rating: 8.8,
    category: 'Drama',
    cast: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'The Shawshank Redemption': {
    img: 'The Shawshank Redemption.jpg',
    desc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption.',
    rating: 9.3,
    category: 'Drama',
    cast: ['Tim Robbins', 'Morgan Freeman'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Forrest Gump': {
    img: 'Forrest Gump.jpg',
    desc: 'The history of the US from the 1950s to the \'70s unfolds from the perspective of an Alabama man.',
    rating: 8.8,
    category: 'Drama',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'The Boys': {
    img: 'The Boys.jpg',
    desc: 'A group of vigilantes set out to take down corrupt superheroes.',
    rating: 8.7,
    category: 'Action',
    cast: ['Karl Urban', 'Jack Quaid', 'Antony Starr'],
    trailer: 'trailers/The Boys - Final Season Teaser Trailer _ Prime Video 720p.mp4'
  },
  'Reacher': {
    img: 'Reacher.jpg',
    desc: 'Jack Reacher roams the country investigating suspicious crimes.',
    rating: 8.0,
    category: 'Action',
    cast: ['Alan Ritchson'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Hunters': {
    img: 'Hunters.jpg',
    desc: 'In 1977 New York, a group of Nazi hunters uncovers a vast Nazi conspiracy.',
    rating: 7.2,
    category: 'Drama',
    cast: ['Logan Lerman', 'Al Pacino'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Upload': {
    img: 'Upload.jpg',
    desc: 'In 2033, people upload their minds to a virtual afterlife.',
    rating: 7.9,
    category: 'Sci-Fi',
    cast: ['Robbie Amell', 'Andy Allo'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'Homecoming': {
    img: 'Homecoming.jpg',
    desc: 'Heidi works at a facility helping soldiers transition to civilian life.',
    rating: 7.5,
    category: 'Thriller',
    cast: ['Julia Roberts', 'Stephan James'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  },
  'The Lord of the Rings The Rings of Power': {
    img: 'The Lord of the Rings The Rings of Power.jpg',
    desc: "Epic drama set thousands of years before the events of J.R.R. Tolkien's The Hobbit.",
    rating: 7.0,
    category: 'Fantasy',
    cast: ['Morfydd Clark', 'Robert Aramayo', 'Charlie Vickers'],
    trailer: 'trailers/1  Paramount Movies 720P.mp4'
  }
};

