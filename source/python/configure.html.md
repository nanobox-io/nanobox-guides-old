---
title: Configure Your App
project: python
---

All app/engine configuration is all handled in your boxfile.yml. The Python engine exposes config options, which are specified in the `code.build > config` section of your boxfile.yml.

#### Overview of boxfile.yml Configuration Options
```yaml
code.build:
  config:
    # Python Settings
    runtime: python27

    # Node.js Settings
    nodejs_runtime: nodejs-4.4
```

### Python Settings
Very little Python configuration is required when using the [Python engine](https://github.com/nanobox-io/nanobox-engine-python) and is only necessary if you need to deviate from the defaults.

#### runtime
Specifies which Python runtime and version to use. The following runtimes are available:

- python27 *(default)*
- python34

```yaml
code.build:
  config:
    runtime: 'python27'
```

### Node.js Settings
Many Python applications utilize Node.js tools for things such as dependency management or static asset compilation. If the engine finds a `packages.json` in your codebase, it assumes you're using [npm](https://www.npmjs.com/) and will automatically install Node.js and run `npm install` during your builds. This engine allows you to specify which Node.js runtime you'd like to include in your environment.

#### nodejs_runtime:
Specifies which Node.js runtime and version to use. The available options can be found in the [Node.js engine](https://github.com/nanobox-io/nanobox-engine-nodejs#runtime).

```yaml
code.build:
  config:
    nodejs_runtime: nodejs-4.4
```

## Configure Your Web Server
Whatever web server you decided to use with your Python app is up to you. Just be sure to include the server package in your codebase.

For example, if you were to use [Gunicorn](http://gunicorn.org) as your web server, you'd install it by doing the following:

```bash
# Start your dev platform
$ nanobox dev start

# Console into your dev platform
$ nanobox dev console

# Install Gunicorn using Pip
$ pip install gunicorn

# Update your requirements.txt
$ pip freeze > requirements.txt
```

#### Your Web Server Must Listen on Port 8080
In your web server configuration, make sure the server listens on port 8080 for HTTP/HTTPS requests. All HTTP/HTTPS requests are forwarded to port 8080. This cannot be changed.

### Provide a Start Command
Every web component needs a start command that starts the web server. This is specified in your boxfile.yml.

```yaml
web.site:
  start: 'gunicorn my-app:app'
```

## Other boxfile.yml Options
There are many other configuration options available in the boxfile.yml that are not unique to the Python engine. These are all covered in the [boxfile.yml documentation](https://docs.nanobox.io/app-config/boxfile/).
