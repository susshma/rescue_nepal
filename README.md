# Rescue Nepal
============
Git clone this repo to your local machine in the folder where you normally keep
the projects.

Go to "rescue_nepal" folder which you just cloned and follow the steps below.

## Installation

In order for this to work like an actual apps on emulator or testing device, we
need to install the following packages.

### Install Dependencies

Make sure you install all the dependencies needed to run this project.
In your working directory, run:

`npm install`


### Install Cordova

To install Cordova, make sure you have Node.js installed, then run

```
$ sudo npm install -g cordova
```

Drop sudo from the above command if running on Windows.

### Install Ionic

To install Ionic, simply run:

```
$ sudo npm install -g ionic
```

### Configure iOS and Android platforms

Now, we need to tell ionic that we want to enable the iOS and Android platforms.

Run the following commands in the working directory:

```
ionic platform ios
```
```
ionic platform android
```

These will create the packages needed to emulate the app on your emulator or
testing devices (iOS and Android).

### Test it out
Just to make sure the project setup works, try building and running the projects:

```
ionic build ios
```
```
ionic emulate ios
```
Substitute ios for android to build for Android instead.

### View it in your browser

If you want to view the app in your regular browser, you can use the following
command:

```
ionic serve
```

## Documentation
For more detailed instructions on Ionic, you may find the guide here:
[All About Ionic](http://ionicframework.com/docs/guide/preface.html)
