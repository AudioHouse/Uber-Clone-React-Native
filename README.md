# Uber-Clone-React-Native
An Uber-Clone iOS Application built with React Native

## Project Setup
This React Native project was bootstrapped with [Expo CLI](https://reactnative.dev/docs/environment-setup).
#### Step 1: Buy a two-thousand dollar MacBook
This application is built to run on *iOS*. You will need to have `Xcode` installed on your Apple Computer.
#### Step 2: Install the Expo CLI
You need Node.js installed on your machine. Then you can use npm or yarn to install Expo CLI
```
npm install -g expo-cli
```
#### Step 3: Configure Environment Vars
You will need a *Google API Key* that has access to the `Directions`, `Places`, and `Distance Matrix` APIs. 

Create a `.env` file at the root of the project, and then add in the following: 
```
GOOGLE_MAPS_APIKEY=<Your-Google-API-Key>
```
#### Step 4: Install NPM Dependencies
Simply `cd` into the project directory and run `npm install` 

## Running the Project
You can use either `npm start` or `expo start` to start the metro bundler. Lastly, you can press `i` to launch the application on the iPhone Simulator

## Screenshots
#### HomeScreen with GooglePlaces AutoComplete
<img src="/docs/screenshots/Home-Screen-1.png" alt="HomeScreen1" width="300"/> <img src="/docs/screenshots/Home-Screen-2.png" alt="HomeScreen2" width="300"/>

#### MapScreen with Price Calculations
<img src="/docs/screenshots/Map-Screen-1.png" alt="MapScreen1" width="300"/> <img src="/docs/screenshots/Map-Screen-2.png" alt="MapScreen2" width="300"/>
