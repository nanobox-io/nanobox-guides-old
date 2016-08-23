---
title: Connecting to Memcached
project: memcached
---

When using Nanobox, projects are meant to be both portable and secure. In order for your project to be both, you should use environment variables in your Memcached connections.

When data components are provisioned, Nanobox generates unique connection credentials for the service. These connection credentials are different for each environment your app is deployed into (dev, sim, and production). Using environment variables allows your code to be portable and secure, keeping connection credentials out of your codebase.

## Auto-Generated Environment Variables
Secure connections to Memcached require a host, port, and name. Whenever your data component is provisioned, Nanobox automatically generates environment variables for the host and name.

*The port will always be the default Memcached port,* `11211`.

### Variable Naming Convention
Environment variable names/keys are generated using the ID of the Memcached component in your boxfile.yml - data.cache, data.whatever, etc. Letters are capitalized and special characters are replaced with underscores. For example:

```yaml
data.cache     => DATA_CACHE
data.memcached => DATA_MEMCACHED
data.cthulu    => DATA_CTHULU
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
data.memcached

# Auto-Generated Environment Variables
DATA_MEMCACHED_HOST
DATA_MEMCACHED_NAME
```
