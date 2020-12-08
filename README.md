# React-Native-App-With-Google-Spreadsheet-API

Creating an application using Google Spreadsheet API as a backend.

## Prerequisite

- HTML And CSS.
- JavaScript and EcmaScript6.
- ReactNative (We are using Expo in this application).
- ReactNativePaper (This is a react native library)

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

### Now we are moving towaras creating a react native app

First of all we are using expo so we must assure we have already expo installed if you don't have you can install it through this.

Command: `npm install --global expo-cli`

Now we need to create an app through expo.

Command: `expo init "app name"`

After creating an app I just created a folder App and nothing and in that folder I am going to create all the components.

![](pictures/folder.png)

Now we need to create 3 compoents Header, FetchData and the last Data where we are going to show data which are fetching.

Now inside an App folder I just created these components.

![](pictures/app-folder.png)

Now we need to install react native paper this is a react native library for material design.

Command: `npm install react-native-paper`

Now after installing this we need to create Header Component.

```
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

export default function Header() {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content style={styles.container} title="Google Sheet API" />
      <StatusBar />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "rgba(137,232,207,100)",
  },
});
```

Well I import StatusBar first what it does it always change your mobile header with respect to the color of our app header. AppBar will allow us to create header without putting much efforts. AppBar.Header is a header you can give any color which you want and in AppBar.Content there is an attribute title in which you can provide a header title.

in order to see the out we need to call this component in our App.js file which is outside the App folder and it's the root file also.

```
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

we need to remove all the code inside App function and just need to to call Header Component.

```
import React from "react";
import { StyleSheet } from "react-native";
import Header from "./App/Header";

export default function App() {
  return (
    <Header />
  );
}
```

Our Header look like this.

![](pictures/header.jpeg)

Now we need to fetch our API which we created before in the FetchData Component.

```
const DataAPI = async () => {
  try {
    let data = await fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1NaJ7GjCME0PaYCAbt3ct10Cl6bSUOlz6XpMS7ASdUQM/values/sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyAMoO3NijVmRDKFdtkfUjIDBWgw831k0PQ"
    );
    let { values } = await data.json();
    let [, ...Data] = values.map((data) => data);
    return Data;
  } catch {
    console.log("Error");
  }
};
export default DataAPI;
```

So here is our FetchData Component and what I did in that just fetch our API and after fetching I just destructure it because its inside an object value and after destructuring I just again destructure it but this time I am destructuring an array and leaving the 0 index value because I don't need it it's all about headings and now mapping all the values in it and returning the Data because I need to map again because the API is an array of array so now we need to create Data Component and than we just need to call the data and render it into the UI.

```
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, ActivityIndicator } from "react-native";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import FetchData from "./FetchData";

export default function Data() {
  const [value, setValue] = useState();
  useEffect(() => {
    let data = async () => {
      setValue(await FetchData());
    };
    data();
  }, []);
  if (!value) {
    return (
      <ActivityIndicator
        size="large"
        animating={true}
        color="rgba(137,232,207,100)"
      />
    );
  }
  return (
    <ScrollView>
      {value.map((files, index) => (
        <Card key={index} style={styles.container}>
          <Card.Title
            title={!files[1] ? "Not Provided" : files[1]}
            left={() => <Ionicons name="md-person" size={50} color="#fff" />}
          />
          <Card.Content style={styles.content}>
            <Text style={styles.title}>S.No:</Text>
            <Text style={styles.paragraph}>
              {!files[0] ? "Not Given" : files[0]}
            </Text>
          </Card.Content>
          <Card.Content style={styles.content}>
            <Text style={styles.title}>Class:</Text>
            <Text style={styles.paragraph}>
              {!files[3] ? "Not Provided" : files[2]}
            </Text>
          </Card.Content>
          <Card.Content style={styles.content}>
            <Text style={styles.title}>Subject:</Text>
            <Text style={styles.paragraph}>
              {!files[4] ? "Not Provided" : files[3]}
            </Text>
          </Card.Content>
          <Card.Content style={styles.content}>
            <Text style={styles.title}>Grade:</Text>
            <Text style={styles.paragraph}>
              {!files[2] ? "Not Provided" : files[4]}
            </Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderWidth: 4,
    borderRadius: 20,
    backgroundColor: "rgba(137,232,207,100)",
    borderColor: "rgba(137,232,207,100)",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
    flexWrap: "wrap",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 15,
  },
  paragraph: {
    fontSize: 18,
  },
});
```

Now it's our final component and what I did in this component is just call our API and use React Native Paper to create Card. I use useState to create an state where I can store the values which we are getting from API and after I call useEffect because we need the data wheneven the UI first render and I also use ActivityIndicator when even the data is not coming from API so this will show a loader because of the if statement and after I just map over the state in which we are getting the data because we are getting an array and then I just put that data in Card which I imported from react native paper and I did some styling and that's it.

Now we just need to call our Data Component into our App.js file

```
import React from "react";
import { StyleSheet } from "react-native";
import Data from "./App/Data";
import Header from "./App/Header";

export default function App() {
  return (
    <>
      <Header />
      <Data />
    </>
  );
}
```

Now our App.js file look like this.

Here you can see the App.

![](pictures/app.jpeg)

Now we need to create an APK file.

So for that we just need to first create an expo account.

https://expo.io/

Go to this website and create an account and login.

After Successfully creating your account you just need to type this command in your project terminal.

`expo build:android`

It will ask to select some answer you just need to follow that and it will take some type to create your APK file.

Now all done. :)

Repository Link: https://github.com/EhsanShakil/React-Native-App-With-Google-Spreadsheet-API/

APK URL: https://expo.io/@ehsanshakil/projects/react-native-with-google-spreadsheet-api
