# React - Van Task Manager
A project to familiarize myself with the latest React versions, function based components and hooks.   

## Run in Development Mode
##### Install App Dependencies
$ npm i
##### Start JSON Server (in another terminal, same directory)
$ npm run server
##### Start UI -> Should Launch Browser - Targeting App URL
$ npm start  

## Run Production Build
##### Install App Dependencies
$ npm i
##### Install Static HTTP Server (globally) 
$ npm i -g serve
##### Build Production Images
$ npm run build
##### Start JSON Server (in another terminal)
$ npm run server
##### Start Static App Server (port 8000)
$ serve -s build -p 8000  
##### Should Open Browser at App Address (either way) 
- (OSX) In seperate terminal: $ open http://localhost:8000 
- Open browser & go to: http://localhost:8000