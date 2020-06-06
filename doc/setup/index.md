---
layout: doc
title: Setting up MMT
---

To obtain and set up MMT, perform the following steps:

### 1. Install Java ≥ 14 (if you haven't already)

Both OpenJDK and Oracle's JDK are supported. Be sure that Java ≥ 14 is in fact the one on your PATH: run `java --version` in your shell to find out.

### 2. Install the MMT development IDE: IntelliJ IDEA + MMT plugin

This step is optional but highly recommended if you want to view or write MMT files yourself. If you just want to sample MMT, you should definitely do it with an IDE.

Install [IntelliJ IDEA](https://www.jetbrains.com/idea/), either Community or Ultimate edition, with a [version compatible with the MMT plugin](https://plugins.jetbrains.com/plugin/11450-mmt/versions) you will install later. Refer to [the IntelliJ IDEA MMT plugin page](https://uniformal.github.io/doc/applications/intellij) for installation of the plugin.

In case you are a student, note that you can freely get the Ultimate version by verification of your student status. Consult the JetBrains homepage for more details.

Alternatively, you can still use [jEdit](http://www.jedit.org/) as your development IDE. See [this article describing the setup of jEdit with MMT](jedit).

### 3. Install Git

MMT uses [git](https://git-scm.com/) internally, so make sure it is installed.

### 4. Install MMT

Until now you have installed the development environment interfacing with your future installation of MMT *itself*. However, you still need the actual MMT software.

There are two options for this step:

#### 4.a. Casual Users: Download the Binary Distribution

Download [`mmt.jar` from UniFormal/MMT's release page](https://github.com/UniFormal/MMT/releases/latest). It provides a self-contained executable file.

`mmt.jar` is released roughly every 2 months.

#### 4.b. Advanced Users: Clone the Source Distribution and Build MMT Yourself

Clone the [UniFormal/MMT repository](https://github.com/UniFormal/MMT) from GitHub:

```
git clone git@github.com:UniFormal/MMT.git
```

Alternatively, if you do not have ssh keys set up, use

```
git clone https://github.com/UniFormal/MMT.git`
```

A detailed explanation of the contents of the repository is available [here](repo). The development happens on the `devel` branch, hence you most likely want to `git checkout devel`, too.

MMT is currently built for `Scala 2.12.9` (incuded in the repository) and building is done with sbt (the Scala build tool).
If you do not have sbt, get the latest version at <https://www.scala-sbt.org/>.

To build, execute

```
cd MMT/src
sbt mmt/deploy
```
 (Detailed instructions for building can be found [here](https://uniformal.github.io/doc/setup/sbt), including a possible error you may encounter and its solution).

This creates many files, in particular the file `mmt.jar` in the folder `../deploy/`.

Change to that directory:
```
cd ../deploy/
```

Besides `mmt.jar`, this directory contains executable scripts (for Windows and Unix) to for running MMT.

### 5. Set Up MMT

If you only want to use MMT from within IntelliJ IDEA, you can skip this step.

In the previous, you obtained the file `mmt.jar` (by downloading or building).

To start setup, open a shell, navigate to the folder MMT/deploy and run `java -jar mmt.jar`.<br>
On Windows, this assumes that `git` can be called from within `sh`, which means `sh` has to be in your PATH; depending on how you installed `git`, this may already be the case. If it is not in your PATH, you can also directly issue the `java -jar mmt.jar` command from within Git Bash from an existing [Git for Windows](https://gitforwindows.org/) installation.

This triggers the setup dialog which does the following:

1. asks for a directory into which MMT should be installed
2. checks out some example content repositories into that directory (This requires git and internet access.),
3. determines the location of your jEdit settings directory and - if it exists - adds the MMT plugin to jEdit.

Further instructions for setting up jEdit are available [here](jedit).

### 6. Run MMT

If you want to use MMT via an IDE, you do not have to run MMT itself.
It will act as a plugin within jEdit or IntelliJ: just start jEdit and open `.mmt` files, or start a new *MathHub*-project within IntelliJ.

Developers or advanced users may want to run MMT directly for various other [applications](../applications/).
The canonical way for this is to run `java -jar mmt.jar`.
(This responds with a simple setup dialog if MMT not installed, and drops to a shell otherwise.)
But depending on your OS and configuration, double-clicking or executing `mmt.jar` may also work.

Additional instructions for running MMT are available [here](running).

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

However, rerunning the full setup is usually not necessary. 
To update your jEdit instance, execute

```
java -jar mmt.jar :jeditsetup install
```
