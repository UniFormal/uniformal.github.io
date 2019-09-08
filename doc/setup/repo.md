---
layout: doc
title: The MMT Repository
---

The MMT source, binary releases, and documentation are maintained in an GitHub repository.
The base URL of the repository is `https://github.com/UniFormal/MMT`.
The content of the subdirectories is as follows:

* `deploy/`: The jar files ready to be used without building. This directory is self-contained, i.e., includes all its dependencies (except for the Java runtime of course).
    Their status is somewhat between release and nightly build: I commit new builts frequently, and they are usually stable.
    The subfolders are
  * `main`: all jar files of MMT projects
  * `lib`: all jar files that MMT depends on, including the Scala library The only extenal dependency is the JVM itself. For most parts, Java 6 is fine; occassionally Java 7 is needed. The run scripts automatically put all necessary jars on the Java classpath.
  * `lfcatalog`: the jar files of the LF catalog, to be used with Twelf
  * `jedit-plugin`: all jar and other files needed for the plugin for jEdit
* `src/`: All sources.

MMT is divided into various sub-projects. Each project name occurs as the name of a subfolder in `src/` and of a jar file in `deploy/`. 

### Projects

The projects that comprise MMT are

* `mmt-api`: the [main project](../api/) (depends on `tiscaf`)
* `mmt-X`: plugins for MMT (depends at least on `mmt-api`), specifically `X` can be:
    * `lf`: [**LF**](http://en.wikipedia.org/wiki/Logical_Framework#LF) type checking and importer for [Twelf](http://twelf.org/wiki/Main_Page) (depends additionally on `lfcatalog` if the Twelf importer is used)
    * `mizar`: importer for Mizar
    * `owl`: importer for OWL
    * `tptp`: importer for TPTP
    * `mathscheme`: importer for MathScheme
* `X-mmt`: MMT acting as plugin or service to other applications (depends on at least `mmt-api`), specifically `X` can be
    * `jEdit`: MMT editing support in [jEdit](../jedit) (depends additionally on `mmt-lf`)
    * `hets`: MMT logic compilation for Hets
* `lfcatalog`: a non-MMT-related project for the Twelf catalog, which is used by Twelf (depends on tiscaf)
* `tiscaf`: a copy of the [HTTP server](../../applications/server) tiscaf, which MMT uses, with a couple of fixes and improvements

All projects are written in Scala and depend on the scala library. The appropriate library is provided as well. Later versions of Scala may or may not work.

If projects have branches (usually only `mmt-api`), their folder contains `trunk` and `branches` folders. Generally, the trunk is stable, and the branches are experimental. 
