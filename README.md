# i18n-googlesheets-angular

The objective of this project is to use google spread sheets as source for a i18n mechanism using angular. The project consists of 2 elements: 

* A library, which contains a service.ts capable of establishing the connection between the sheet and any component that imports it
* A source used to test the service with a component.ts and component.html.

To setup the source for the i18n follow the commands bellow.

## Getting Started

Firstly it will be listed how to install the whole project in order to test it. This can be done with the github repository.

Secondly it will be listed how to install the library in order to use it in any angular project. This will be done with NPM.

If you only wish to use it, jump to the "Using the Service", but only after reading the prerequisites.

### Prerequisites

This project was built with Angular 7.
For both testing and using the service, we will need NodeJS, NPM and Angular CLI.
Download NodeJS by going to https://nodejs.org/en/download/ . Doing so will also set NPM up.
Next, install Angular CLI by running

```
npm install -g @angular/cli
```

You are now ready to test this project.

To use the service you will need your own Google SpreadSheet and Google API Key. 
Note you can also use your own Google SpreadSheet and Google API Key to test the project.

For the Google SpreadSheet just create one with the following structure.
https://docs.google.com/spreadsheets/d/1bgY07BXAQLcDKBfeBnl0oLuLlx6kTme3qbAwx6R7IC4/edit?usp=sharing

* Multiple sheets for multiple languages, so it's possible for the service to change the values according with the language
* Pair key value, where the key (left) will be substituted by the value (right) with the help of the service

As for the Google API Key, go to https://console.developers.google.com/ . 
Create a new project and add the Google Sheets API to libraries.
Next go to Credentials and create a New Credential. This will be your Google API Key.

You are now completely set.

## Testing

To test the service, first clone the repository

```
git clone https://github.com/MiguelFigueiredo97/i18n-googlesheets-angular.git
```

After that, you want to go to the "i18n-googlesheets-angular" directory and run "npm install" to get everything up and running. 

```
npm install
```

Now you can run it by doing

```
ng serve
```

Open your browser on http://localhost:4200/

The project is running with default language "en-EN" and default keys.
You can change the language to "pt-PT" by writing it in "Language" and pressing "Go!"

If you wish to test it with your own API Key and Google SpreadSheet just add them and try it out. 
The API Key is your Google API Key, generated in the "Prerequesites", and the Google SpreadSheet is the String between the '/' in the URL of the sheet.
For example, in the default sheet:

https://docs.google.com/spreadsheets/d/1bgY07BXAQLcDKBfeBnl0oLuLlx6kTme3qbAwx6R7IC4/edit?usp=sharing

the value wanted is "1bgY07BXAQLcDKBfeBnl0oLuLlx6kTme3qbAwx6R7IC4".

Do be careful though!
The HTML component reads only the keys "helloworld", "language" and "version". Any other keys will not appear. Also to change the page that is being read go to "Language" and write the name of the new page.

## Using the Service

To use the service, it's only needed the library which has the service and the module. 

Open the console and head to the project directory. Run

```
npm install --save-dev i18n-googlesheets-angular
```

You should now have the "i18n-googlesheets-angular" inside the "node-modules".
You can now use the "i18n-googlesheets-angular.service.ts" functions by importing "i18n-googlesheets-angular".

## License 

This project is licensed under the MIT License.

## Acknowledgments

This project was developed with support from the user Menda0, who developed the same service for AngularJS.
This project was based in his. Check https://github.com/Menda0/google-spreadsheets-i18n-angular for his project.
Thank you!
