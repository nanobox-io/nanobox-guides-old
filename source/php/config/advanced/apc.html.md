---
title: APC Settings
project: php
---

The following settings are used to configure APC, a PHP byte-code caching engine available in PHP versions 5.3 and 5.4.

- [apc\_shm\_size](#apc_shm_size)
- [apc\_num\_files\_hint](#apc_num_files_hint)
- [apc\_user\_entries\_hint](#apc_user_entries_hint)
- [apc_filters](#apc_filters)

### apc\_shm\_size
Sets the [`apc.shm_size` PHP setting](http://php.net/manual/en/apc.configuration.php#ini.apc.shm-size).

```yaml
code.build:
  config:
    apc_shm_size: '32M'
```

### apc\_num\_files\_hint
Sets the [`apc.num_files_hint` PHP setting](http://php.net/manual/en/apc.configuration.php#ini.apc.num-files-hint).

```yaml
code.build:
  config:
    apc_num_files_hint: 1000
```

### apc\_user\_entries\_hint
Sets the [`apc.user_entries_hint` PHP setting](http://php.net/manual/en/apc.configuration.php#ini.apc.user-entries-hint).

```yaml
code.build:
  config:
    apc_user_entries_hint: 4096
```

### apc_filters
Sets the [`apc.filters` PHP setting](http://php.net/manual/en/apc.configuration.php#ini.apc.filters).

```yaml
code.build:
  config:
    apc_filters: ''
```
