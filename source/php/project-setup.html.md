---
title: Project Setup
project: php
---

To setup your app, you need a [boxfile.yml](https://docs.nanobox.io/app-config/boxfile/) and to determine what your app needs.

## What Does Your App Need?
Simple enough. What does your app need? Most PHP apps will need a web server and some type of database. On Nanobox, these are referred to as "app components". There are three types of components:

- ***web:***  
  Web components include the PHP runtime environment and have ports exposed to the external network making them publicly accessible.

- ***worker:***  
  Worker components include the PHP runtime environment, but are meant for running background processes and do not connect with the external network.

- ***data:***  
  Data components handle application data. They can range anywhere in function from a database to a job queue.

### Specify Your Components
Components are specified in your boxfile.yml. When specifying a component, you need the component type and a unique identifier (uid):

```yaml
# Pattern
type.uid

# Example
web.site
```

If your app were to need a web server and a MySQL database, your boxfile.yml would include something like the following:

```yaml
web.site:
  start:
    fpm: start-php
    apache: start-apache

data.mysql:
  image: 'mysql'
```

#### Web & Worker Components
Web and worker components each require a `start` config. This is the command used to start the web/worker process.

There are different options for start commands when using the PHP engine. Which ones to use depends on the web server and PHP interpreter you're using. The [Start Commands](../config/start/) guide walks through the different options.

#### Data Components
Data components require an `image` config. Images build and configure your data services. They are essentially Docker images that include scripts unique to Nanobox. You can find all [official Nanobox images on Docker Hub](https://hub.docker.com/r/nanobox/). There are also [guides for each official data service](/#services).

## Use Environment Variables for Service Connections
When using Nanobox, projects are meant to be both portable and secure. In order for your project to be both, you should use environment variables in your data service connections.

When data components are provisioned, we generate unique connection credentials for the service. If the same codebase is used for two separate apps, the database connection credentials will be different for each each app. This encourages the recommended security practices of not hard-coding connection credentials in your codebase.

### Boxfile & Connection Example
The following `boxfile.yml` specifies a php web service with a MySQL database:

```yaml
code.build:
  engine: php

web.site:
  start:
    fpm: start-php
    apache: start-apache

data.db:
  image: mysql
```

The following `config/database.php` uses the [auto-generated environment variables](https://docs.nanobox.io/app-config/environment-variables/#auto-generated-environment-variables) to populate the connection credentials.

```php
<?php

  'mysql' => [
      'driver'   => 'mysql',
      'host'     => $_SERVER('DATA_DB_HOST'),
      'port'     => '3306'
      'database' => $_SERVER('DATA_DB_NAME'),
      'username' => $_SERVER('DATA_DB_USER'),
      'password' => $_SERVER('DATA_DB_PASS'),
    ],

?>
```

By using the environment variables to populate connection credentials, this codebase would work out-of-the-box when deployed to a Nanobox app. It also keeps you have having to commit sensitive information to your codebase. For more information about environment variables, view the [Environment Variables documentation](https://docs.nanobox.io/app-config/environment-variables/).
