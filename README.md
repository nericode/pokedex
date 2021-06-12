# Hermes

- Android Edit `your android/app/build.gradle`

```
project.ext.react = [
entryFile: "index.js",

-     enableHermes: false  // clean and rebuild if changing
+     enableHermes: true  // clean and rebuild if changing

  ]
```

cd android && ./gradlew clean && cd ..

- iOS Edit `your ios/Podfile`

```
  :hermes_enabled => true
```

# Generating the release APK

cd android && ./gradlew bundleRelease && cd ..

# Testing the release build of your app

npx react-native run-android --variant=release

# Generating the release iOS

npx react-native run-ios --configuration Release
or
npx react-native run-ios --device --configuration Release

# How to test?, execute this commands

Test all project

npm test

Test all project excluding API

npm test -- --testPathIgnorePatterns PokemonService
