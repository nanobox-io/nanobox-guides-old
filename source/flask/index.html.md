---
title: "Flask: Getting Started"
project: "flask"
---

This guide will walk you through getting a simple Flask app up and running on nanobox. This guide was used to create the [nanobox-flask](https://github.com/nanobox-quickstarts/nanobox-flask) app found under [nanobox-quickstarts](https://github.com/nanobox-quickstarts) on github.

The guide is broken down into three steps:

1. Project Setup
2. Application Configuration
3. Up and Running

## Project Setup
If you already have a project you'd like to use on nanobox simply [add a boxfile.yml](#add-a-boxfile-yml) and continue with this guide, otherwise you'll need to follow the next steps to create a new project.

#### Create a project
Decide where you want your project to live and create a folder there

```bash
mkdir nanobox-flask
```

Add a `requirements.txt` at the root of the project that contains the following:

```python
Flask
```

#### Add a boxfile.yml
Create a `boxfile.yml` at the root of your project that contains the following:

```yaml
code.build:

  # because we're using flask we need to tell nanobox that we need python in our container
  engine: "python"
```

## Application Config
If you already have an application you'd like to run on nanobox you'll simply need to [make it accessible to the host](#make-it-accessible), otherwise follow the steps below to create an application.

#### Create an Application
At the root of the project create a file named `hello.py` with the following:

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello nanobox!"

if __name__ == "__main__":
    app.run()
```

#### Make it Accessible
Most frameworks by default will bind to localhost, however we need to allow connections from the host into your container. To do this we need to tell flask to bind to all available IP's

```python
app.run(host='0.0.0.0', port=8080)
```

## Up and Running
With the application configured the last thing to do is run it on nanobox. From the project directory run the following commands:

```bash
# build the code
nanobox build

# start the dev environment
nanobox dev start

# add a convenient way to access your app from the browser
nanobox dev dns add flask.nanobox.dev

# console into the dev environment
nanobox dev console

# run the app
python hello.py
```

Visit the app from your favorite browser at `flask.nanobox.dev:8080`

## Now what?
Now that you have an application running on nanobox whats next? Think about what else your application might need and hopefully the topics below will help you get started with the next steps of your development!

* Connecting to a database
* Adding components
* Preparing for production
* Launching your app
