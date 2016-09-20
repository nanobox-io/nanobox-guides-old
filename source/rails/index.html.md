---
title: "Rails: Getting Started"
project: "rails"
---

This guide will walk you through getting a simple Rails app up and running on nanobox. This guide was used in the creation of the [nanobox-rails](https://github.com/nanobox-quickstarts/nanobox-rails) app found under [nanobox-quickstarts](https://github.com/nanobox-quickstarts) on github.

The guide is broken down into three steps:

1. Create your project.
2. Create your application.
3. Run the application on nanobox.

## Setup your project
Decide where you want your project to live and create a folder there

```bash
# create your project
mkdir nanobox-rails
```

Create a `boxfile.yml` at the root of your project that contains the following:

```yaml
code.build:

  # because we're using rails we need to tell nanobox that we need ruby in our container
  engine: "ruby"
```

## Create your application
Part of what makes nanobox so useful is you don't have to have rails installed on your local machine to utilize it. We're going to have you create a development environment in which you will generate your rails application.

First we need to get a development environment running:

```bash
# build the code
nanobox build --skip-compile

# start the dev environment
nanobox dev start

# console into the dev environment
nanobox dev console

# bundle install to get rails into the environment
gem install rails

# generate our new rails application
rails new nanobox-rails
```

## Up and Running
With the application created there are a few modifications we need to make before we can run it.

To allow host access to the container we need to tell the application to bind to all available IP's (0.0.0.0) and we want to listen on port 8080. To do this we need to add the following code to the applications `config/boot.rb` file:

```ruby
# nanobox configuration; most apps bind to localhost by default, however we need
# to allow connections from the host into the container
require 'rails/commands/server'
module Rails
  class Server
    alias :_default_options :default_options
    def default_options
      _default_options.merge!(Host:'0.0.0.0', Port:8080)
    end
  end
end
```

With that in place, lets start our application and check it out! From the project root run the following commands:

``` bash

# add a convenient way to access your app from the browser
nanobox dev dns add rails.nanobox.dev

# console into the dev environment
nanobox dev console

# run the app
bundle exec rails s
```

Visit the app from your favorite browser at: `rails.nanobox.dev:8080`

## Now what?
Now that you have an application running on nanobox whats next? Think about what else your application might need and hopefully the topics below will help you get started with the next steps of your development!

* Connecting to a database
* Adding components
* Preparing for production
* Launching your app
