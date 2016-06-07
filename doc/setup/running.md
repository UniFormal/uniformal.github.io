---
layout: doc
title: Running MMT
---

## Running MMT
After [checking out](index#download) and optionally [building](build/) MMT, the jars in the deploy folder can be run normally via Java. The most important Java main class is `info.kwarc.mmt.api.frontend.Run`.
The deploy folder contains shell scripts that automate this:

* `mmt` (for Unix) and `mmt.bat` (for Windows): executes MMT commands and/or opens an [MMT shell](../system/applications/shell.html), `mmt -help` displays the available options
* `run-file.bat`: a convenience script for Windows that can be associated with MMT shell scripts.

Users may wish to add the deploy folder to the PATH enviroment variable.

### Run Modes
MMT can be run in 3 different modes

* *batch:* MMT executes its command-line arguments (if any)
    This is the initial mode. When execution has finished, MMT transitions into interactive or server mode.
* *interactive:* MMT displays a shell and responds to commands interactively
    The end-of-input character transitions into server mode; the command exit terminates MMT as a whole.
* *server:* MMT waits for auxiliary threads (if any) to terminate and then terminates.
    Auxiliary threads may include in particular the MMT [web server](../system/applications/server.html).

In most cases, MMT makes reasonable choices which mode to use.
But there are optional command line options to force a certain mode.

### Startup Code
Whenever MMT is run, it looks for a startup script in the location `deploy/startup.msl`.
This is particularly useful for registering extensions and archives that depend on machine-specific external paths.
Developers who run from class files instead of jar files should place the startup script into the mmt-api project folder.
An example startup is provided in the file `deploy/startup.msl.example`.

### Customizing MMT
Because MMT is [language and application-independent](../system/philosophy/independence.html), running MMT by itself does not do anything - MMT must be customized by defining a language and building an application on top of the MMT tool.
The MMT system suite includes [various language definitions](../system/applications/oaf.html) and [applications](../system/applications/) to use.
See the respective pages for instructions on loading individual languages and running individual applications.
