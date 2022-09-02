# framework
A workflow framework for creating, testing and building code for a website or web app. 

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)

## General Info
This project was initially developed to help with writing code, building apps, and testiing those apps. During the process of learning website and web app development, the background processes needed to create a template for a project, spin up a server, and run the app were found to be a bit tedious and repetitive. So, in order to focus more on the writing of code for the apps, this project was created to automate those processes. As a nice side effect, quite a lot was learned about the underlying technologies involved in creating web apps and what goes on behind the scenes to get the content on the screen.
## Technologies Used
Some of the development technologies used to create the project include:
* Browser-sync - version: 2.27.7
* Gulp - version: 4.0.2
* Sass - version: 1.43.4
* Gulp-cli - version: 2.3.0
* And, of course, JavaScript, with all the amazing ES6 features.
## Features
All of the features that are included in this project help automate and allow the developer to focus on writing the code for the app, including:
* Spin up a development server that watches HTML, CSS, and JavaScript development files for updates and immediately updates the screen with the changes.
* Similary, a user can spin up a developer server for the purpose of viewing served content, which is not watched for changes.
* Transpile Sass code to CSS.
* Build a production version of the website or web app so as to be transferred to a production server.
## Setup
Setting up the project involves initializing the template files of a basic web app being scaffolded and made ready to be run on the development server. This project requires node and npm to be installed. Also, gulp-cli needs to be installed in order to instantiate the gulp tasks directly. Otherwise, a script to run the necessary gulp task should be added to the package.json file. So, for best practices, start by installing gulp-cli globally.
```
npm install -g gulp-cli
```
Next, install the dependencies needed for the project through npm
```
cp -r framework <project-identifier>
cd <project-identifier>
npm install
```
(where <project-identifier> is the name of the project to be developed). Finally, to complete the project setup, initialize the project.
```
gulp init
```
The template files are then copied to the /src folder in place so that the project can be run and/or watched for changes on the development server.
## Usage
For the implementations of the features listed above, there are a number of use cases provided by this project:
* As for the default feature of the framework, we can spin up a development server, where any changes made to the code are updated to the screen.
```
gulp
```
* Similary, a server that can be used for the purposes of viewing the project on the screen and present it for testing purposes, perhaps, can also be instantiated.
```
gulp start
```
* The Scss code for the project can be transpiled, which copies the transpiled css code to the /css folder in a file under the same name.
```
gulp sass
```
* A production build of the app can be created so that the project will be made ready for installation to a production server.
```
gulp build
```
* A listing of the above use cases can be displayed to the screen, in case the user forgets any of the above.
```
gulp help
```
## Project Status
This project is currently in progress in that it will updated at some point in the future. Either, to update the code to work with updates to the underlying Gulpjs or Browser-sync codebase, or to add features that reflect the current workflow used in web app development.
## Room for Improvement
As described in the Project Status section, in the future, features may be added to update the codebase of the project. The following are some of those features:
* Linting for CSS and JavaScript helps to write code more efficiently, since some of the issues that the user may come across would more likely be found earlier at some point during development.
* Minification can help keep large CSS and JavaScript file sizes down and help with larger projects working more smoothly.
* Other areas may be found to improve the project depending on how the workflow of web development may change in the future.
## Acknowledgements
This project is based on youtube tutorials watched while learning web development. One example, in particular, is a tutorial from codercoder, which can be found [here](https://www.youtube.com/watch?v=q0E1hbcj-NI). However, those videos included code based on older versions of Gulpjs. This project was built by following the Gulpjs documentation and requirements needs from development workflow at that time.
## Contact
Feel free to contact me @michaelrjamesjr on twitter or on github @micrjames or check out my blog at michaelrjames.hashnode.dev
