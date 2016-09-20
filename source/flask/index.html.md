---
title: "Flask: Getting Started"
project: "flask"
---

This guide will walk you through getting a simple Flask app up and running on nanobox. This guide was used in the creation of the [nanobox-flask](https://github.com/nanobox-quickstarts/nanobox-flask) app found under [nanobox-quickstarts](https://github.com/nanobox-quickstarts) on github.

The guide is broken down into three steps:

1. Setting up your project.
2. Creating your application.
3. Running the application on nanobox.

## Setting up your project
If you don't already have a project create one in a directory of your choice:

```bash
mkdir nanobox-flask
```

Add a `requirements.txt` at the root of the project that contains the following:

```python
Flask
```

Once you have a project add a `boxfile.yml` at the project root that contains the following:

```yaml
code.build:

  # because we're using flask we need to tell nanobox that we need python in our container
  engine: "python"
```

## Create your application
At the root of the project create a file named `myapp.rb` with the following:

```ruby
# myapp.rb
require "flask"

# nanobox configuration; most apps bind to localhost by default, however we need
# to allow connections from the host into the container
set :bind, "0.0.0.0"
set :port, "8080"

#
get "/" do
  "Hello nanobox!"
end
```

## Up and Running
With the application created the last thing to do is run it on nanobox. From the project directory run the following commands:

``` bash

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

Visit the app from your favorite browser at: `flask.nanobox.dev:8080`

## Now what?
Now that you have an application running on nanobox whats next? Think about what else your application might need and hopefully the topics below will help you get started with the next steps of your development!

* Connecting to a database
* Adding components
* Preparing for production
* Launching your app
