# rescue_nepal
Opensource project for relief efforts in Nepal earthquake

In order for this to work like an actual apps on emulator or testing device, we need to install the following packages.

Install Dependencies, make sure you install all the dependencies needed to run this project. In your working directory, run:

npm install

Install Cordova

To install Cordova, make sure you have Node.js installed, then run

<strong>$ sudo npm install -g cordova</strong><br/>
Drop sudo from the above command if running on Windows.

Install Ionic

To install Ionic, simply run:

<strong>$ sudo npm install -g ionic</strong><br/>
Configure iOS and Android platforms

Now, we need to tell ionic that we want to enable the iOS and Android platforms.

Run the following commands in the working directory:

ionic platform ios
ionic platform android
These will create the packages needed to emulate the app on your emulator or testing devices (iOS and Android).

Test it out

Just to make sure the project setup works, try building and running the projects:

<strong>ionic build ios</strong><br/>
<strong>ionic emulate ios</strong><br/>
Substitute ios for android to build for Android instead.

View it in your browser

If you want to view the app in your regular browser, you can use the following command:

<strong>ionic serve</strong>
Documentation

For more detailed instructions on Ionic, you may find the guide here: All About Ionic

For more detailed instructions on Tracksuit, you may find the guide here: DT Tracksuit
