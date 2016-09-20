---
title: "Sinatra: Getting Started"
project: "sinatra"
---

This guide will walk you through getting a simple Sinatra app up and running on nanobox. This guide was used in the creation of the [nanobox-sinatra](https://github.com/nanobox-quickstarts/nanobox-sinatra) app found under [nanobox-quickstarts](https://github.com/nanobox-quickstarts) on github.

The guide is broken down into three steps:

1. Setting up your project.
2. Create your application.
3. Run the application on nanobox.

## Setting up your project
If you already have a project you'd like to use on nanobox simply <a href="#adding-a-boxfile-yml">add a boxfile.yml</a> and continue with this guide, otherwise you'll need to follow the next steps to create a new project.

#### Creating a project
Decide where you want your project to live and create a folder there

```bash
# create your project
mkdir nanobox-sinatra
```

Create a `Gemfile` at the root of the project that contains the following:

```ruby
source "https://rubygems.org"

#
gem "sinatra"
```

#### Adding a boxfile.yml
Create a `boxfile.yml` at the root of your project that contains the following:

```yaml
code.build:

  # because we're using sinatra we need to tell nanobox that we need ruby in our container
  engine: "ruby"
```

## Create your application
At the root of the project create a file named `myapp.rb` with the following:

```ruby
# myapp.rb
require "sinatra"

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
nanobox dev dns add sinatra.nanobox.dev

# console into the dev environment
nanobox dev console

# run the app
bundle exec ruby myapp.rb
```

Visit the app from your favorite browser at: `sinatra.nanobox.dev:8080`

## Now what?
Now that you have an application running on nanobox whats next? Think about what else your application might need and hopefully the topics below will help you get started with the next steps of your development!

* Connecting to a database
* Adding components
* Preparing for production
* Launching your app
