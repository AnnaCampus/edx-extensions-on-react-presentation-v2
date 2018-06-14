# React based presentation on Open edX extension options based on Spectacle Boilerplate also avalable here (http://equable-cellar.surge.sh/#/0)

## Contents

- [Intro](#intro)
- [Reference](#reference)
- [Getting Started](#getting-started)
- [Build & Deployment](#build-deployment)

## Intro
   This presentation explains differents methods for extension of Open edX platform that for Open edX developer's community.
   It is based on the Open Source React Platform Spectacle by FormidableLabs which is available at    [https://github.com/FormidableLabs/spectacle] .
   
## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.md](https://github.com/FormidableLabs/spectacle/blob/master/README.md).

## Getting Started

After downloading the boilerplate, your first order of business is to open a terminal and run 
```bash
yarn
```
or 
```bash
npm install
```
if you're about that life.

Next, run 
```bash
rm -R .git
```
to remove the existing version control.

Then, to start up the local server, run
```bash
npm start
```

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll.

## Build & Deployment on surge

Building the dist version of the project is as easy as running
```bash
npm run build
```

If you want to deploy the slideshow to surge, run 
```bash
npm run deploy
```
