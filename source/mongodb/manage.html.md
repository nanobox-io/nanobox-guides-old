---
title: Managing Data
project: mongodb
---

Nanobox exposes connections to your MongoDB database through which you can access and manage your data using your client of choice.

## Managing Local Data
When working in a local [dev or sim platform](https://docs.nanobox.io/local-dev/dev-sim/), your MongoDB node is given it's own virtual IP and port that you can connect to using your client of choice. To view these credentials, use the Nanobox CLI's `info` command. It displays information about components in each respective platform.

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

#### Opening a Tunnel to MongoDB
```bash
$ nanobox tunnel -p 27017 data.db
```

The tunnel command will output the credentials necessary to connect to your production MongoDB database. You can then use your client of choice to manage your production data.
