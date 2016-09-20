---
title: Getting Started
project: expressjs
---

## Install Nanobox
If you haven't already, you'll need to install Nanobox. Installations instructions are available in the [Installation doc](https://docs.nanobox.io/getting-started/install-nanobox/) or you can just download the Nanobox installers from the [Nanobox downloads](https://nanobox.io/download/) page.

## Create App Directory & Add a boxfile.yml
Create a new directory for your app, cd into the new directory and create a file named `boxfile.yml`. The boxfile.yml specifies how Nanobox should build and configure your app's environment.

```bash
$ mkdir my-app
$ cd my-app
$ touch boxfile.yml
```

### Specify the Node.js Engine
In your `code.build` section of your boxfile.yml, specify your engine as `nodejs`. Engines build and configure your code runtime on Nanobox. The Node.js engine will install node and npm in your Nanobox environment(s).

```yaml
code.build:
  engine: nodejs
```

## Setup Your Dev Environment
With your boxfile.yml in place, you're ready setup your dev environment.

### Create a Build
You'll first need to create a deployable build package that includes the runtimes necessary to run your app. With this being an brand new project, pass the `--skip-compile` flag to keep the Node.js engine from running its compile script (`npm install`) during the build, giving you a bare development environment.

*If you're working with an existing app and want packages to be loaded in the build, you can omit the* `--skip-compile` *flag.*


```bash
$ nanobox build --skip-compile
```

### Start, Deploy, & Console In
With the build ready, you can start your local dev environment, deploy the build into it, then console in. The Nanobox CLI has functionality in place that will detect prerequisite commands, so running the following will do all this for you.

```bash
$ nanobox dev console
```

## Install Express
Now that you're consoled into your your local dev environment, you can install Express. Use npm to init a new app. The "entry point" simply needs to be the file that will start your app.

```bash
$ npm init
$ entry point (app.js)
```

Add the `express` package and save it to your `package.json` with the `--save` flag.

```bash
$ npm install express --save
```

### Add Your app.js

Create your entry point file.
Modify your app to listen on `0.0.0.0:8080`.

```js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
```

### Start Your App & Craft Some Code
