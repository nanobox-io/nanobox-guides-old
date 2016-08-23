---
title: Connecting to PostgreSQL
project: postgresql
---

When using Nanobox, projects are meant to be both portable and secure. In order for your project to be both, you should use environment variables in your PostgreSQL connections.

When data components are provisioned, Nanobox generates unique connection credentials for the service. These connection credentials are different for each environment your app is deployed into (dev, sim, and production). Using environment variables allows your code to be portable and secure, keeping connection credentials out of your codebase.

## Auto-Generated Environment Variables
Secure connections to your PostgreSQL db require a host, port, name, user, and password. Whenever your data component is provisioned, Nanobox automatically generates an environment variable for the host, name, user, and password.

*The port will always be the default Postgres port, `5432`.*

### Variable Naming Convention
Environment variable names/keys are generated using the ID of the Postgres component in your boxfile.yml - data.db, data.whatever, etc. Letters are capitalized and special characters are replaced with underscores. For example:

```yaml
data.db       => DATA_DB
data.postgres => DATA_POSTGRES
data.cthulu   => DATA_CTHULU
```

Using this convention, environment variables for each required credential are generated.

```yaml
# Component ID
data.db

# Auto-Generated Environment Variables
DATA_DB_HOST
DATA_DB_USER
DATA_DB_PASS
DATA_DB_NAME
```
```yaml
# Component ID
data.postgres

# Auto-Generated Environment Variables
DATA_POSTGRES_HOST
DATA_POSTGRES_USER
DATA_POSTGRES_PASS
DATA_POSTGRES_NAME
```
