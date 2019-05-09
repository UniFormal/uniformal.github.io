---
layout: doc
title: Configuring MMT
---

When started, MMT looks for a configuration file called `mmtrc` in the following order:

* a default file is included with MMT
* the `deploy` folder of the MMT repository (if MMT is run in a way that lets it find that folder)
* the user's home folder

Later configuration entries overwrite earlier ones. 

During setup a defaut configuration file is generated and placed in the `deploy` folder.
That file also includes some example configuration entries.

### Configuration File Syntax

Every configuration file is split into sections introduced by `#TYPE` defining the type of the following configuration entries.

Each section consists of one configuration entry per line.
Each entry is a whitespace-separated list of strings.

### Configuration Entries

The class for configuration entries [`frontend.ConfEntry`](apidoc://info.kwarc.mmt.api.frontend.ConfEntry).

Its Scala doc is the primary place to document the individual entries.