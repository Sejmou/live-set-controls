# Live Set Controls
In this repo, I want to create an application that allows me to manage several aspect of my Song Setlist, stored in an Ableton Live Set, from a dedicated desktop app. Contrary to Ableton Live, it should be focused mainly on displaying information about the setlist, current song, and available sounds. Furthermore, it should make it easy to practice a song by jumping to a specific section of the song, or by jumping to the next song in the setlist.

Feature Wishlist:

- [ ] Display and jump through songs in the Setlist
- [ ] Display and jump through sections of the current song
- [ ] Show available guitar presets for the current song
- [ ] Allow switching between guitar presets
- [ ] Play/Pause/Stop the current song
- [ ] Loop sections of a song
- [ ] Record song
- [ ] Control set with a MIDI controller: mainly playback, switching between presets, songs, and sections

## Implementation
I intend to build a WebSocket server that communicates with Ableton Live via AbletonJS and sends any state updates to a desktop app built with Tauri (using SvelteKit as the frontend). The desktop app shall also be able to communicate with the WebSocket server to send commands to Ableton Live (for controlling playback, jumping to specific songs or sections etc.).

## Developer Notes
### Setup
Make sure pnpm is installed. If it is, run `pnpm install` to install all dependencies.

### Development
To start the WebSocket server in development mode, cd into `server` and run `pnpm dev`.

To start the desktop app in development mode, cd into `desktop-app` and run `pnpm tauri dev`.

## TODOs (implementation/code style etc.)
- [ ] Figure out how to make API files importable from server. Currently I use a hack that copies the api folder into the server's src folder, which is not elegant lol