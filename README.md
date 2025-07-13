# 🎧 CLI Music Player (Spotify + YouTube)

A terminal-based music player that lets you search for songs using the Spotify API for searching about the song, and then streams them via YouTube by using the play-dl library to stream the audio via `mpv`  

#### Uses NodeJS, Inquirer, Chalk, and Play-DL.

---


# Important

This project uses the [MPV Player](https://mpv.io/), so before using this, make sure to install it in your system, other it will not work

## 🚀 Features

- Searches songs by name (via Spotify) means that the player picks song name and artist from spotify
- Streams audio from searching the song and artist on YouTube using the `mpv`
- Control playback using arrow keys
- Clean, readable CLI interface

---

## Using the player:

```bash
git clone https://github.com/ash-dodek/CLI-Spotify.git
cd CLI-Spotify
npm install
```
Then run
```bash
node index
