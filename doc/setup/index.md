---
layout: doc
title: Setting up MMT
---

There are 2 ways to obtain MMT:

* download the binary distribution
  * recommended for casual users and for sampling MMT
  * self-contained except for needing the usual Java runtime environment
* clone the source distribution and build MMT yourself
  * recommended for advanced users or developers
  * additionally needs sbt (the Scala build tool) for building

MMT is currently built for `Scala 2.12.5`. MMT targets `Java 8` (both `OpenJDK` and `OracleJDK` are supported), and preliminary support for `Java 9` exists. `Java 7` is no longer officially supported. 

Before installing MMT, you can optionally install [jEdit](http://jedit.org/).
If jEdit is installed, MMT will automatically configure it to serve as an MMT IDE.

This is recommended if you want to write or view MMT files.
If you just want to sample MMT, you should definitely do it with jEdit.
  
### Option 1: Via the Binary Disribution

Since Fall 2017, a new binary version of MMT is released roughly every six weeks. 
See the [releases](../development/releases.html) page for more details. 

A list of releases can be found on the [GitHub Releases page](https://github.com/UniFormal/MMT/releases/). 
The newest binary can be downloaded by clicking the top most item on the list. 

### Option 2: Via the Source Distribution

Clone the [MMT repository](https://github.com/UniFormal/MMT) from GitHub:

```
git clone git@github.com:UniFormal/MMT.git
```

Alternatively, if you do not have ssh keys set up, use

```
git clone https://github.com/UniFormal/MMT.git`
```

A detailed explanation of the contents of the repository is available [here](repo.html).

Then build MMT using sbt (detailed instructions for building can be found [here](build.html)). 
If you do not have sbt, you can get it [here](http://www.scala-sbt.org/).
```
cd MMT/src
sbt mmt/deploy
```

This creates many files, in particular the file `mmt.jar` in the folder `../deploy/`. Change to that directory:
```
cd ../deploy/
```

Besides `mmt.jar`, this directory contains executable scripts (for Windows and Unix) to for running MMT.

### Setup MMT

This assumes jEdit is installed and the MMT jar is obtained as described above.
If you have not already done so, start jEdit once so that it initializes its folders, which the MMT installer will look for.

To start setup open a shell and run `java -jar mmt.jar` (or one of the convenience scripts).
This triggers the setup dialog which does the following:

1. asks for directories into which MMT and MMT content should be placed.
2. checks out some example content repositories into that directory (This requires git and internet access.),
3. guesses the location of your jEdit settings directory and - if it exists - adds the MMT plugin to jEdit.

Further instructions for setting up jEdit are available [here](jedit.html).

### Run MMT

If you want to use MMT via jEdit, you do not have to run MMT itself.
It will act as a plugin within jEdit.

Developers or advanced users may want to run MMT directly for various other [applications](../applications/).
The canonical way for this is to run `java -jar mmt.jar`.
(This responds with a simple setup dialog if MMT not installed, and drops to a shell otherwise.)
But depending on your OS and configuration, double-clicking or executing `mmt.jar` may also work.

If you have obtained MMT by building from sources make sure to go to the deploy folder first.

```
cd ../deploy
java -jar mmt.jar
```
You can now either use [jEdit](jedit.html) to work with .mmt files or run MMT natively

Additional instructions for running MMT are available [here](running.html).

### Update MMT

To update MMT, replace the file `mmt.jar`, i.e.,

* binary distribution: download the new file and save it over `deploy/mmt.jar`
* source distribution: update your working copy and rebuild.

To rerun setup, execute

```
java -jar mmt.jar :setup
```

However, rerunning setup is usually not necessary.
