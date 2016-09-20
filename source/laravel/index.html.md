---
title: 'Laravel: Getting Started'
project: laravel
---

This guide will walk you through getting a simple Laravel app up and running on Nanobox. This guide was used in the creation of the [nanobox-laravel](https://github.com/nanobox-quickstarts/nanobox-laravel) app found under [nanobox-quickstarts](https://github.com/nanobox-quickstarts) on github.

## Setup Your Project
If you don't have an existing project, create a new project directory.

```bash
mkdir nanobox-laravel
```

Create a `boxfile.yml` at the root of your project that contains the following:

```yaml
code.build:

  # tells nanobox to install php and associated runtimes
  engine: php
  config:

    # sets the php version to 7.0
    runtime: php-7.0

    # specifies the webserver document_root
    document_root: public

    # enables php extensions
    extensions:

      # required by laravel
      - pdo
      - mbstring
      - tokenizer
      - session

      # required by composer
      - phar
      - filter
      - json
      - hash
      - zip
      - dom

# creates a web component in sim and production environments
web.laravel:

  # commands to start PHP-FPM and Apache
  start:
    fpm: /data/sbin/php-fpm -y /data/etc/php/php-fpm.conf -c /data/etc/php/php.ini
    apache: /data/sbin/httpd -DNO_DETACH

  # pipes log output in your app's log-stream
  log_watch:
    apache[access]: /data/var/log/apache/access.log
    apache[error]: /data/var/log/apache/error.log
    php[error]: /data/var/log/php/php_error.log
    php[fpm]: /data/var/log/php/php_fpm.log
```

## Up and Running
With the your boxfile.yml in place, you're ready to create your dev environment. From the project directory run the following commands:

```bash
# build the code
nanobox build

# start the dev environment
nanobox dev start

# add a convenient way to access your app from the browser
nanobox dev dns add laravel.nanobox.dev
```

If you're working with an existing Laravel project, you can skip to [starting PHP-FPM and Apache](#start-php-fpm-amp-apache).

#### Install Laravel
```bash

# console into the dev environment
nanobox dev console

# download the laravel installer
composer global require "laravel/installer"

# install laravel
laravel new
```

#### Start PHP-FPM & Apache
Either `exit` out of your dev console or open a new terminal window and run the following to start PHP-FPM and Apache.

```bash
# run the start commands specified in your boxfile.yml
nanobox dev run
```

### View the App in Your Browser
With your app running, you can access it at `laravel.nanobox.dev:8080` in your browser of choice.

## Now What?
Now that you have Laravel running on Nanobox, what's next? Think about what else your application might need and hopefully the topics below will help you get started with the next steps of your development!

* Connecting to a database
* Adding components
* Preparing for production
* Launching your app
