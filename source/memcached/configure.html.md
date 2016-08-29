---
title: Configuring Memcached
project: memcached
---

Memcached components are configured in your `boxfile.yml`. All available configuration options are outlined below.

#### Overview of Memcached Boxfile Settings
```yaml
data.cache:
  image: nanobox/memcached
  config:
    version: 1.4
    return_error_on_memory_exhausted: false
    max_connections: 1024
    chunk_size_growth_factor: 1.25
    minimum_allocated_space: 48
    maximum_requests_per_event: 20
    disable_cas: false
    max_backlog: 1024
    binding_protocol: 'auto'
```

###### Quick Links
[version](#version)  
[return\_error\_on\_memory\_exhausted](#return-error-on-memory-exhausted)  
[max\_connections](#max-connections)  
[chunk\_size\_growth\_factor](#chunk-size-growth-factor)  
[minimum\_allocated\_space](#minimum-allocated-space)  
[maximum\_requests\_per\_event](#maximum-requests-per-event)  
[disable\_cas](#disable-cas)  
[max\_backlog](#max-backlog)  
[binding\_protocol](#binding-protocol)

### Version
When configuring a Memcached component in your Boxfile, you can specify which version to use. The following version(s) are available:

- 1.4

**Note:** Due to version compatibility constraints, memcached versions cannot be changed after the component is created. To use a different version, you'll have to create a new Memcached component.

#### version
```yaml
# default setting
data.cache:
  image: nanobox/memcached
  config:
    version: 1.4
```

### Return Error on Memory Exhausted
This allows you to have memcached return an error when memory is exhausted rather than removing items.

#### return\_error\_on\_memory\_exhausted
```yaml
#default setting
data.cache:
  image: nanobox/memcached
  config:
    return_error_on_memory_exhausted: false
```

### Max Connections
Sets the limit for simultaneous connections.

#### max\_connections
```yaml
#default setting
data.cache:
  image: nanobox/memcached
  config:
    max_connections: 1024
```

### Chunk Size Growth Factor
Specifies the chunk size growth factor.

#### chunk\_size\_growth\_factor
```yaml
#default setting
data.cache:
  image: nanobox/memcached
  config:
    chunk_size_growth_factor: 1.25
```

### Minimum Allocated Space
Sets the minimum space allocated for key+value+flags.

#### minimum\_allocated\_space
```yaml
#default setting
data.cache:
  image: nanobox/memcached
  config:
    minimum_allocated_space: 48
```

### Maximum Requests Per Event
Sets the maximum number of requests per event and limits the number of requests processed for a given connection to prevent starvation.

#### maximum\_requests\_per\_event
```yaml
#default setting
data.cache:
  image: nanobox/memcached
  config:
    maximum_requests_per_event: 20
```

### Disable CAS
Allows you to disable the use of [CAS](https://code.google.com/p/memcached/wiki/NewCommands#cas).

#### disable\_cas
```yaml
#default setting
data.cache:
  image: nanobox/memcached
  config:
    disable_cas: false
```

### Max Backlog
Sets the backlog queue limit.

#### max\_backlog
```yaml
#default setting
data.cache:
  image: nanobox/memcached
  config:
    max_backlog: 1024
```

### Binding Protocol
Allows you to set the binding protocol. The following are available:

- auto
- ascii
- binary

#### binding\_protocol
```yaml
#default setting
data.cache:
  image: nanobox/memcached
  config:
    binding_protocol: 'auto'
```
