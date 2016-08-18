---
title: Configure Your app
project: scala
---

All app/engine configuration is all handled in your boxfile.yml. The Scala engine exposes config options, which are specified in the `code.build > config` section of your boxfile.yml.

#### Overview of boxfile.yml Configuration Options
```yaml
code.build:
  config:
    # Java Settings
    java_runtime: sun-jdk8

    # sbt Settings
    sbt_compile: 'clean assembly'

    # Node.js Settings
    nodejs_runtime: nodejs-4.4
```

### Scala Settings
Very little Scala configuration is required when using the [Scala engine](https://github.com/nanobox-io/nanobox-engine-scala) and is only necessary if you need to deviate from the defaults.

#### java_runtime
Specifies which Java runtime and version to use. The following runtimes are available:

- openjdk7
- openjdk8
- sun-jdk6
- sun-jdk7
- sun-jdk8
- oracle-jdk8 *(default)*

```yaml
code.build:
  config:
    java_runtime: 'oracle-jdk8'
```

### sbt Settings
The following setting allows you to define sbt-specific options.

#### sbt_compile
Defines what arguments to pass when running sbt.

```yaml
code.build:
  config:
    sbt_compile: 'clean assembly'
```

### Node.js Settings
Some Scala applications utilize Node.js tools for things such as dependency management or static asset compilation. If the engine finds a `packages.json` in your codebase, it assumes you're using [npm](https://www.npmjs.com/) and will automatically install Node.js and run `npm install` during your builds. This engine allows you to specify which Node.js runtime you'd like to include in your environment.

#### nodejs_runtime:
Specifies which Node.js runtime and version to use. The available options can be found in the [Node.js engine](https://github.com/nanobox-io/nanobox-engine-nodejs#runtime).

```yaml
code.build:
  config:
    nodejs_runtime: nodejs-4.4
```

## Configure Your Web Server
Whatever web server you decided to use with your Scala app is up to you. Just be sure the necessary config files are included in your project.

#### Your Web Server Must Listen on Port 8080
In your web server configuration file, make sure the server listens on port 8080 for HTTP/HTTPS requests. All HTTP/HTTPS requests are forwarded to port 8080. This cannot be changed.

### Provide a Start Command
Every web component needs a start command that starts the web server. This is specified in your boxfile.yml.

```yaml
web.site:
  start: 'java -jar target/scala-2.11/scala-assembly-0.1.0-SNAPSHOT.jar'
```

## Other boxfile.yml Options
There are many other configuration options available in the boxfile.yml that are not unique to the Scala engine. These are all covered in the [boxfile.yml documentation](https://docs.nanobox.io/app-config/boxfile/).
