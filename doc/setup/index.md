---
layout: doc
title: Setting up MMT
---

### Obtain MMT

There are 2 ways to use MMT:

* download the binary distribution
  * recommended for casual users
  * self-contained except for needing the usual Java run time environment
* clone the source distribution and build MMT yourself
  * recommended for advanced users or developers
  * additionally needs sbt (the Scala build tool) for building

Before installing MMT, you can optionally install [jEdit](http://jedit.org/).
If jEdit is installed, MMT will automatically configure it to serve as an MMT IDE.
  
#### Binary Disribution

Download the self-contained binary from [https://github.com/UniFormal/MMT/releases/latest] on github.

Run the jar file.
The canonical way for this is run `java -jar mmt.jar`.
But depending on your OS and configuration, double-clicking or executing `mmt.jar` may also work.

This responds with a simple setup dialog.

To update MMT in the future, simply repeat these steps.

#### Source Distribution

Clone the [MMT repository](https://github.com/UniFormal/MMT) from github:
```git clone git@github.com:UniFormal/MMT.git```
or
```svn checkout https://github.com/UniFormal/MMT.git/trunk```
A detailed explanation of the contents of the repository is available [here](repo.html).


If you do not have sbt, get it [here](http://www.scala-sbt.org/).

Then build MMT using sbt:
```
cd MMT/src

sbt deploy
```

Finally, run the main jar file:
```
cd ../deploy

java -jar mmt.jar
```

This responds with a simple setup dialog.

To update MMT in the future, simply pull/update your working copy and rebuild.

Detailed instructions for building can be found [here](build.html).

### Setup MMT

The setup dialog triggered above does the following:

1. asks for directories into which MMT and MMT content should be placed.
2. checks out some example content repositories into that directory (This requires git and internet access.),
3. guesses the location of your jEdit settings directory and - if it exists - adds the MMT plugin to jEdit.

Further instructions for setting up jEdit are available [here](jedit.html).
In particular, the MMT plugin depends on some other standard plugins that you have to install.

### Run MMT

You can now either use [jEdit](jedit.html) to work with .mmt files or run MMT natively for various other [applications](../applications/).

Instructions for running MMT are available [here](running.html).
