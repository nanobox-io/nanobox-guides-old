---
title: Configuring MongoDB
project: mongodb
---

MongoDB components are configured in your `boxfile.yml`. All available configuration options are outlined below.

### Important Notes About Configuration Changes
Whenever configuration changes are made to your MongoDB boxfile.yml config, in order to apply those changes, Nanobox must provision a new MongoDB node.

#### Changes in Dev & Sim
When working in [dev and sim](https://docs.nanobox.io/local-dev/dev-sim/), this will replace the existing node, wiping all data in the database. Data will need to be re-seeded.

#### Changes to a Production Database
When config changes are made to a production database, a new node is provisioned and data is migrated. There will be slight downtime as data is synced between the old and new node(s), but the process is designed to minimize this as much as possible. More information is available in the [Data Migrations During Scaling & Repairs ](https://docs.nanobox.io/data-management/data-migrations-scaling/) doc.

#### Overview of MongoDB Boxfile Settings
```yaml
data.db:
  image: nanobox/mongodb
  config:
    version: 3.0
    objcheck: true
    log_verbosity: 'v'
    directoryperdb: true
    logappend: true
    nojournal: false
    noscripting: false
```

###### Quick Links
[version](#version)  
[objcheck](#objcheck)  
[log\_verbosity](#log-verbosity)  
[directoryperdb](#directoryperdb)  
[logappend](#logappend)  
[nojournal](#nojournal)  
[noscripting](#noscripting)

### Version
When configuring a MongoDB service in your Boxfile, you can specify the version to use. The following version(s) are available:

- 2.6
- 3.0

**Note:** Due to version compatibility constraints, MongoDB versions cannot be changed after the service is created. To use a different version, you'll have to create a new MongoDB service and manually migrate data.

#### version
```yaml
# default setting
data.db:
  image: nanobox/mongodb
  config:
    version: 3.0
```

### ObjCheck
View the [MongoDB documentation](http://docs.mongodb.org/manual/reference/configuration-options/#diaglog) for details and configuration options.

#### objcheck
```yaml
#default setting
data.db:
  image: nanobox/mongodb
  config:
    objcheck: true
```

### Log Verbosity
View the [MongoDB documentation](http://docs.mongodb.org/manual/reference/configuration-options/#verbose) for details and configuration options.

#### log\_verbosity
```yaml
data.db:
  image: nanobox/mongodb
  config:
    log_verbosity: 'v'
```

### DirectoryPerDB
View the [MongoDB documentation](http://docs.mongodb.org/manual/reference/configuration-options/#directoryperdb) for details and configuration options.

#### directoryperdb
```yaml
#default setting
data.db:
  image: nanobox/mongodb
  config:
    directoryperdb: true
```

### LogAppend
View the [MongoDB documentation](http://docs.mongodb.org/manual/reference/configuration-options/#logappend) for details and configuration options.

#### logappend
```yaml
#default setting
data.db:
  image: nanobox/mongodb
  config:
    logappend: true
```

### NoJournal
View the [MongoDB documentation](http://docs.mongodb.org/manual/reference/configuration-options/#nojournal) for details and configuration options.

#### nojournal
```yaml
#default setting
data.db:
  image: nanobox/mongodb
  config:
    nojournal: false
```

### NoScripting
View the [MongoDB documentation](http://docs.mongodb.org/manual/reference/configuration-options/#noscripting) for details and configuration options.

#### noscripting
```yaml
#default setting
data.db:
  image: nanobox/mongodb
  config:
    noscripting: false
```

## Request MongoDB boxfile.yml Configs
If there's a setting you'd like to modify that isn't currently available, please let us know by creating a [new issue on this project](https://github.com/nanobox-io/nanobox-docker-mongodb/issues/new).
