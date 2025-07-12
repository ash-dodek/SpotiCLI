// mpv --no-video --vo=null --ao=alsa --ytdl-format=worstaudio https://www.youtube.com/watch?v=mVq6BQKUdjs
import play from 'play-dl'
import {spawn} from 'child_process'
import chalk from 'chalk'

export async function getUrlByName(name, author) {
    const ytSearchResults = await play.search(name+ " by "+author, {limit:5})
    const song = ytSearchResults[0]

    const videoUrl = song.url
    
    return videoUrl
}

export async function playSong(url) {

    return new Promise((resolve, reject) => { 
        
        const player = spawn('mpv', ['--no-video' ,'--vo=null', '--ao=alsa', '--term-status-msg=${time-pos}/${duration}/${percent-pos}', url], {
            // stdio: 'inherit'
            stdio: ['pipe', 'inherit', 'inherit']
        })
        
        
        process.stdin.setRawMode(true)
        process.stdin.resume()
        process.stdin.pipe(player.stdin)
        
        
        player.on('spawn', (data) => {
            console.log(chalk.greenBright.bold("Playing the song, it will start in a few seconds"))
        })
        player.on('error', (err) => {
            console.error('Failed to stream by mpv ',err.message)
            reject(err)
        })
        
        player.on('exit', (code, signal) => {
            try {
                process.stdin.setRawMode(false);
                process.stdin.unpipe(player.stdin);
                process.stdin.pause();
            } catch (e) {}
            resolve(true)
        })
        
    })
}