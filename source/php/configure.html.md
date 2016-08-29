---
title: Configure Your App
project: php
---

All app/engine configuration is all handled in your boxfile.yml. The PHP engine exposes many config options, which are specified in the `code.build > config` section of your boxfile.yml. This is where you specify everything from your PHP version and PHP extensions, to web server settings. This guide covers to most used configs, but all the available config options are available in the [Config Options](../config/) guides.

#### Overview of Basic boxfile.yml Configuration Options
```yaml
code.build:
  config:
    # PHP Settings
    runtime: 'php-5.6'
    extensions:
      - curl
      - gd
      - mbstring
      - pdo_mysql
    zend_extensions:
      - ioncube_loader
      - opcache
    max_execution_time: 30
    max_input_time: 30
    error_reporting: E_ALL
    display_errors: 'stderr'
    post_max_size: '8M'
    upload_max_filesize: '2M'
    file_uploads: true

    # Web Server Settings
    webserver: 'apache'

    # Apache Settings
    apache_document_root: '/'
    apache_php_interpreter: fpm
    apache_access_log: false
```

##### Quick Links
[Web Server Settings](#web-server-settings)  
[PHP Settings](#php-settings)  
[Apache Settings](#apache-settings)  

## Web Server Settings
The following setting is used to select which web server to use in your application.

- [webserver](#webserver)

### webserver
The following web servers are available:

- apache *(default)*
- nginx
- builtin *([PHP's built-in web server](http://php.net/manual/en/features.commandline.webserver.php) available in 5.4+)*

```yaml
code.build:
  config:
    webserver: 'apache'
```

*Web server specific settings are available in the following guides:*

[Apache Settings](../config/web-server-settings/apache/)  
[Nginx Settings](../config/web-server-settings/nginx/)  
[Built-In PHP Web Server Settings](../config/web-server-settings/builtin/)

## PHP Settings
The following settings are typically configured in the php.ini. When using Nanobox, these are configured in the boxfile.yml.

- [runtime](#runtime)
- [extensions](#extensions)
- [zend_extensions](#zend_extensions)
- [max\_execution\_time](#max_execution_time)
- [max\_input\_time](#max_input_time)
- [error_reporting](#error_reporting)
- [display_errors](#display_errors)
- [post\_max\_size](#post_max_size)
- [upload\_max\_filesize](#upload_max_filesize)
- [file_uploads](#file_uploads)
- [date_timezone](#date_timezone)

### runtime
Specifies which PHP runtime and version to use. The following runtimes are available:

- php-5.3
- php-5.4
- php-5.5
- php-5.6
- php-7.0

```yaml
code.build:
  config:
    runtime: 'php-5.6'
```

### extensions
Specifies what PHP extensions should be included in your app's environment. To see what PHP extensions are available, view the [full list of available PHP extensions](../config/php-zend-extensions/#php-extensions).

```yaml
code.build:
  config:
    extensions:
      - curl
      - gd
      - mbstring
      - pdo_mysql
```

### zend_extensions
Specifies what Zend extensions should be included in your app's environment. To see what Zend extensions are available, view the [Zend Extensions section of the PHP extensions list](../config/php-zend-extensions/#zend-extensions).

```yaml
code.build:
  config:
    zend_extensions:
      - ioncube_loader
      - opcache
```

### max\_execution\_time
Sets the [`max_execution_time` PHP setting](http://www.php.net/manual/en/info.configuration.php#ini.max-execution-time).

```yaml
code.build:
  config:
    max_execution_time: 30
```

### max\_input\_time
Sets the [`max_input_time` PHP setting](http://www.php.net/manual/en/info.configuration.php#ini.max-input-time).

```yaml
code.build:
  config:
    max_input_time: 60
```

### error_reporting
Sets the [`error_reporting` PHP setting](http://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting).

```yaml
code.build:
  config:
    error_reporting: E_ALL
```

### display_errors
Sets the [`display_errors` PHP setting](http://us3.php.net/manual/en/errorfunc.configuration.php#ini.display-errors).

```yaml
code.build:
  config:
    display_errors: 'stderr'
```

### post\_max\_size
Sets the [`post_max_size` PHP setting](http://www.php.net/manual/en/ini.core.php#ini.post-max-size).

```yaml
code.build:
  config:
    post_max_size: '8M'
```

### upload\_max\_filesize
Sets the [`upload_max_filesize` PHP setting](http://php.net/manual/en/ini.core.php#ini.upload-max-filesize).

```yaml
code.build:
  config:
    upload\_max\_filesize: '2M'
```

### file_uploads
Sets the [`file_uploads` PHP setting](http://php.net/manual/en/ini.core.php#ini.file-uploads).

```yaml
code.build:
  config:
    file_uploads: true
```

### date_timezone
Sets the [`date.timezone` PHP setting](http://php.net/manual/en/datetime.configuration.php#ini.date.timezone).

```yaml
code.build:
  config:
    date_timezone: 'US/central'
```

## Apache Settings
The following settings are used to configure Apache. These only apply when using `apache` as your `webserver`.

- [apache\_php\_interpreter](#apache_php_interpreter)
- [apache\_access\_log](#apache_access_log)

### apache\_php\_interpreter

Specify which PHP interpreter you would like Apache to use.

- fpm *(default)*
- mod_php

```yaml
code.build:
  config:
    apache_php_interpreter: fpm
```

### apache\_access\_log
Enables or disables the Apache Access log.

```yaml
code.build:
  config:
    apache_access_log: false
```
