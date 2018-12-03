# 2nd_proj_todaysssm

iOS | Android

## Table of contents
- [Setup](#setup)
- [Usage](#usage)
- [Trouble Shoots](#trouble-shoots)
- [Debug tips](#debug-tips)

## Setup 

### Quick Setup

1. In your project folder, clone repository into your local drive `git clone https://github.com/sueminee/2nd_proj_todaysssm.git`
2. Move inside the 2nd_proj_todaysssm folder `cd 2nd_proj_todaysssm`
3. Change git branch master into Dev `git checkout Dev`
4. Install node_modules `npm install` or `npm i`
5. Link react native modules `react-native link`
6. Inside the src directory, create environment folder.
7. Inside environemnt folder, create `API_KEY.json`, `mockMission.json` and `mockDeliveries.json` file. 
8. Inside `API_KEY.json` file, copy and paste your google map api key wrapped by double quotes.
9. Inside `mockMission.json` `mockDeliveries.json` and  file, copy and paste your mock data.


## Usage

### Ios

#### With Actual Device

Using Xcode
1. Inside your 2nd_proj_todaysssm folder go to ➜ `ios` ➜ open `tsr.xcodeproj` if you don't have Xcode yet, 
[Please download Xcode](https://developer.apple.com/xcode/)
2. Connect your device to computer and select it, then run using keyboard shortcut `command + r`

Using Command Line
1. Inside your 2nd_proj_todaysssm folder type command line `react-native run-ios` or `npm run ios`

#### Without Actual Device

Using Xcode
1. Inside your 2nd_proj_todaysssm folder go to ➜ `ios` ➜ open `tsr.xcodeproj` if you don't have Xcode yet, 
[Please download Xcode](https://developer.apple.com/xcode/)
2. Choose virtual device, and run using keyboard shortcut `command + r`

Using Command Line
1. Inside your 2nd_proj_todaysssm folder type command line `react-native run-ios` or `npm run ios`


### Android

### NOTE: You must install Android Studio to run this project. Before run command, you will have to open Android Studio project, and start virtual device or connect device with your computer

#### With Acutal Device

1. Open Android Studio, choose `Open an existing Android Studio Project` in the 2nd_proj_todaysssm directory ➜ open `android` folder. 
If you don't have if you didn't install yet, install it. [Download Android Studio](https://developer.android.com/studio/)
2. Double click your virtual device if you don't have one, create your own virtual device.
3. Inside your 2nd_proj_todaysssm folder type command line `react-native run-android` or `npm run android`


#### Without Actual Device

1. Open Android Studio, choose `Open an existing Android Studio Project` in the 2nd_proj_todaysssm directory ➜ open `android` folder. 
If you don't have if you didn't install yet, install it. [Download Android Studio](https://developer.android.com/studio/)
2. Inside Android Studio, go to ➜ `tools` ➜ `avd manager`
3. Double click your virtual device if you don't have one, create your own virtual device.
4. Set library folder `PATH="$PATH:/Users/YOUR_USER_NAME/Library/Android/sdk/platform-tools"` 
5. Inside your 2nd_proj_todaysssm folder type command line `react-native run-android` or `npm run android`


## Trouble-Shoots

### Ios

1. If xcode build failed and it says `you must signin apple developer account before run this project` choose tsr project in the left top corner ➜ `tsr` ➜ `General` ➜ `Signing` ➜ `Team` and choose your development account or create a new one.
2. If xcode build failed and it says `Failed to create provisioning profile.` choose tsr project in the left top corner ➜ `tsr` ➜ `General` ➜ `Identity` ➜ `Build Identifier` and try other name mostly it's `org.reactjs.native.example.tsr` or `org.reactjs.native.example.tsr1` or `org.reactjs.native.example.tsr2` or `org.reactjs.native.example.tsr3`
3. If this error repeats after you signin, close xcode and reopen the xcode project.



### Android

1. If Error message is `amd command not found` try using command `PATH="$PATH:/Users/YOUR_USER_NAME/Library/Android/sdk/platform-tools"`
2. If build failed please check your android simulator is running.

### Both

1. Try upgrade your react native version `react-native upgrade`
2. Delete ios, android, node_modules folder inside project file by draging into trash folder or using terminal app
```sh
rm -rf ios
rm -rf android
rm -rf node_modules
```
3. Link your project `react-native link`
4. Install node packages `npm install` or `npm i`
5. Clear npm cache `npm clear cache` or `npm clear cache --force`



## Debug-tips

### Ios
To show debug dialog on IOS, press `cmd + d` on virtual device, or shake your phone on actual device.

### Android
To show debug dialog on ANDROID, press `cmd + m` on virtual device.
To reload javascript bundle, double click `r`.