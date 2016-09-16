---
title: WordPress boxfile.yml Explained
project: wordpress
---

The boxfile.yml provided in this guides provides the necessities to get a basic WordPress install up and running. Each of the config options are explained below.

```yaml
code.build:
  engine: php
  config:
    runtime: php-7.0
    extensions:
      - gd
      - mysqli
      - curl
      - zlib
    apache_modules:
      - deflate

web.wp:
  start:
    fpm: /data/sbin/php-fpm -y /data/etc/php/php-fpm.conf -c /data/etc/php/php.ini
    apache: /data/sbin/httpd -DNO_DETACH
  log_watch:
    apache[access]: /data/var/log/apache/access.log
    apache[error]: /data/var/log/apache/error.log
    php[error]: /data/var/log/php/php_error.log
    php[fpm]: /data/var/log/php/php_fpm.log
  network_dirs:
    data.storage:
      - wp-content/uploads/

data.db:
  image: nanobox/mysql

data.storage:
  image: nanobox/unfs
```

## code.build
The code.build section of your boxfile.yml allows you to configure how your code and its runtime environment are built and prepared for deploy.

### engine
The `engine` specified in your `code.build` tells Nanobox which [engine](https://docs.nanobox.io/engines/) to use when building your app. Engines define the runtime/language to use and come with different configuration options. WordPress requires the `php` engine.

```yaml
code.build:
  engine: php
```

### runtime
The `runtime` defines which version of PHP to use. WordPress doesn't officially support running on PHP 7+, but PHP 7.0 does offer significant performance improvements over previous versions of PHP. If you're migrating an existing WordPress app to Nanobox, it may be better to stick with an earlier version of PHP. A list of available php version is available in the [PHP Settings guide](/php/config/php-settings/#runtime).

```yaml
code.build:
  config:
    runtime: php-7.0
```

### extensions
The Nanobox PHP engine is designed to keep environments light, installing only the extensions necessary to run your app. The only extensions necessary for WordPress to function are the following:

| Extension | Purpose                                                       |
|:----------|:--------------------------------------------------------------|
| `mysqli`  | The driver used to connect to MySQL                           |
| `gd`      | Used to resize uploaded images and generate thumbnails        |
| `curl`    | Used to send requests to remote servers                       |
| `zlib`    | Handles gzip'd files, used to install/update plugins & themes |

```yaml
code.build:
  config:
    extensions:
      - gd
      - mysqli
      - curl
      - zlib
```

### apache_modules
The Nanobox PHP engine takes to the same approach to Apache modules as it does to PHP extensions - it keeps things light by only installing necessary modules. There are a handful of base Apache modules that are enabled by default, but you do need to enable the `deflate` module in order for WordPress to function properly.

```yaml
code.build:
  config:
    apache_modules:
      - deflate
```

## Web Component
Your web component will run WordPress and make it accessible over the public network. By including a web component in your boxfile.yml, Nanobox will automatically create it using settings specified in your [`code.build > config`](#code-build) as well as settings unique to your web component.

Each component in your boxfile.yml has an ID. The ID tells Nanobox what type of component to create as well as a unique identifier. In this case, we'll use `web.wp`. `web` tells Nanobox to create a web component and `wp` is the unique identifier.

### start
Each web component requires one or more start commands. These tell Nanobox what commands to run to start the web server and php interpreter. By default, the PHP engine uses Apache and PHP-FPM. The following commands start each of those services.

```yaml
web.wp:
  start:
    fpm: /data/sbin/php-fpm -y /data/etc/php/php-fpm.conf -c /data/etc/php/php.ini
    apache: /data/sbin/httpd -DNO_DETACH
```

Other web servers and php interpreters are available and require different start commands. More information about these is provided in the following PHP guides:

[PHP Web Server Settings](http://localhost:4567/php/config/web-server-settings/)
[PHP Start Commands](http://localhost:4567/php/config/start/)

### log_watch
Nanobox [`log_watch`'s](https://docs.nanobox.io/app-config/app-logs/) pipe log output that is typically written to a file into your app's log stream. This allows you to view those logs without having to inspect the actual log file. What log_watches you use depends on the Web Server and PHP interpreter you're using. More information is available in the [PHP Start Commands guide](http://localhost:4567/php/config/start/).

```yaml
web.wp:
  log_watch:
    apache[access]: /data/var/log/apache/access.log
    apache[error]: /data/var/log/apache/error.log
    php[error]: /data/var/log/php/php_error.log
    php[fpm]: /data/var/log/php/php_fpm.log
```

### network_dirs
Network directories allow you to store the contents of specific directories in a persistent file-store. When deploying to Nanobox, web nodes are replaced by all new, updated web nodes. Without network directories, any uploads or change to the files in your app would be wiped out. Network directories allow things like uploads to persist and be shared by multiple web nodes. These require a [storage component](#storage-component).

## MySQL Database Component
WordPress needs a MySQL database to store data. Including a data component with the `image` set to `nanobox/mysql` will tell Nanobox to provision a MySQL database when deploying your app.

```yaml
data.db:
  image: nanobox/mysql
```

## Storage Component
WordPress allows users to upload files into the filesystem. This can cause problems in multi-node, distributed applications (discussed in depth in the [Network Storage documentation](https://docs.nanobox.io/app-config/network-storage/)) and when deploying. In order for uploaded files to be shared with all web nodes and persist between deploys, you need a data/storage component that uses the `nanobox/unfs` image.

```yaml
data.storage:
  image: nanobox/unfs
```
