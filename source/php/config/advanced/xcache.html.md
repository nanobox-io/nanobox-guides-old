---
title: XCache Settings
project: php
---

The following settings are used to configure the XCache PHP byte-code caching engine.

- [xcache_size](#xcache_size)
- [xcache\_var\_size](#xcache_var_size)
- [xcache\_admin\_user](#xcache_admin_user)
- [xcache\_admin\_pass](#xcache_admin_pass)

### xcache_size
Sets the [`xcache.size` setting](http://xcache.lighttpd.net/wiki/XcacheIni#XCacheCacher).

```yaml
code.build:
  config:
    xcache_size: 0
```

### xcache\_var\_size
Sets the [`xcache.var_size` setting](http://xcache.lighttpd.net/wiki/XcacheIni#XCacheCacher).

```yaml
code.build:
  config:
    xcache_var_size: 0
```

### xcache\_admin\_user
Sets the [`xcache.admin.user` setting](http://xcache.lighttpd.net/wiki/XcacheIni#XCacheAdministration).

```yaml
code.build:
  config:
    xcache_admin_user: 'mOo'
```

### xcache\_admin\_pass
Sets the [`xcache_admin_pass` setting](http://xcache.lighttpd.net/wiki/XcacheIni#XCacheAdministration).

```yaml
code.build:
  config:
    xcache_admin_pass: ''
```
