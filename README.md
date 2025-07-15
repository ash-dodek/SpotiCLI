# 🎧 CLI Music Player (Spotify + YouTube)

Are you a coding geek are tired of constantly switching between spotify and your terminal to change songs? Say no more!

This is a terminal-based music player that lets you play songs right in your terminal!
Its easy to use with a clean UI

# 🚀 How it works?
- Takes input from the user, a song name, just like you search on spotify or youtube
- Searches the given song by name (via Spotify) means that the program picks song name and artist from spotify
- Streams audio by searching the song and artist on YouTube and then playing the music using the `mpv`
- Control playback using arrow keys
- Clean, readable CLI interface


# Important

This project uses the [MPV Player](https://mpv.io/), so before using this, make sure to install it in your system, otherwise it will not work

If you are on Linux/Fedora, do 
```bash
sudo dnf install mpv
```
This will install mpv.
If you are on windows, visit the website of [MPV Player](https://mpv.io/) and after installing make sure to add mpv in path

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
