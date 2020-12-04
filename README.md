# React-Native-With-Google-Spreadsheet-API

Creating an application using Google Spreadsheet API as a backend.

## Prerequisite

- HTML And CSS.
- JavaScript and EcmaScript6.
- ReactNative (We are using Expo in this application).

## Lets Get Started

In order to use Google Spreadsheet API first we need to create an spreadsheet file so you can see below picture its my spreadsheet file I am going to use in this project.

![](pictures/google-spreadsheet.png)

After creating your google spreadsheet file we need to make it public this file so click on the "Share" button you can see in the above picture on the right hand side.

After clicking share just click "Change to anyone with the link"

![](pictures/share.png)

Now in order to create API we need to go to google and type google console.

![](pictures/google-console.png)

After that go to this website and click on create new project.

![](pictures/create-project.png)

Provide any name which you want and than click create.

![](pictures/project-name.png)

After successfully creating your project click on library you can see on the left side in the below picture.

![](pictures/library.png)

And then search for "google spreadsheet" click on the the result and enable it.

![](pictures/spreadsheet-api.png)

![](pictures/enable.png)

After Enable it you will be redirect to a page and you can see create credential button click on it.

![](pictures/create-credentials.png)

You will see this screen just don't do any thing and click credentials on the left hand side again.

![](pictures/credentials.png)

You will see this screen now click on create credential and than click on API Key.

![](pictures/create-credentials2.png)

Copy this key and paste it on your notepad or anywhere you want.

![](pictures/api-key.png)

Now we need to go back to our google spreadsheet which we create before and copy the url in my case the url is

https://docs.google.com/spreadsheets/d/1NaJ7GjCME0PaYCAbt3ct10Cl6bSUOlz6XpMS7ASdUQM/

We need to change this url in order to create an API

https://sheets.googleapis.com/v4/spreadsheets/{Sheet-ID}/values/{Sheet-Name}?valueRenderOption=FORMATTED_VALUE&key={API-Key}

So the above url is the API url just we need to put Sheet-ID(it is the last hash key in the spread sheet url '1NaJ7GjCME0PaYCAbt3ct10Cl6bSUOlz6XpMS7ASdUQM' this one), Sheet-Name(remember that sheet name is the name which is shown on the below side by default it is "Sheet1") and API-Key which we created.

Now my API is this

https://sheets.googleapis.com/v4/spreadsheets/1NaJ7GjCME0PaYCAbt3ct10Cl6bSUOlz6XpMS7ASdUQM/values/sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyAMoO3NijVmRDKFdtkfUjIDBWgw831k0PQ

Here you can see we are getting data in the form of JSON object and successfully created google spread sheet API.

![](pictures/API.png)

