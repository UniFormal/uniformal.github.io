---
layout: doc
title: Setting up MMT
---

### Step 1: Get MMT

#### Option 1a: Download binary release

1. Install Java ≥ 14 (check via `java --version`)
2. Install [git](https://git-scm.com/) (check `git --help` works)
3. Download [the latest `mmt.jar` from UniFormal/MMT's release page](https://github.com/UniFormal/MMT/releases/latest)

#### Option 1b: build yourself + dev environment for developing MMT itself

1. Install Java ≥ 14 (check via `java --version`)
2. Install [git](https://git-scm.com/) (check `git --help` works)
3. Install [sbt](https://www.scala-sbt.org/)
4. Install [IntelliJ IDEA](https://www.jetbrains.com/idea/) (if you want to later use the MMT plugin, get a [version compatible with the MMT plugin](https://plugins.jetbrains.com/plugin/11450-mmt/versions); tldr: a non-beta version)
5. `git clone --branch devel https://github.com/UniFormal/MMT.git`
6. Import a new IntelliJ project from `mmt/src` (choose "SBT").

In case you want to compile MMT to a self-contained single binary `mmt.jar`, refer to [building `mmt.jar` with SBT here](https://uniformal.github.io/doc/setup/sbt).

### Step 2: Setup environment for formalizing in MMT

If you want to formalize things in MMT's language ("MMT surface syntax") with pretty syntax highlighting, follow these steps:

1. Get MMT in some way as explained above
2. Install [IntelliJ IDEA](https://www.jetbrains.com/idea/) with a [version compatible with the MMT plugin](https://plugins.jetbrains.com/plugin/11450-mmt/versions) (tldr: a non-beta version)
3. [Install the MMT plugin](https://uniformal.github.io/doc/applications/intellij/)
4. In IntelliJ you can now create (and open existing) "MathHub projects".

   Every MathHub project stores the path to an `mmt.jar` in its project files.
   Hence, if you are a developer and made changes to the MMT repository you cloned above, do not expect those changes to be reflected when working with the MMT plugin. You need to rebuild an `mmt.jar` first. Beware that you need to reopen IntelliJ for the file overwriting of `mmt.jar` to be possible and to take effect.

Alternatively &mdash; not recommended to beginners, you can still use [jEdit](http://www.jedit.org/) as your development IDE. See [this article describing the setup of jEdit with MMT](jedit).

### Step 3: Running MMT from CLI

Some users or applications require running MMT from CLI. If you only want to use MMT from within IntelliJ IDEA, you can skip this step.

1. Get MMT in some way as explained above
2. Open a shell and `cd` to the location of your `mmt.jar`
3. `java -jar mmt.jar`

   This triggers the setup dialog which does the following:

   1. asks for a directory into which *a* MMT user folder should be installed,
   2. checks out some example content repositories into that directory (requires git and internet access),
   3. determines the location of your jEdit settings directory and - if it exists - adds the MMT plugin to jEdit.

   Further instructions for setting up jEdit are available [here](jedit).


   You may want to rerun this setup when having updated `mmt.jar`: `java -jar mmt.jar :setup`
   However, rerunning the full setup is usually not necessary. To update your jEdit instance, execute `java -jar mmt.jar :jeditsetup install`.

### NOTES

- OpenJDK and Oracle's JDK are supported.
- In case you are a student, you can get IntelliJ Ultimate for free. Consult the JetBrains homepage for more details.
- [Here is a detailed explanation of the MMT repository's contents](repo).

