---
layout: doc
title: Building MMT
---

Building is only needed if you want develop MMT or want to build from sources.

### Building using SBT

The primary way to build MMT is via the [Scala Build Tool (SBT)](http://www.scala-sbt.org/).
SBT has to be installed separately but that is straightforward. (SBT version 0.13.5 or higher is required for some build targets).

sbt must be called from within the `src` folder of the MMT repository, which contains the `build.sbt` file.
SBT commands are of the form `sbt PROJECT/TARGET`, where

* `PROJECT` is the MMT subproject corresponding to the subfolders, e.g., `api`, `lf`, `jedit`, etc.
* `TARGET` is the operation to perform, most importantly `deploy`, which compiles the sources, packages them into a jar file, and deposits the jar into the deploy folder. 

For convenience, there is a special wrapper project that depends on most other projects so that `sbt mmt/deploy` builds all projects.
Moreover, it assembles all jars into a single self-contained package in `deploy/mmt.jar`.

There is a special build target for the jEdit plugin: `sbt jedit/install` copies MMT's jars to jEdit's settings folder.
See [sbt](sbt.html) for details on how to edit/configure the sbt file.

### Developing and building using IntelliJ

For interactive development [IntelliJ (community edition)](https://www.jetbrains.com/idea/) with an installed Scala plugin allows to create a new SBT-based project from the src project location that contains the `build.sbt` file. 
Currently, the sbt importer of IntelliJ is broken, but `sbt gen-idea` will generate an IntelliJ project that can be opened (error messages during opening can be disregarded).
IntelliJ settings are not supposed to be comitted. Any changes should be made within build.sbt and IntelliJ SBT projects be refreshed.

### Developing and building using Eclipse

`sbt eclipse` will create Eclipse project files. In Eclipse use the Import Wizard to import Existing Projects into Workspace.

### Building the API Documentation

`sbt apidoc` (based on [sbt-unidoc](https://github.com/sbt/sbt-unidoc)) creates the API documentation into the folder `doc/api`.
When rebuilding, you should delete this folder first.

<!-- TODO adapt to git
The `svn:auto-props` svn property of the toplevel folder ensures that new files (e.g., html, css, and js) get proper MIME types when added to the repository. (Files with wrong mime types will not be properly served by the SVN webserver.) --> 
