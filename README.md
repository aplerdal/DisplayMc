# DisplayMC
DisplayMC is an open source fork of BDEngine to work better for animation and continue general development

## Running
You need to place a copy of the minecraft assets folder in the 1.20 folder. You can find these by extracting the jar from 1.20.x in your `%appdata%/.minecraft/versions/` folder and copying the assets folder from the extracted folder into `public/1.20`. When you do this the folder structure should look like
```
public
  1.20
    assets
      minecraft
        (etc)
  font
  images   
```
Then you can choose one of the following options to run it.
### Dev Preview
To develop
```sh
npm install
npm dev
```
### Building
To build for a static site:
```sh
npm install
npm run build
```
Then you can preview it with
```sh
npm run preview
```
The output will be in `/dist/`