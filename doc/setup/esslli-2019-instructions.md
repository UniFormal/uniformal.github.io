---
layout: doc
title: ESSLLI 2019: Formalizing the Zoo of Logical Systems - Setting up MMT
---

# ESSLLI 2019: Formalizing the Zoo of Logical Systems

## Logic Formalizations

The example logics of this course are available in the [esslli2019 branch of the LATIN2 archive](https://gl.mathhub.info/MMT/LATIN2/tree/esslli2019).

You should start with the files in the folder `introductory_example`, specifically the file `pl.mmt`.

## Software installation instructions (https://tinyurl.com/esslli-zoo)

We will use MMT for formalizing logics.

To obtain and set up MMT, perform the following steps.
Some dependencies you likely already have, e.g., Java and Git. You can skip those steps.

### 1) Install or update Java

MMT is written in the Scala programming language, which compiles to the JVM.
So we need to install both a JVM and Scala build support (sbt).

Unfortunately, the choice of Java version and Java implementation is subtle at the moment due to the rather confusing recent changes by Oracle.

On Unix systems, the package manager usually chooses a good one.
On Windows systems, the latest free version by Oracle is a good default. 

### 2) Install Scala

For building Scala programs, we use the Scala build tool (sbt).
You can get it [here](http://www.scala-sbt.org/).

### 3) Install jEdit

[jEdit](http://jedit.org/) is a Java-based text editor.
MMT includes a jEdit plugin, which turns jEdit into an IDE for MMT.

Concretely:

* Download and install jEdit.
* Run jEdit once to make sure it initializes itself.

### 4) Install Git

We provide both MMT and our test archives as as git repositories for you to clone.
So you need to have git installed.

### 5) Install MMT

First we use git to obtain MMT.
We clone the [MMT repository](https://github.com/UniFormal/MMT) from GitHub.
We will use the `esslli2019` branch in this course.

```
git clone --single-branch -b esslli2019 https://github.com/UniFormal/MMT.git
```

Now we use sbt to build MMT:

```
cd MMT/src
sbt deploy
```

This creates many files, in particular the file `mmt.jar` in the folder `../deploy/`.

Change to that directory and run MMT once to trigger setup:
```
cd ../deploy/
java -jar mmt.jar
```

Follow the steps of the setup installer dialog.

Setup will in particular
* configure jEdit for use with MMT
* git clone the [LATIN2 archive](https://gl.mathhub.info/MMT/LATIN2/tree/esslli2019), which we will use in this course

### 6) Run MMT

Open jEdit and use it to view the files in the LATIN2 archive you just cloned.
