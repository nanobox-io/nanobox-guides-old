---
title: Setting Up WordPress
project: wordpress
---

## Install Nanobox
If you haven't already, [download and install Nanobox](https://nanobox.io/download). Nanobox enables you to create virtualized, local development environments identical to production environments deployed through Nanobox.

## Download WordPress
If you don't already have a WordPress codebase, you can download and use a fresh one. Downloads are available through the [WordPress Downloads page](https://wordpress.org/download/) or from [WordPress' Github repo](https://github.com/wordpress/wordpress).

## Create a boxfile.yml for Your WordPress App
The [boxfile.yml](https://docs.nanobox.io/app-config/boxfile/) is a yaml config file used to specify the components and configuration need for you app. It should be placed in the root of your WordPress project. Below is a basic WordPress boxfile.yml.

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

For a detailed explanation of each of the WordPress boxfile.yml config settings, view the [WordPress boxfile.yml Explained guide](advanced/boxfile-explained/).


## Update Your wp-config.php
There are a few changes you'll need to make to your `wp-config.php` to allow WordPress to connect to its database and run securely.

### Database Connection Credentials
In order for WordPress to connect to its database, you'll need to update the database credentials. To allow WordPress to connect to the database once deployed into any Nanobox environment (dev, sim, production), you should use [environment variables](https://docs.nanobox.io/app-config/environment-variables/) to populate the credentials.

Nanobox automatically generates environment variables for connection credentials based on the ID of your data component. With an ID of `data.db`, environment variable keys will be created with `DATA_DB_` and the credential title. Below is what the db config will should look like:

```php?start_inline=1
/** The name of the database for WordPress */
define('DB_NAME', 'gonano');

/** MySQL database username */
define('DB_USER', $_ENV['DATA_DB_USER']);

/** MySQL database password */
define('DB_PASSWORD', $_ENV['DATA_DB_PASS']);

/** MySQL hostname */
define('DB_HOST', $_ENV['DATA_DB_HOST']);
```

**Note:** *Databases created on Nanobox will always have the name "gonano".*

### Generate Auth Keys & Salts
If you're working from a fresh WordPress install, you'll need to generate unique auth keys and salts. WordPress uses these to securely create sessions. The easiest way to generate these is go to [WordPress' Secret Key & Salt API](https://api.wordpress.org/secret-key/1.1/salt/).

```php?start_inline=1
define('AUTH_KEY',         'put your unique phrase here');
define('SECURE_AUTH_KEY',  'put your unique phrase here');
define('LOGGED_IN_KEY',    'put your unique phrase here');
define('NONCE_KEY',        'put your unique phrase here');
define('AUTH_SALT',        'put your unique phrase here');
define('SECURE_AUTH_SALT', 'put your unique phrase here');
define('LOGGED_IN_SALT',   'put your unique phrase here');
define('NONCE_SALT',       'put your unique phrase here');
```

## Run WordPress in Dev
With your boxfile.yml in place and your wp-config.php updated, you're ready to generate a build and deploy WordPress into your local dev environment. Run the following command in the root of your WordPress directory:

```bash
$ nanobox dev deploy
```

This will generate a new build, start your dev environment, deploy the build into your dev environment, and provision your database and storage service. This will also mount your local codebase into the Nanobox virtual machine so that code changes will be reflected in your running dev app.

### Create a DNS Alias for Your Dev App
The `nanobox dev dns add` command allows you to create a DNS alias for your dev app. It will add an entry in your local hosts file that will route all requests to the specified domain to your local dev app.

```bash
$ nanobox dev dns add your-domain.dev
```

### Start Apache & PHP-FPM
<!-- When deploying into a dev environment, you'll need to manually start Apache and PHP-FPM before your app will be accessible. There's two possible ways to do this:

#### nanobox dev run
The `nanobox dev run` command will run all your web's [start commands specified in your boxfile.yml](./advanced/boxfile-explained/#start). Run the command from the root of your WordPress app:

```bash
$ nanobox dev run
``` -->

#### Console In & Run Start Commands
Another option is to console into your dev environment and manually run the start commands specified in your boxfile.yml. The `nanobox dev console` command will drop you into an interactive console inside your dev app where you can then start Apache and PHP-FPM. You'll want to create a separate console for each.

```bash
# Console into your dev app
$ nanobox dev console

# Start Apache
$ /data/sbin/httpd -DNO_DETACH
```

In a new terminal window, create a second console and start PHP-FPM:

```bash
# Console into your dev app
$ nanobox dev console

# Start PHP-FPM
$ /data/sbin/php-fpm -y /data/etc/php/php-fpm.conf -c /data/etc/php/php.ini
```

### Import Data & Uploads
If you're using a fresh WordPress install, you don't need to do this, but if you're porting an existing WordPress app over to Nanobox, you'll likely have data and uploads that need to be imported into your dev environment. Instructions are provided in these guides:

[Importing Data](data-managment/import/)  
[Importing Uploads](uploads-management/import/)

### Visit Your App
With Apache and PHP-FPM, running, you should now be able to access your dev WordPress site at either the domain you added as a DNS alias or the IP shown in your console output. Just be sure to append `:8080` to the domain. This is the port on which your dev app is listening.

**Example:** `your-domain.dev:8080`

### Craft Some Code
Now you're ready to craft some code. Any changes made to your local codebase will be reflected in your running app. You can [install plugins and themes](plugins-themes/) or make some tweaks to WordPress.
