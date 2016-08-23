---
title: Managing Data
project: redis
---

Nanobox exposes connections to Redis through which you can access and manage your data using your client of choice.

## Managing Local Data
When working in a local [dev or sim platform](https://docs.nanobox.io/local-dev/dev-sim/), your Redis component is given it's own virtual IP and port to which you can connect. To view these credentials, use the Nanobox CLI's `info` command. It displays information about components in each respective platform.

#### Viewing Credentials in dev
```bash
$ nanobox dev info

??? info output
```

#### Viewing Credentials in sim
```bash
$ nanobox sim info

??? info output
```

## Managing Production Data
To establish a secure remote connection to your production database, use the Nanobox CLI's [`tunnel` command](htts://docs.nanobox.io/cli/tunnel/) which binds to a local port and establishes a secure tunnel that goes through the following authentications:

1. Your are an authorized Nanobox user.
2. Your are an authorized collaborator on the app.
3. Your are authorized to access the component.

#### Opening a Tunnel to Redis
```bash
$ nanobox tunnel -p 6379 data.redis
```

The tunnel command will output the credentials necessary to connect to your production Redis component. You can then use your client of choice to manage your production data. Below is an example of connecting with the Redis CLI.

#### Connecting with the Redis CLI
```bash
$ redis-cli -h ??? -p 6379
```
