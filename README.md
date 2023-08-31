## IMPORTANT: This project is now discontinued, as it is almost impossible to work with the ErgastAPI given on how old it is. I have decided to create my own API for the FIA Racing Series (F1, F2, F3).

# Formula-Simplified

I noticed that the Ergast Client was just difficult to use given its age. Its structure isn't the best either, so I developed something that would make it easier! Formula-Simplified is a  wrapper of the Ergast API for Node.js powered by TypeScript. 

Formula-Simplified has its own website, which shows how all of the endpoints are used, and also its own API service, which aims to make it easier to grab data from if using node is not an option.

### How to build this on your system

You will need to have these things installed on your system for this to fully work:

- node `16.6` or greater
- npm `7.0` or higher
- At least `200MB` of RAM **FREE**
- At least `800MB` of free HDD space

Not nessacary but nice things to have:

- Text/Program editor like Visual Studio/Code, WebStorm, Atom, Subline Text, Vim, NeoVim etc.

First thing that will needed to be done is to clone the repository, which can be achieved by doing

```bash
git clone https"//github.com/ultimatehecker/Formula-One-Wrapper
```

In the root directory, download all of the packages using `npm i`, and then your pretty much ready to go. Please keep in mind this is not setup with a WebSocket, so all this does is verifies that all the data being fetched can be done without returning and runtime/compliling errors.

Now to get the website to run, you will need to go into the /router directory (a rewrite using monorepo/turborepo is currently beng considered once I learn the technology).

Now that you are in the router (website root folder), you will again need to install all of the dependencies by doing `npm i`, after that it is the basic next scripts.

```bash
npm run build
```

```bash
npm run dev || npm run start
```
