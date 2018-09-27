---
layout: doc
title: Setting up MMT
---

To obtain and set up MMT, perform the following steps:

### 1) Install Java (if you haven't already)

MMT targets `Java 8` (both `OpenJDK` and `OracleJDK` are supported), and preliminary support for `Java 9` exists. `Java 7` is no longer officially supported. 

### 2) Install jEdit (if you haven't already)

[jEdit](http://jedit.org/) is a Java-based text editor.
MMT includes a jEdit plugin, which turns jEdit into an IDE for MMT.
This step is optional but highly recommended if you want to write or view MMT files.
If you just want to sample MMT, you should definitely do it with jEdit.

Concretely:

* Download and install jEdit.
* Run jEdit once and close it again.
  (That allows MMT to automatically find the jEdit installation and configure it to work with MMT.)

### 3) Install MMT

There are two options for this step:

#### a) Casual Users: Download the Binary Distribution

The file `mmt.jar` provides a self-contained executable file.

`mmt.jar` is released roughly every 2 months.
A list of releases can be found on the [GitHub Releases page](https://github.com/UniFormal/MMT/releases/). 
The latest one can be downloaded by clicking the top most item on the list. 

#### b) Advanced Users: Clone the Source Distribution and Build MMT Yourself

Clone the [MMT repository](https://github.com/UniFormal/MMT) from GitHub:

```
git clone git@github.com:UniFormal/MMT.git
```

Alternatively, if you do not have ssh keys set up, use

```
git clone https://github.com/UniFormal/MMT.git`
```

A detailed explanation of the contents of the repository is available [here](repo.html).

MMT is currently built for `Scala 2.12.3` (incuded in the repository) and building is done with sbt (the Scala build tool).
If you do not have sbt, you can get it [here](http://www.scala-sbt.org/).

To build, execute

```
cd MMT/src
sbt mmt/deploy
```
 (Detailed instructions for building can be found [here](build.html)).

This creates many files, in particular the file `mmt.jar` in the folder `../deploy/`.

Change to that directory:
```
cd ../deploy/
```

Besides `mmt.jar`, this directory contains executable scripts (for Windows and Unix) to for running MMT.

### 4) Set Up MMT

In the previous, you obtained the file `mmt.jar` (by downloading or building).

To start setup open a shell and run `java -jar mmt.jar`.<br>
On Windows, be sure to have `sh` on your current PATH, inside which `git` is available. For instance, you could directly issue the `java -jar mmt.jar` command from within Git Bash from an existing [Git for Windows](https://gitforwindows.org/) installation.

This triggers the setup dialog which does the following:

1. asks for a directory into which MMT should be installed
2. checks out some example content repositories into that directory (This requires git and internet access.),
3. determines the location of your jEdit settings directory and - if it exists - adds the MMT plugin to jEdit.

Further instructions for setting up jEdit are available [here](jedit.html).

### 5) Run MMT

If you want to use MMT via jEdit, you do not have to run MMT itself.
It will act as a plugin within jEdit: just start jEdit and open `.mmt` files.

Developers or advanced users may want to run MMT directly for various other [applications](../applications/).
The canonical way for this is to run `java -jar mmt.jar`.
(This responds with a simple setup dialog if MMT not installed, and drops to a shell otherwise.)
But depending on your OS and configuration, double-clicking or executing `mmt.jar` may also work.

Additional instructions for running MMT are available [here](running.html).

### Later: Update MMT

This step is not part of the initial setup.
It is only needed later when updating your MMT installation to the latest release.

To update MMT, replace the file `mmt.jar`, i.e.,

* binary distribution: download the new file and save it over `deploy/mmt.jar`
* source distribution: update your working copy and rebuild.

To rerun setup, execute

```
java -jar mmt.jar :setup
```

However, rerunning setup is usually not necessary.
