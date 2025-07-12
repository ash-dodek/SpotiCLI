import { trackSelector } from "./src/cli/Print.js"
import { getUrlByName, playSong } from "./src/services/AudioStreamer.js";
import { authorizeSpotify, searchTracks } from "./src/services/Spotify.js"
import inquirer from 'inquirer';

console.clear()
console.log("\nWelcome to the CLI Based music player!\nFollow the instructions for more!\n\n\n")

await authorizeSpotify()

while (true) {

    const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'songName',
      message: 'Search by song name:'
    }
  ])

  await searchAndPlay(answer)
  
}

async function searchAndPlay(answer) {

  console.log('You entered:', answer.songName)

  let searchResult = await searchTracks(answer.songName)
  searchResult = searchResult.body.tracks.items


  const selectedTrack = await trackSelector(searchResult)
  const videoUrl = await getUrlByName(selectedTrack.name, selectedTrack.artists[0].name)

  await playSong(videoUrl)
}