---
title: Getting Started
project: redis
---

Nanobox makes adding, configuring, and managing Redis really simple. These guides will walk through creating, configuring and managing Redis on Nanobox.

## Add a Redis Data Component to Your boxfile.yml
When using Nanobox, all your app's needs and config options are defined in your [boxfile.yml](https://docs.nanobox.io/app-config/boxfile/), a yaml config file housed in the root of your project. Inside the boxfile.yml, you specify "components" - things such as web servers, workers, ands.

To add a Redis to your app, add a data component to your boxfile.yml with the `image` set to `nanobox/redis`.

```yaml
data.redis:
  image: nanobox/redis
```

*For purposes of this guide, we'll use* `data.redis` *as the component ID.* "`redis`" *is a unique identifier and can be whatever you'd like. More information about component IDs is available in the [boxfile.yml documentation](https://docs.nanobox.io/app-config/boxfile/#component-ids).*


#### Helpful Links
[Data Components](https://docs.nanobox.io/app-config/boxfile/data/)  
[What is a Nanobox image?](https://docs.nanobox.io/images/)

### Specify Config Options
The Redis image exposes configuration options in the boxfile.yml. These options are nested under the `config` section of your data component. For all the available configuration options, view the [configuration guide](./configure/).

```yaml
data.redis:
  image: nanobox/redis
  config:
    version: 3.0
    tcp_keepalive: 60
    databases: 16
```

## Create a New Build
With your Redis component included in your boxfile.yml, you're ready to create a new build. In the build process, your app's code is compiled into a deployable build package. All the necessary information to provision Redis is included in the package.

```bash
$ nanobox build
```

## Deploy Your Build
Once your build is ready, you can deploy it into your dev, sim, or production platform(s). In the deploy process, your Redis node will be created. More information about dev and sim environments is available in the [Local Development documentation](https://docs.nanobox.io/local-dev/dev-sim/).

### Deploying to Dev & Sim
In order to deploy to dev and sim platforms, they must be running first. If they aren't running, each can be started using the `start` command.

#### Starting & Deploying to Dev
```bash
# Start your dev platform
$ nanobox dev start

# Deploy to your dev platform
$ nanobox dev deploy
```

#### Starting & Deploying to Sim
```bash
# Start your sim platform
$ nanobox sim start

# Deploy to your sim platform
$ nanobox sim deploy
```

### Deploying to Production
To deploy to your production platform and create your Redis node, run the following:

```bash
$ nanobox deploy
```
