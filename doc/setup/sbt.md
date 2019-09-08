---
layout: doc
title: Details on Building using SBT
---

The primary way to build MMT is via the [Scala Build Tool (SBT)](http://www.scala-sbt.org/).
Building using SBT is only needed if you want to develop MMT or want to build from sources.
If you develop in an [IDE](develop), it will automatically for you. Then you only need to use SBT to test your changes before committing.

SBT has to be installed separately but that is straightforward.
We test with SBT 1.1.1 or higher.

SBT must be called from within the `src` folder of the MMT repository, which contains the `build.sbt` file.

### Short Instructions

Within sbt, run `mmt/deploy`. That compiles the sources, packages them into a jar file, and produces the self-contained file `deploy/mmt.jar`, from which MMT can be run with plain Java.

### Detailed Instructions

sbt commands are of the form `sbt PROJECT/TARGET`:

* `PROJECT` is the MMT subproject corresponding to the subfolders, MMT consists of multiple independently maintained subprojects that are defined in the `build.sbt` file and correspond to subfolders of the `src` folder. Example subprojects are `api`, `lf`, `jedit`, etc.
* `TARGET` is the operation to perform, most importantly `deploy`.

For convenience, there is a special wrapper project `mmt` that depends on the most important subprojects so that `sbt mmt/deploy` builds all projects and bundles them into a self-contained jar.
All jar files are stored in the `deploy` folder.
That folder also contains all dependencies, but these are bundled automatically in the big jar file.

### Known Issues

If sbt runs out of memory, give it about 2G of JVM heap space. There are various ways to configure that, e.g., with an environment variable SBT_OPTS="-Xmx2G".

### Editing the build.sbt File

#### TARGET definitions

TARGETs are declared as values of type TaskKey, and defined via

* `t := SCALA-CODE`
* `t <<= SBT-TARGET`

#### Calling targets

```sbt PROJECT/TARGET```

If PROJECT is omitted, TARGET is run on all projects in dependency order. 
If projects have dependencies, sbt never uses the deployed jars.

*pre-defined TARGETs*

* `compile`: compiles in `PROJECT/target/classes`
* `package`: compile; then produce relative (non-assembled) jar in `PROJECT/target/`
* `assembly`: package including all dependent jars to `PROJECT/target/`
* `test`: compiles and runs tests

*our custom TARGETs:*

* `deploy`: package; then move to deploy folder
 * declared globally as TaskKey
 * defined via `deploy <<= CODE` in `settings`

```sbt TARGET```

*custom global TARGETs*

* `cleandoc`: remove files
* `apidoc`: `cleandoc`, then `unidoc` (part of sbt); then `postProcessApi`

#### Defining individual projects

* define `<folder> (project in ...)`
* define dependencies (`dependsOn`)
* reuse common settings (`settings(...)`)
* may add project-specific settings (`settings(...)`)
  * non-standard source folder (`scalaSource in TARGET`)
  * external dependencies (for us usually official Scala libraries) (`libraryDependencies`)
  * resources to be copied into jar (`resourceDirectory`)
  * libraries to be added to classpath during compilation (`unmanagedJars`)
  * override definitions of custom targets (e.g., `deploy <<=`)
