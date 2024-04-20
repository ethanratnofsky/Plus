# Plus
A Chromium browser extension that adds various functionality to the user's browsing experience. Features are added at the developer's discretion.
The goal of this project is to implement a variety of simple, lightweight features or extended functionality to other Chromium browser extensions.

## Features
- [x] **Dynamic Orientation Adapter for Teleparty**: Automatically adjusts the orientation of video players and the Teleparty chat box based on the user's browser window size.
    - [x] Hulu
    - [ ] Netflix
    - [ ] YouTube
- [x] **Dark Mode**: Adds a darker color scheme to the following websites which do not natively support dark mode:
    - [x] Pinterest
    - [ ] Dribbble
    - [ ] Google Calendar
    - [ ] Medium
    - ...

## Installation
1. Run `npm install` to install the project's dependencies.
2. Run `npm run build` to build the extension.
3. Open a Chromium-based browser (Chrome, Brave, etc.).
4. Navigate to the browser's respective extension page (chrome://extensions/, brave://extensions/, etc.).
5. Enable developer mode.
6. Pack the extension by clicking "Pack extension" and selecting the extension's `dist` directory.
7. Load the extension by clicking "Load unpacked" and selecting the extension's `dist` directory.

## Roadmap
- [ ] Add a configuration UI to allow users to enable/disable features.
