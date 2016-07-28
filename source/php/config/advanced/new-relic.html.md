---
title: New Relic Settings
project: php
---

The following settings are used to configure the [PHP New Relic Agent](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration).

- [newrelic\_capture\_params](#newrelic_capture_params)
- [newrelic\_ignored\_params](#newrelic_ignored_params)
- [newrelic_loglevel](#newrelic_loglevel)
- [newrelic_framework](#newrelic_framework)
- [newrelic\_framework\_drupal\_modules](#newrelic_framework_drupal_modules)
- [newrelic\_browser\_monitoring\_auto\_instrument](#newrelic_browser_monitoring_auto_instrument)
- [newrelic\_transaction\_tracer\_enabled](#newrelic_transaction_tracer_enabled)
- [newrelic\_transaction\_tracer\_detail](#newrelic_transaction_tracer_detail)
- [newrelic\_transaction\_tracer\_record\_sql](#newrelic_transaction_tracer_record_sql)
- [newrelic\_transaction\_tracer\_threshold](#newrelic_transaction_tracer_threshold)
- [newrelic\_transaction\_tracer\_stack\_trace\_threshold](#newrelic_transaction_tracer_stack_trace_threshold)
- [newrelic\_transaction\_tracer\_explain\_threshold](#newrelic_transaction_tracer_explain_threshold)
- [newrelic\_transaction\_tracer\_slow\_sql](#newrelic_transaction_tracer_slow_sql)
- [newrelic\_transaction\_tracer\_custom](#newrelic_transaction_tracer_custom)
- [newrelic\_error\_collector\_enabled](#newrelic_error_collector_enabled)
- [newrelic\_error\_collector\_record\_database\_errors](#newrelic_error_collector_record_database_errors)
- [newrelic\_webtransaction\_name\_files](#newrelic_webtransaction_name_files)
- [newrelic\_webtransaction\_name\_functions](#newrelic_webtransaction_name_functions)
- [newrelic\_webtransaction\_name\_remove\_trailing\_path](#newrelic_webtransaction_name_remove_trailing_path)

### newrelic\_capture\_params
Sets the [`newrelic.capture_params` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-capture_params).

```yaml
code.build:
  config:
    newrelic_capture_params: false
```

### newrelic\_ignored\_params
Sets the [`newrelic.ignored_params` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-ignored_params).

```yaml
code.build:
  config:
    newrelic_ignored_params: ''
```

### newrelic_loglevel
Sets the [`newrelic.loglevel` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-loglevel).

```yaml
code.build:
  config:
    newrelic_loglevel: 'info'
```

### newrelic_framework
Sets the [`newrelic.framework` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-framework).

```yaml
code.build:
  config:
    newrelic_framework: 'laravel'
```

### newrelic\_framework\_drupal\_modules
Sets the [`newrelic.framework.drupal.modules` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-framework-drupal-modules).

```yaml
code.build:
  config:
    newrelic_framework_drupal_modules: true
```

### newrelic\_browser\_monitoring\_auto\_instrument
Sets the [`newrelic.browser_monitoring_auto_instrument` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-autorum).

```yaml
code.build:
  config:
    newrelic_browser_monitoring_auto_instrument: true
```

### newrelic\_transaction\_tracer\_enabled
Sets the [`newrelic.transaction_tracer.enabled` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-enable).

```yaml
code.build:
  config:
    newrelic_transaction_tracer_enabled: true
```

### newrelic\_transaction\_tracer\_detail
Sets the [`newrelic.transaction_tracer.detail` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-detail).

```yaml
code.build:
  config:
    newrelic_transaction_tracer_detail: 1
```

### newrelic\_transaction\_tracer\_record\_sql
Sets the [`newrelic.transaction_tracer.record_sql` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-sql).

```yaml
code.build:
  config:
    newrelic_transaction_tracer_record_sql: 'obfuscated'
```

### newrelic\_transaction\_tracer\_threshold
Sets the [`newrelic.transaction_tracer.threshold` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-threshold).

```yaml
code.build:
  config:
    newrelic_transaction_tracer_threshold: 'apdex_f'
```

### newrelic\_transaction\_tracer\_explain\_threshold
Sets the [`newrelic.transaction_tracer.explain_threshold` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-epthreshold).

```yaml
code.build:
  config:
    newrelic_transaction_tracer_explain_threshold: '500'
```

### newrelic\_transaction\_tracer\_stack\_trace\_threshold
Sets the [`newrelic.transaction_tracer.stack_trace_threshold` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-stthreshold).

```yaml
code.build:
  config:
    newrelic_transaction_tracer_stack_trace_threshold: '500'
```

### newrelic\_transaction\_tracer\_slow\_sql
Sets the [`newrelic.transaction_tracer.slow_sql` setting](hhttps://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-slowsql).

```yaml
code.build:
  config:
    newrelic_transaction_tracer_slow_sql: true
```

### newrelic\_transaction\_tracer\_custom
Sets the [`newrelic.transaction_tracer.custom` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-custom).

```yaml
code.build:
  config:
    newrelic_transaction_tracer_custom: ''
```

### newrelic\_error\_collector\_enabled
Sets the [`newrelic.error_collector.enabled` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-err-enabled).

```yaml
code.build:
  config:
    newrelic_error_collector_enabled: true
```

### newrelic\_error\_collector\_record\_database\_errors
Sets the [`newrelic.error_collector.record_database_errors` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-err-db).

```yaml
code.build:
  config:
    newrelic_error_collector_record_database_errors: true
```

### newrelic\_webtransaction\_name\_files
Sets the [`newrelic.webtransaction.name.files` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-wt-files).

```yaml
code.build:
  config:
    newrelic_webtransaction_name_files: ''
```

### newrelic\_webtransaction\_name\_functions
Sets the [`newrelic.webtransaction.name.functions` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-wt-funcs).

```yaml
code.build:
  config:
    newrelic_webtransaction_name_functions: ''
```

### newrelic\_webtransaction\_name\_remove\_trailing\_path
Sets the [`newrelic.webtransaction.name_remove_trailing_path` setting](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-wt-remove-path).

```yaml
code.build:
  config:
    newrelic_webtransaction_name_remove_trailing_path: false
```
