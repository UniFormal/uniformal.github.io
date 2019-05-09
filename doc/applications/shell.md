---
layout: doc
title: The MMT Shell
---

The MMT shell is invoked by [running](../setup/running.html) mmt.

### Shell Commands
The language of shell commands is implemented by the [`info.kwarc.mmt.api.frontend.Action`](apidoc://info.kwarc.mmt.api.frontend.Action) class.
Each subclass comes with scaladoc and can be best understood by browsing the known subclasses in the API documentation.

The up-to-date context-free grammar for shell commands is part of the constructor parser in the companion object `Action` and can be best understood by reading the source code.

### ANSI Formatting in the MMT Shell
Some shell output uses [ANSI escapes](https://en.wikipedia.org/wiki/ANSI_escape_code) for highlighting. To display the formating, you can use [ansicon](https://github.com/adoxa/ansicon) for the windows console or [ansi console](http://mihai-nita.net/2013/06/03/eclipse-plugin-ansi-in-console/) for the eclipse console. (Both are optional and very easy to install and use.) Unix shells should understand it natively.

### MMT Scripts
An MMT script is a text file containing one shell command per line. (Empty lines are allowed, lines starting with // are ignored.)
The customary file ending for MMT scripts is `.msl`.
These scripts can be run with the file command below.

### Individual Shell Commands
The following documents some important individual commands.
This documentation uses upper case names for argument types.
Some common argument types are:

* `FILE`: a file name (relative to the current directory)
* `FOLDER`: a folder name (relative to the current directory)
* `U`: an MMT URI (relative to the current base URI)
* `STRING`: a string

#### Basic Commands

* `exit`: exits MMT (releases all resources and terminates all spawned threads).
* `extension STRING`: registers the [extension](../api/extensions/) whose qualified Java class name is `STRING`. The class must be on the class Java path already.
* `base URI`: sets the base URI to U.
* `scala`: drops to the scala shell. Within the scala shell, some special features are available:
  * The variable controller is bound to the MMT controller, which gives users full access to the internal MMT state.
  * MMT interpolations is active: for example, the string `mmt"TERM"` parses `TERM` as an MMT term and returns the resulting object.

#### Logging
See [log](../api/log.html) for the logging model.

* `log console`: adds standard output as a logging receiver.
* `log file FILE`: adds the file FILE as a logging receiver.
* `log filets FILE`: as above but adds timestamps to all log messages.
* `log+ STRING`: switches logging on for the component with id STRING.
* `log- STRING`: switches logging off for the component with id STRING.

#### Defining make-style targets

* `file FILE [STRING]`: runs the shell file `FILE` (which in particular registers all macro definitions in FILE); if provided, immediately runs one of those macros.
* `define STRING`: begins the definition of a named macro.
* `end`: ends the current macro definition.
* `do STRING [FOLDER]`: runs the previously registered macro (FOLDER can be used to disambiguate between multiple macros of the same name defined in different folders)

#### Working with MMT content
MMT reads content automatically by searching for the needed [MMT URI](../api/uris.html) on the math path (see below).
Therefore, there are only a few commands for directly accessing content.

* `read FILE`: reads a file into memory. Usually this is not necessary because resources are read automatically on demand.
* `get U [CONTENT] [PRESENT] OUTPUT`: retrieves the resource with MMT URI `U` and applies various operations to it. This command is largely superseded by the [HTTP interface](server.html) but occasionally useful to run on the shell.
  * `CONTENT` can be
    * omitted: simply retrieves `U`
    * `closure`: computes the dependency closure of U and retrieves all elements in it
    * `elaborate`: retrieves `U` and elaborates it
    * `component STRING`: retrieves the component `STRING` of `U`
  * `PRESENT` can be
    * omitted: presentation as text
    * `present STYLE`: presentation using the style `STYLE`
  * `OUTPUT` can be
    * `print`: print to standard output
    * `write FILE`: write to file `FILE`
    * `window STRING`: output to a separate window with id `STRING`.
        If the id has not been used before, a new window is created; size and position of the created windows can be controlled by other shell commands
    * `respond`: no output (useful for programmers who wish to access the result programmatically)
* `navigate U`: does nothing itself but sends the navigation event to all registered change listener [extensions](../api/extensions/), which include the [GUI](gui.html) (if started).
* `clear`: removes all content from memory.

#### The Math Path
The math path maintains a catalog that maps [MMT URIs](../api/uris.html) to physical locations.
Several commands exist to add entries to the math path.

* `mathpath archive FILE`: adds the location of an MMT archive.
The path is searched recursively and registers all found archive folders and mar files.
* `mathpath local`: adds the local file system, i.e., file:// URIs are mapped to themselves.
* `mathpath fs FILE U`: adds a catalog entry that maps every URI of the form `U/REST` to the physical location `FILE/REST` on the local file system.
* `mathpath java FILE`: adds a catalog entry for modules written directly in Scala/Java. URIs are interpreted as fully qualified Java class names.

#### Archives and Building

* `archive ID relational`: loads the relational knowledge into memory.
* `build ID TARGET`: runs a build target. See the documentation of the [build tool](building.html) for details on running build commands on archives.

#### Remote Archives

* `oaf root FOLDER URI`: sets a local folder as the root for git-clones of archives in the [OAF](oaf.html).
* `oaf clone GROUP/REPOS`: git-clones the archive `URI/GROUP/REPOS` into `FOLDER/GROUP/REPOS` and recursively clones its dependencies.
* `oaf pull`: git-pulls (git pull origin master) all repositories in `FOLDER`.
* `oaf pushes`: git-pushes all repositories in `FOLDER`.
* `oaf setremote`: configures the remote URI of all repositories in `FOLDER` (useful to switch from https to ssh or when the location of the server has changed).

#### Remote Administration

* `remote ID COMMAND`: executes a command on a remote MMT client that connected via the remote admin extension

See [`web.RemoteActionServer`](apidoc://info.kwarc.mmt.api.web.RemoteActionServer) for details.

#### Applications
Note that [GUI](gui.html) and [HTTP server](server.html) run in separate threads. MMT will not terminate if these threads are still active.

* `server on PORT`: starts the [HTTP server](server.html) at the port `PORT`.
* `server off`: stops the HTTP server.
* `gui on`: starts the [MMT GUI](gui.html).
* `gui off`: stops the MMT GUI. 
