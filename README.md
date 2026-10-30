# Wavebox — local music player

1. Put your audio files in `assets/music/`.
2. (Optional) Put cover images in `assets/covers/`.
3. Open `music.js` and update the playlist entries to match your filenames. Add as many playlist objects and song objects as you like.
4. Open `index.html` in a browser. If your browser restricts local media, run a local server in this directory: `python -m http.server 8000`, then visit `http://localhost:8000`.

Example song:
```js
{ title: "My Song", artist: "Me", file: "assets/music/my-song.mp3", cover: "assets/covers/my-cover.jpg" }
```

Example playlist:
```js
{ id: "roadtrip", name: "Road Trip", description: "Driving songs", color: "#3979a3", cover: "", songs: [
  { title: "Track 1", artist: "Artist", file: "assets/music/track1.mp3" },
  { title: "Track 2", artist: "Artist", file: "assets/music/track2.mp3" }
] }
```

Repeat button cycles between off, repeat playlist, and repeat one. Shuffle is independent. The example song files are placeholders: add your own actual audio files to hear music.
