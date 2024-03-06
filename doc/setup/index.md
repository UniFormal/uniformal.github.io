---
layout: doc
title: Setting up MMT
---

### Requirements

The following outside tools are typically used with MMT:

* To run MMT, you **must** install Java.
* To interact with existing MMT content, you **should** install git.
(MMT itself does not need git, but all formalizations made with MMT are stored in git repositories.)
* To have an IDE for writing MMT content, you **should** install [jEdit](http://jedit.org/).
* To build MMT from sources, you **need** [sbt](https://www.scala-sbt.org/), which you can install by itself or obtain as a part of a Scala IDE (see next item).
* If you also plan to develop MMT, you **should** install a Scala IDE such as IntelliJ with the [Scala plugin](https://plugins.jetbrains.com/plugin/1347-scala). Note that MMT uses the latest Scala 2.x, not Scala 3.

### Step 1: Get the MMT jar file

#### Option 1a: Download a binary release

Download [the latest `mmt.jar` from UniFormal/MMT's release page](https://github.com/UniFormal/MMT/releases/latest)

#### Option 1b: Build from sources

Use `git clone https://github.com/UniFormal/MMT.git`.

If recommended/instructed switch to the `devel` branch to get the latest updates or create your own branch off `devel`.

Build MMT via `cd MMT/src; sbt mmt/deploy` or by triggering an MMT build from within the Scala IDE of your choice.

### Step 2: Setup MMT

Excecute the MMT jar file via `java -jar mmt.jar`.

This triggers the setup dialog which does the following:
1. asks for a directory into which MMT content should be installed,
1. checks out some example content repositories into that directory (requires git and internet access),
1. runs MMT to build those repositories,
1. if you have installed jEdit before, configure it for use as an MMT IDE.
   (Further instructions for setting up jEdit are available [here](jedit).)

### NOTES

- OpenJDK and Oracle's JDK are supported.
- You can rerun this setup dialog (e.g., after updating MMT) by running `java -jar mmt.jar :setup`
  To install/update only the jEdit integration, use `java -jar mmt.jar :jeditsetup install`.
- In case you are a student, you can get IntelliJ Ultimate for free. Consult the JetBrains homepage for more details.
- [Here is a detailed explanation of the MMT repository's contents](repo).

