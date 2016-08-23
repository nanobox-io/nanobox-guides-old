---
title: Connecting to Redis
project: redis
---

When using Nanobox, projects are meant to be both portable and secure. In order for your project to be both, you should use environment variables in your Redis connections.

When data components are provisioned, Nanobox generates unique connection credentials for the service. These connection credentials are different for each environment your app is deployed into (dev, sim, and production). Using environment variables allows your code to be portable and secure, keeping connection credentials out of your codebase.

## Auto-Generated Environment Variables
Secure connections to Redis require a host, port, and name. Whenever your data component is provisioned, Nanobox automatically generates environment variables for the host and name.

*The port will always be the default Redis port,* `6379`.

### Variable Naming Convention
Environment variable names/keys are generated using the ID of the Redis component in your boxfile.yml - data.redis, data.whatever, etc. Letters are capitalized and special characters are replaced with underscores. For example:

```yaml
data.cache  => DATA_CACHE
data.redis  => DATA_REDIS
data.cthulu => DATA_CTHULU
```

Using this convention, environment variables for each required credential are generated.

```yaml
# Component ID
data.cache

# Auto-Generated Environment Variables
DATA_CACHE_HOST
DATA_CACHE_NAME
```
```yaml
# Component ID
data.redis

# Auto-Generated Environment Variables
DATA_REDIS_HOST
DATA_REDIS_NAME
```
