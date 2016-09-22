---
title: 'Symfony: Getting Started'
project: symfony
---

This guide will walk you through getting a simple Symfony app up and running with Nanobox. This guide was used to create the [nanobox-symfony](https://github.com/nanobox-quickstarts/nanobox-symfony) app found under [nanobox-quickstarts](https://github.com/nanobox-quickstarts) on Github.

## Setup Your Symfony Project
If you don't already have a Symfony codebase, ...

### Add a boxfile.yml
In the root directory of your WordPress project, create a `boxfile.yml`. The [boxfile.yml](https://docs.nanobox.io/app-config/boxfile/) is a yaml config file used to specify the components and configuration need for you app. For a base Symfony install, the boxfile.yml should contain the following:

```yaml
code.build:
  engine: php
  config:
    runtime: php-7.0
    webserver: builtin
    extensions:
      # required by symfony installer
      - zlib
      - ctype
      - iconv
      - session
      - tokenizer
      - simplesml
      # required by composer
      - phar
      - filter
      - json
      - hash
      - zip
      - dom

web.symfony:
  start: start-php
  log_watch:
    php[access]: /data/var/log/php/access.log
    php[error]: /data/var/log/php/php_error.log
```

## Install Symfony
```bash
nanobox build --skip-compile

nanobox dev console

sudo curl -LsS https://symfony.com/installer -o /usr/local/bin/symfony

sudo chmod a+x /usr/local/bin/symfony

symfony new tmp-app

mv -v tmp-app/* .

rm -rf tmp-app
```

## Up and Running
With your boxfile.yml in place , you're ready to get Symfony up and running in your dev environment.


```bash
# build the code
nanobox build

# start the dev environment and deploy your build
nanobox dev deploy

# add a convenient way to access your app from the browser
nanobox dev dns add symfony.nanobox.dev

# start PHP-FPM and Apache
nanobox dev run
```

You can visit your running Symfony app at `symfony.nanobox.dev:8080`.

## Now What?
Now that you have Symfony running in Nanobox, what's next? Hopefully the topics below will help you get started with the next steps of your development!

- Connecting to a database
- Adding components
- Preparing for production
- Launching your app
