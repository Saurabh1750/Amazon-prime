Prime Stream (Amazon Prime Video Clone)

A modern movie streaming website inspired by Amazon Prime Video, built using HTML, CSS, and JavaScript.
It includes dynamic movie browsing, search, watchlist, trailers, and movie details pages.
Screenshot:<img width="1319" height="5296" alt="127 0 0 1_5500_index html" src="https://github.com/user-attachments/assets/df521621-4e23-419b-a0d8-39722bb9bb95" />



🚀 Features
🔍 Search Functionality (real-time filtering)
🎬 Movie Categories (Trending, Action, Comedy, Drama, Originals)
❤️ Watchlist System (stored in localStorage)
📺 Movie Details Page
Description
Cast
Rating
Trailer playback
🎥 Trailer Player Modal
🎨 Dark Theme UI (Prime-style)
📱 Responsive Design
💳 Subscription / Plans Page (Fake Payment Flow)
📂 Project Structure
📁 Prime Stream
│── index.html          # Home page
│── movie.html          # Movie details page
│── payment.html        # Subscription page
│── style.css           # Styling
│── script.js           # Main logic
│── images/             # Movie posters
│── trailers/           # Video trailers
⚙️ How to Run
✅ Recommended (Live Server)
Open project in VS Code
Install Live Server Extension
Right-click index.html → Open with Live Server
❌ Don’t use
file://

👉 It causes errors (videos, routing, JS issues)

🧠 How It Works
Movies are stored in a JavaScript object (MOVIES / MOVIES_DATA)
Clicking a movie redirects to:
movie.html?title=MovieName
The details page reads the title using:
new URLSearchParams(window.location.search)
Data is dynamically rendered using innerHTML
🛠️ Tech Stack
HTML5
CSS3
JavaScript (Vanilla JS)
LocalStorage
📌 Future Improvements
🔥 Backend integration (Node.js / Firebase)
👤 User authentication
⭐ Ratings & reviews system
🎬 Full video streaming page
🔎 Advanced filters (genre, year)
🙌 Author

Saurabh Sharma
