---
title: Configure Your App
project: erlang
---

All app/engine configuration is all handled in your boxfile.yml. The Erlang engine exposes config options, which are specified in the `code.build > config` section of your boxfile.yml.

#### Overview of Boxfile Configuration Options
```yaml
code.build:
  config:
    # Erlang Settings
    runtime: erlang-18.1
    make_target: 'my_project'
    project_dir: dir_name

    # Node.js Settings
    nodejs_runtime: nodejs-4.4
```

### Erlang Settings
The following setting allows you to define your Erlang runtime environment.

#### runtime
Specifies which Erlang runtime to use. The following runtimes are available:

- erlang-18.0
- erlang-18.1

```yaml
code.build:
  config:
    runtime: erlang-18.1
```

#### make_target
Defines which make task(s) should run when compiling the code.

```yaml
code.build:
  config:
    make_target: 'my_project'
```

#### project_dir
Defines the directory from which the final, compiled code should be run.

```yaml
code.build:
  config:
    project_dir: dir_name
```

### Node.js Settings
Many applications utilize Javascript tools in some way. This engine allows you to specify which Node.js runtime you'd like to use.

#### nodejs_runtime
Specifies which Node.js runtime and version to use. You can view the available Node.js runtimes in the [Node.js engine documentation](https://github.com/nanobox-io/nanobox-engine-nodejs#runtime).

```yaml
code.build:
  config:
    nodejs_runtime: nodejs-4.4
```

## Configure Your Web Server
Whatever web server you decided to use with your Erlang app is up to you. Just be sure the necessary config files are included in your project.

#### Your Web Server Must Listen on Port 8080
In your web server configuration file, make sure the server listens on port 8080 for HTTP/HTTPS requests. All HTTP/HTTPS requests are forwarded to port 8080. This cannot be changed.

### Provide a Start Command
Every web component needs a start command that starts the web server. This is specified in your boxfile.yml.

```yaml
web.site:
  start: 'init.sh start'
```

## Other boxfile.yml Options
There are many other configuration options available in the boxfile.yml that are not unique to the Erlang engine. These are all covered in the [boxfile.yml documentation](https://docs.nanobox.io/app-config/boxfile/).
