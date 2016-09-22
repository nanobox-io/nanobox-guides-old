---
title: 'Middleman: Getting Started'
project: middleman
---

This guide will walk you through getting a simple Middleman app up and running with Nanobox. This guide was used to create the [nanobox-middleman](https://github.com/nanobox-quickstarts/nanobox-middleman) app found under [nanobox-quickstarts](https://github.com/nanobox-quickstarts) on Github.

## Setup Your Middleman App
If you don't already have a Middleman project, create an empty directory for your project and add a `boxfile.yml`. If you have an existing project, add a `boxfile.yml` in the root of your project. It should contain the following:

```yaml
code.build:
  # tells nanobox to use the middleman engine, which provides
  # a ruby runtime and middleman build tools
  engine: middleman
```

## Up and Running
With your boxfile.yml in place , you're ready to get Middleman up and running in your dev environment.

```bash
# build your code without running a middleman build (compile)
nanobox build --skip-compile

# start your dev environment
nanobox dev start

# add a convenient way to access your app from the browser
nanobox dev dns add middleman.nanobox.dev

# console into your dev environment
nanobox dev console
```

Once you're consoled in, if you don't have an existing Middleman project, you'll need to create one. If working with an existing codebase, you can [start the Middleman server](#start-middleman-server).

### Install Middleman & Create a New Project
```bash
# install the middleman gem
# (--no-ri will skip installing docs for each gem, unless you want them)
gem install middleman --no-ri

# init a new middleman project
middleman init
```

### Start Middleman Server
```bash
bundle exec middleman server
```

You can access your middleman site at `middleman.nanobox.dev:4567`.

## Now What?
Now that you have Middleman running in Nanobox, what's next? Hopefully the topics below will help you get started with the next steps of your development!

- Using Live-Reload
- Deploying Middleman
- Middleman Engine Config Options
