---
title: 'Django: Getting Started'
project: django
---

# Django: Getting Started

1. Create a `boxfile.yml` at the root of your project with the following:
  ```yaml
    code.build:
      engine: "ruby"
  ```

2. Make Sinatra accessible outside the VM:
  ```ruby
    set :bind, "0.0.0.0"
    set :port, 8080
  ```

3. Build your environment:
  ```bash
    $ nanobox build --skip-compile
  ```

4. Run your app:
  ```bash
    $ nanobox dev console

    # from inside nanobox console
    /app $ bundle install

    # start your app (this will vary depending on how your app is setup)
    /app $ ruby my_app.rb
  ```

5.  Visit your app:

  You can optionally add a dns route to your app for easy access. If you don't do
  this you can find the IP for your app as part of the MOTD when you first enter
  the nanobox console
  ```bash
  $ nanobox dev dns add my-app.nanobox.dev
  ```

  Depending on how you've set it up, from a browser you can visit either:
  `my-app.nanobox.dev:8080`
  `IP:8080`

### Now what?

* Connecting to a database
* Adding components
* Preparing for production
* Launching your app
