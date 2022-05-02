---
layout: doc
title: Setting up MMT
---

### Requirements

The following outside tools are typically used with MMT:

* To run MMT, you must install Java.
* To interact with MMT content, you should install git.
MMT itself does not need git, but all formalizations made with MMT are stored in git repositories.
* To have an IDE for writing MMT content, you should install [IntelliJ IDEA](https://www.jetbrains.com/idea/) or [jEdit](http://jedit.org/).
* To build MMT from sources, you need [sbt](https://www.scala-sbt.org/) or an IDE that includes it.
* If you also plan to develop MMT itself, you should install a Scala IDE such as IntelliJ with the [Scala plugin](https://plugins.jetbrains.com/plugin/1347-scala).

### Step 1: Get the MMT jar file

#### Option 1a: Download a binary release

Download [the latest `mmt.jar` from UniFormal/MMT's release page](https://github.com/UniFormal/MMT/releases/latest)

#### Option 1b: Build from sources

Use `git clone https://github.com/UniFormal/MMT.git`.

If recommended/instructed switch the `devel` branch to get the latest updates or create your own branch off `devel`.

Build MMT via `cd MMT; sbt mmt/deploy`.

### Step 2: Setup MMT

Excecute the MMT jar file via `java -jar mmt.jar`.

This triggers the setup dialog which does the following:
1. asks for a directory into which MMT content should be installed,
1. checks out some example content repositories into that directory (requires git and internet access),
1. runs MMT to build those repositories,
1. if you have installed jEdit before, configures it for use with MMT.
   Further instructions for setting up jEdit are available [here](jedit).

You can rerun this setup dialog (e.g., after updating MMT) by running `java -jar mmt.jar :setup`
To install/update only the jEdit integration, use `java -jar mmt.jar :jeditsetup install`.

If you want to use IntelliJ instead of jEdit, additionally do the following:
1. Install [IntelliJ IDEA](https://www.jetbrains.com/idea/) with a [version compatible with the MMT plugin](https://plugins.jetbrains.com/plugin/11450-mmt/versions) (tldr: a non-beta version)
2. [Install the MMT plugin](https://uniformal.github.io/doc/applications/intellij/)
You can now use IntelliJ to create (and open existing) "MathHub projects".
Every MathHub project stores the path to an `mmt.jar` in its project files.
Hence, if you are a developer and made changes to the MMT repository you cloned above, do not expect those changes to be reflected when working with the MMT plugin. You need to rebuild an `mmt.jar` first. Beware that you need to reopen IntelliJ for the file overwriting of `mmt.jar` to be possible and to take effect.


### NOTES

- OpenJDK and Oracle's JDK are supported.
- In case you are a student, you can get IntelliJ Ultimate for free. Consult the JetBrains homepage for more details.
- [Here is a detailed explanation of the MMT repository's contents](repo).

