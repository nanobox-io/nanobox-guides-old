---
title: Configure Your App
project: ruby
---

All app/engine configuration is all handled in your boxfile.yml. The Ruby engine exposes config options, which are specified in the `code.build > config` section of your boxfile.yml.

#### Overview of boxfile.yml Configuration Options
```yaml
code.build:
  config:
    # Ruby Settings
    runtime: ruby-2.3

    # Node.js Settings
    nodejs_runtime: nodejs-6.2
```

### Ruby Settings
Very little Ruby configuration is required when using the [Ruby engine](https://github.com/nanobox-io/nanobox-engine-ruby) and is only necessary if you need to deviate from the defaults.

#### runtime
Specifies which Ruby runtime and version to use. The following runtimes are available:

- ruby-1.9
- ruby-2.0
- ruby-2.1
- ruby-2.2
- ruby-2.3 *(default)*
- jruby-1.6
- jruby-1.7
- jruby-9.0

```yaml
code.build:
  config:
    runtime: 'ruby-2.3'
```

### Node.js Settings
Many Ruby applications utilize Node.js tools for things such as dependency management or static asset compilation. If the engine finds a `packages.json` in your codebase, it assumes you're using [npm](https://www.npmjs.com/) and will automatically install Node.js and run `npm install` during your builds. This engine allows you to specify which Node.js runtime you'd like to include in your environment.

#### nodejs_runtime:
Specifies which Node.js runtime and version to use. The available options can be found in the [Node.js engine](https://github.com/nanobox-io/nanobox-engine-nodejs#runtime).

```yaml
code.build:
  config:
    nodejs_runtime: nodejs-4.4
```

## Configure Your Web Server
Whatever web server you decided to use with your Ruby app is up to you. Just be sure to the web server gem in your Gemfile and a config file for the server in your codebase.

For example, if you were to use [Puma](https://github.com/puma/puma) as your web server, you'd include the `puma` gem in your Gemfile and a `app.ru` somewhere in your codebase.

#### Your Web Server Must Listen on Port 8080
In your web server configuration file, make sure the server listens on port 8080 for HTTP/HTTPS requests. All HTTP/HTTPS requests are forwarded to port 8080. This cannot be changed.

### Provide a Start Command
Every web component needs a start command that starts the web server. This is specified in your boxfile.yml.

```yaml
web.site:
  start: 'bundle exec puma app.ru'
```

## Other boxfile.yml Options
There are many other configuration options available in the boxfile.yml that are not unique to the Ruby engine. These are all covered in the [boxfile.yml documentation](https://docs.nanobox.io/app-config/boxfile/).
