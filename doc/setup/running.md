---
layout: doc
title: Running MMT
---

After [setting up](index.html) MMT, the jars in the `deploy` folder can be run normally via Java.
The canonical way to do that is to run
```
java -jar MMT/deploy/mmt.jar
```
Depending on your OS, that jar file may also be directly executable.

### Run Modes

MMT can be run in 3 different modes

* *batch:* MMT executes its command-line arguments (if any)
    This is the initial mode. When execution has finished, MMT transitions into interactive or server mode.
* *interactive:* MMT displays a shell and responds to commands interactively
    The end-of-input character transitions into server mode; the command exit terminates MMT as a whole.
* *server:* MMT waits for auxiliary threads (if any) to terminate and then terminates.
    Auxiliary threads may include in particular the MMT [web server](../applications/server.html).

In most cases, MMT makes reasonable choices which mode to use.
But there are optional command line options to force a certain mode.

### Startup Code

Whenever MMT is run, it looks for a startup script in the location `deploy/startup.msl`.
MMT also tries to load a configuration from `deploy/mmtrc` or from your OS-specific home directory.
This is particularly useful for registering extensions and archives that depend on machine-specific external paths.
An example startup is provided in the file `deploy/startup.msl.example`.

### Customizing MMT

Because MMT is [language and application-independent](../philosophy/independence.html), running MMT by itself does not do anything - MMT must be customized by defining a language and building an application on top of the MMT tool.
The MMT system suite includes [various language definitions](../applications/oaf.html) and [applications](../applications/) to use.
See the respective pages for instructions on loading individual languages and running individual applications.

### Other Ways to Run MMT during Development

Developers may also want to run MMT in different ways.

#### Running from Small Jar Files

The `deploy` folder contains `mmt.jar`, which is simply the union of the individual jars in the `main` folder.
When developing specific parts of MMT, it is usually sufficient to rebuild only the individual jar that was changed.

The `deploy` folder contains shell scripts that automate running from these smaller jars:

* `mmt` (for Unix) and `mmt.bat` (for Windows): executes MMT commands and/or opens an [MMT shell](../applications/shell.html), `mmt -help` displays the available options
* `run-file.bat`: a convenience script for Windows that can be associated with MMT shell scripts.

Users may wish to add the deploy folder to the PATH enviroment variable.

#### Running from Classes

When working in an IDE, you usually want to run MMT directly from classes rather than building a jar file.

For that, use the main class `info.kwarc.mmt.api.frontend.Run` in the project `mmt-api`.

If you need to use additional projects, you can build those into classes as well or use the individual jars mentioned above.

