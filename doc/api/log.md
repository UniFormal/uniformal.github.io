---
layout: doc
title: Logging
---

MMT provides a generic logging infrastructure that all MMT components use and that is available to all [extensions](extensions/).

A **logging producer** is any object that inherits from [`frontend.Logger`](apidoc://info.kwarc.mmt.api.frontend.Logger).
These instances must set the value `logPrefix` to a unique string.
This string is used as the argument of the `log+` and `log-` [shell commands](../applications/shell) and occurs as a prefix in every log entry.

Predefined log prefixes are `user`, which mirrors user input on the shell, and `error` for error messages.
These are the only prefixes for which logging is switched on by default.

A **logging consumer** is any object that inherits from [`frontend.ReportHandler`](apidoc://info.kwarc.mmt.api.frontend.ReportHandler).
These receive log messages for printing, archiving, etc.

The class **[`frontend.Report`](apidoc://info.kwarc.mmt.api.frontend.Report)** acts as a controller between producers and consumers.
Producers must have access to an instance of this class, and consumers must be registered with it.
All Loggers send their messages here, and this class decides (based on whether logging is switched on or off for this Logger) whether the log message is forwarded.
If so, the message if sent to all registered ReportHandlers. 
