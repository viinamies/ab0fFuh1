// Add as many playlists and songs as you like.
// Files are relative to index.html. Spaces in filenames are allowed.
// Example: file: "assets/music/my song.mp3"
window.MUSIC_LIBRARY = [
  {
    id: "chill", name: "bangers(ferrari only)", description: "Relax and unwind", color: "#3b82a0",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS03sCJdgFYPtnkVpAk26XgPrlzateWDtAyEfIqkDewVQ&s", // optional: "assets/covers/chill.jpg"
    songs: [
      { title: "Drake Passionfruit", artist: "Drake", file: "assets/music/Passionfruit - Drake.mp3", cover: "assets/covers/images (2).jpg" },
      { title: "Second Chill Song", artist: "Your Artist", file: "assets/music/chill-2.mp3", cover: "" }
    ]
  },
  {
    id: "gaming", name: "Suonensisästä", description: "Nistiräppiä", color: "#7855ba",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcK2uy1HosKnGmj3NHOy_vtOCDHkszoJbfhKISpSRcg&s=10",
    songs: [
      { title: "SMC LÄHIÖROTAT - Liukuhihna", artist: "SMC LÄHIÖROTAT", file: "assets/music/SMC LÄHIÖROTAT - Liukuhihna feat. Rohtori Laine, Paula 07 - datatraveller.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIdbWNtNdt0wGEOv8bXGIPd4MRFSAEetiYuy6wozBWg&s=10" },
      { title: "Game Track Two", artist: "Your Artist", file: "assets/music/game-2.mp3", cover: "" }
    ]
  },
  {
    id: "BassBoostedOnly", name: "Bass Boosted | Ferrari", description: "Your top tracks", color: "#b65b83",
    cover: "",
    songs: [
      { title: "Favorite Song", artist: "Your Artist", file: "assets/music/favorite.mp3", cover: "" }
    ]
  }
];
