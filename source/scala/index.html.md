---
title: Getting Started
project: scala
---

Getting a Scala app up and running on Nanobox can be done in a few simple steps.

## Install Nanobox
If you haven't already, [download and install Nanobox](https://nanobox.io/download). Nanobox enables you to create virtualized, local development environments identical to production environments deployed through Nanobox.

## Create a boxfile.yml
The first step to using Nanobox is to create a file named `boxfile.yml` in the root of your project. The [boxfile.yml](https://docs.nanobox.io/app-config/boxfile/) houses all configuration for Nanobox apps.

### Specify the Scala Engine
"Engines" build your code's runtime environment and expose runtime configuration options. Nanobox provides an official Scala engine. Engines are specified in the [`code.build`](https://docs.nanobox.io/app-config/boxfile/code-build/) of your boxfile.yml.

To use the official Nanobox Scala engine, specify `scala` as your `engine`:

```yaml
code.build:
  engine: scala
```

## Setup Your Project
With the Scala engine specified, you're ready to setup your project. The [Project Setup](./project-setup/) doc walks through this process.
