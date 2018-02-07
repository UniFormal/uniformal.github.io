---
layout: doc
title: Building MMT
---

Building is only needed if you want to develop MMT or want to build from sources.

Everything below requires a Java Runtime Environment.
MMT is developed on, tested on, and released for JRE 8.
JRE 7 may still work but is not officially supported anymore.
JRE 9 support of Scala is still somewhat experimental and building or running MMT on JRE 9 may not work correctly yet.

### Building using SBT

The primary way to build MMT is via the [Scala Build Tool (SBT)](http://www.scala-sbt.org/).
SBT has to be installed separately but that is straightforward.
We test with SBT 1.1.0 or higher. (Due to a bug in sbt 1.1.0, you should use sbt 1.0.4 on Windows.)

sbt must be called from within the `src` folder of the MMT repository, which contains the `build.sbt` file.

If sbt runs out of memory, give it about 2G of JVM heap space. There are various ways to configure that, e.g., with an environment variable SBT_OPTS="-Xmx2G".

#### Short explanation

Within sbt, run `mmt/deploy`. That compiles the sources, packages them into a jar file, and produces the self-contained file `deploy/mmt.jar` that can be run with plain Java.

The first time MMT is run, it prompts for setup instructions.

#### Detailed explanation

sbt commands are of the form `sbt PROJECT/TARGET`:

* `PROJECT` is the MMT subproject corresponding to the subfolders, MMT consists of multiple independently maintained subprojects that are defined in the `build.sbt` file and correspond to subfolders of the `src` folder. Example subprojects are `api`, `lf`, `jedit`, etc.
* `TARGET` is the operation to perform, most importantly `deploy`.

For convenience, there is a special wrapper project `mmt` that depends on the most important subprojectsso that `sbt mmt/deploy` builds all projects and bundles them into a self-contained jar.
All jar files are stored in the `deploy` folder.
That folder also contains all dependencies, but these are bundled automatically in the big jar file.

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
