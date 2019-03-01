---
layout: doc
title: Getting Started with the MMT API
---

This document gets you quickly started with setting up a Scala project for using the MMT API and presents a simple example showing how to list all theories of an archive.

- Audience: Users who want to use the MMT API to query or manipulate knowledge, and possibly have a basic understanding of concepts within MMT (documents, theories, declarations)
- Non-audience: Users who want to do formalization. They will find a fitting getting started guide: [here](../../setup/)

Table of Contents:

<!-- TOC -->

- [I Installation of Java, Scala and your favorite IDE](#i-installation-of-java-scala-and-your-favorite-ide)
- [II Project Setup](#ii-project-setup)
	- [II.1 IntelliJ Project](#ii1-intellij-project)
	- [II.2 Download MMT archive(s)](#ii2-download-mmt-archives)
	- [II.3 Commit to version control](#ii3-commit-to-version-control)
- [III A basic example: listing all theories of an archive](#iii-a-basic-example-listing-all-theories-of-an-archive)

<!-- /TOC -->

Note: Some code snippets are presented without necessary error checking, e.g. files are not closed when exceptions appear.

### I Installation of Java, Scala and your favorite IDE

MMT is written in Scala, but can in principle be used from any other JVM-based language.
In fact, there was [a wrapper for Python](https://github.com/UniFormal/MMTPy), which is discontinued, though.
For simplicity we will stick to Scala in this tutorial.

1. Install a JDK (Java Development Kid) if not already done.<br>
   E.g. OpenJDK: [https://jdk.java.net/](https://jdk.java.net/)

2. Install a Java IDE, we recommend [IntelliJ IDEA](https://www.jetbrains.com/idea/) as the IDE.<br>
   For formalizing things in MMT there is a plugin for that IDE => recommended

3. Install the Scala plugin for IntelliJ IDEA.<br>
   Probably you were prompted to do so during the installation in step 2. Otherwise, open IntelliJ IDEA and install the plugin there. It is advisable to choose a Scala version equal or greater to the one MMT is built with, e.g. the latest Scala version available as a plugin. The Scala version used for building and releasing MMT can be found in MMT's repo in [src/built.sbt](https://github.com/UniFormal/MMT/blob/master/src/build.sbt#L33) (search for "scalaVersion").

### II Project Setup

The following steps can be repeated whenever you would like to start a new project making use of the MMT API.

#### II.1 IntelliJ Project

1. Open IntelliJ IDEA and create a new "Scala, SBT-based" project. Use Git as a VCS.
2. When done, open `build.sbt` from your project folder and include MMT as a dependency (last line):
   ```
   name := "code"

   version := "0.1"

   scalaVersion := "2.12.8"

   libraryDependencies += "mmt" % "mmt" % "15.0.0" from "https://github.com/UniFormal/MMT/releases/download/v15.0.0/mmt.jar"
   
   // Not sure if needed if one depends on the MMT JAR, see https://github.com/UniFormal/MMT/issues/447
   libraryDependencies += "org.scala-lang.modules" %% "scala-parser-combinators" % "1.1.1"
   ```
    You should probably leave `scalaVersion` untouched if you have another one in your file. Also adapt "15.0.0.0" and `mmt.jar` URI to the latest release, see [list of all MMT releases](https://github.com/UniFormal/MMT/releases).

3. Confirm syncing the changes back to your project. IntelliJ IDEA will automatically prompt you to do so.

Recommended optional steps:

4. Download "MMT sources" from the same release as used above to a favorite location of yours, e.g. for the [15th Git release](https://github.com/UniFormal/MMT/releases/tag/v15.0.0) you will find a link ["Source code (zip)"](https://github.com/UniFormal/MMT/archive/v15.0.0.zip) there.

5. In your project above open the project pane on the left and under `External Libraries` click on `sbt: mmt:mmt:15.0.0.jar`.
6. Navigate down all the content of that JAR and choose a file arbitrarily. You will be prompted to add sources.
7. Confirm and use the path to the downloaded ZIP from second-to-last step.

#### II.2 Download MMT archive(s)

1. Create the folder `<your-project>/archives/MathHub/MMT`
2. `cd archives/MathHub/MMT && git submodule add https://gl.mathhub.info/MMT/urtheories.git`

Note that most archives on https://gl.mathhub.info/MMT have their build output committed. During the build of an archive, the so-called relational information is created, which is needed for querying all theories, for instance.\\

TODO: Add note on how to re-build an archive using the API. It's possible to do so using [the command line of MMT](https://uniformal.github.io/doc/setup/running.html).

#### II.3 Commit to version control

For example if you use Git:

`git add --all && git commit -m "First commit"`

Advanced users are potentially interested in using [gitignore/JetBrains.gitignore](https://github.com/github/gitignore/blob/master/Global/JetBrains.gitignore).

### III A basic example: listing all theories of an archive

1. Create a new package under `src/main/scala/`, e.g. `com.example.mmtapi`.
2. Create a new file `Test.scala` *there* and copy-paste the following contents to it:
   ```scala
   package com.example.mmtapi

   import java.io.File

   import info.kwarc.mmt.api.frontend.{ConsoleHandler, Controller}
   import info.kwarc.mmt.api.ontology.IsTheory
   import info.kwarc.mmt.api.utils.FilePath

   object Test {
     def main(args: Array[String]): Unit = {
       val ctrl = new Controller()
       // All logging goes to console
       ctrl.report.addHandler(ConsoleHandler)

       val mmtArchiveHome = ctrl.getHome / "archives" / "MathHub" / "MMT"
       ctrl.addArchive(mmtArchiveHome / "urtheories")

       // The identifier "MMT/urtheories" is specified in "MMT/urtheories/META-INF/MANIFEST.MF"
       // In general every archive specified its ID there.
       val urtheoriesArchive = ctrl.backend.getArchive("MMT/urtheories").get
       // The next two lines trigger processing of the whole archive and make the data
       // available in ctrl.depstore, the dependency store - among others.
       urtheoriesArchive.allContent
       urtheoriesArchive.readRelational(FilePath("/"), ctrl, "rel")

       // Get and print all individual ("inds") objects which are a theory
       val theories = ctrl.depstore.getInds(IsTheory)
       theories foreach println
     }
   }
   ```
3. Run `Test.main` by clicking on the green downwards triangle next to the line `def main(args...`. The expected output is something like
   ```
   user: opened archive <your-project>\archives\MathHub\MMT\urtheories
   user: ... with realizations in folder <your-project>\archives\MathHub\MMT\urtheories\bin
   http://cds.omdoc.org/urtheories?Bool
   http://cds.omdoc.org/urtheories?Dedukti
   http://cds.omdoc.org/urtheories?External
   http://cds.omdoc.org/urtheories?StringInterpolationExample
   http://cds.omdoc.org/urtheories/reflection?LFReflection
   http://cds.omdoc.org/urtheories?Strings
   http://cds.omdoc.org/urtheories?PolyDiff
   http://cds.omdoc.org/urtheories?Subtyping
   [...]

   Process finished with exit code 0
   ```
