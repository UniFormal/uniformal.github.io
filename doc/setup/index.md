---
layout: doc
title: Setting up MMT
---

### Obtain MMT

There are 2 ways to use MMT:

* download the binary distribution
  * recommended for casual users
  * self-contained except for needing the usual Java run time environment (Java 7 works fine, Java 8 has not been tested extensively, open-jdk has occasionally caused minor problems)
* clone the source distribution and build MMT yourself
  * recommended for advanced users or developers
  * additionally needs sbt (the Scala build tool) for building

Before installing MMT, you can optionally install [jEdit](http://jedit.org/).
If jEdit is installed, MMT will automatically configure it to serve as an MMT IDE.
  
#### Binary Disribution

A list of releases can be found on the [GitHub Releases page](https://github.com/UniFormal/MMT/releases/). 
The newest release is at the top of the list. 

To keep up-to-date, you can [subscribe to the Atom Feed](https://github.com/Uniformal/MMT/releases.atom). 

#### Source Distribution

Clone the [MMT repository](https://github.com/UniFormal/MMT) from github:
```
git clone git@github.com:UniFormal/MMT.git
```
or
```
svn checkout https://github.com/UniFormal/MMT.git/trunk
```
A detailed explanation of the contents of the repository is available [here](repo.html).

If you do not have sbt, get it [here](http://www.scala-sbt.org/).

Then build MMT using sbt (detailed instructions for building can be found [here](build.html)):

```
cd MMT/src
sbt deploy
```

This should create many files, of course, in particular the file `mmt.jar` in the folder `../deploy/`. Change to that directory:
```
cd ../deploy/
```

### Setup MMT
This assumes jEdit is installed and the MMT jar is obtained as described above.
It is sometimes required to start jEdit once before running MMT setup as it creates some folders on first run that MMT installer uses.

To start setup run `java -jar mmt.jar`.
This triggers the setup dialog which does the following:

1. asks for directories into which MMT and MMT content should be placed.
2. checks out some example content repositories into that directory (This requires git and internet access.),
3. guesses the location of your jEdit settings directory and - if it exists - adds the MMT plugin to jEdit.

Further instructions for setting up jEdit are available [here](jedit.html).
In particular, the MMT plugin depends on some other standard plugins that you have to install.

### Run MMT

To run MMT it is sufficient to run the jar file obtained as described above.
The canonical way for this is run `java -jar mmt.jar`.
But depending on your OS and configuration, double-clicking or executing `mmt.jar` may also work.

This responds with a simple setup dialog if MMT not installed, and drops to a shell otherwise.

If you have obtained MMT by building from sources make sure to go to the deploy folder first.

```
cd ../deploy
java -jar mmt.jar
```
You can now either use [jEdit](jedit.html) to work with .mmt files or run MMT natively for various other [applications](../applications/).

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

