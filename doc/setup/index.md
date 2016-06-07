---
layout: doc
title: Setting up MMT
---

## Setting up MMT

### Download

There are multiple ways to download MMT:

* The full repository including jars and sources as [zip](https://github.com/KWARC/MMT/archive/master-binaries.zip), on [github](https://github.com/KWARC/MMT) or via subversion at `https://svn.kwarc.info/repos/MMT`,
* The most recent [standalone jar](https://github.com/KWARC/MMT/raw/master-binaries/deploy/mmt.jar).

We recommend you save the contents of the zip/repository in a folder `<path>/MMT/system` and any MMT archives in `<path>/MMT/content`, since MMT by default assumes this directory structure.

### Installation

For writing and editing documents in MMTs native syntax we recommend [jEdit](jedit.html). If jEdit is installed, you can run `system/deploy/mmt :setup <path>/mmt/system` or (on Windows) `system\deploy\mmt.bat :setup <path>\mmt\system` to create a basic configuration, especially if you want to see some examples or use MMT with jEdit. This command 

1. sets `<path>/MMT/content` as the default directory for content repositories,
2. checks out some example content repositories into that directory (This requires git and internet access.),
3. guesses the location of your jEdit settings directory and - if it exists - adds the MMT plugin to jEdit.
(You will still have to manually perform Steps 2+3 in the [jEdit plugin configuration](jedit.html).)

[MMT archives](../system/applications/archives.html) can be found at [MathHub](../system/applications/oaf.html). If step 2. above fails for some reason, you should get at least the essential archive [`MMT/urtheories`](https://gl.mathhub.info/MMT/urtheories) there. Further recommended archives are [`MMT/examples`](https://gl.mathhub.info/MMT/examples) and [`MMT/LATIN`](https://gl.mathhub.info/MMT/LATIN).

You can now either use [jEdit](jedit.html) to work with .mmt files or [run](running.html) MMT for various other [applications](../system/applications/).
