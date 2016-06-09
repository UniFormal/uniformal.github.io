---
layout: doc
title: sbt
---
### TARGET definitions

TARGETs are declared as values of type TaskKey, and defined via

* `t := SCALA-CODE`
* `t <<= SBT-TARGET`


### Calling targets

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
* `postProcessApi`: change paths
* `apidoc`: `cleandoc`, then `unidoc` (part of sbt); then `postProcessApi`

### Defining individual projects

* define `<folder> (project in ...)`
* define dependencies (`dependsOn`)
* reuse common settings (`settings(...)`)
* may add project-specific settings (`settings(...)`)
  * non-standard source folder (`scalaSource in TARGET`)
  * external dependencies (for us usually official Scala libraries) (`libraryDependencies`)
  * resources to be copied into jar (`resourceDirectory`)
  * libraries to be added to classpath during compilation (`unmanagedJars`)
  * override definitions of custom targets (e.g., `deploy <<=`)
