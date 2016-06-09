---
layout: doc
title: The Open Archive of Formalizations (OAF)
---
The OAF is a repository backend for mathematical content hosted at [`gl.mathhub.info`](http://gl.mathhub.info).
It is the main place to develop and publish [MMT archives](archives.html).

### Archives
In particular, the OAF contains the following MMT archives:

archive |	contents |	depends on
:----- | -------- | :--------
MMT/urtheories |	various top level languages, in particular the logical framework [**LF**](https://en.wikipedia.org/wiki/Logical_framework#LF) | 	
MMT/examples	| an example archive for beginners	| MMT/urtheories
MMT/experimental	| similar to MMT/examples but not always working	| MMT/urtheories
MMT/LATIN	| the LATIN logic atlas	| MMT/urtheories
MMT/LFX | (experimental) various LF extensions and modifications, e.g. subtyping, record types and [HOTT](https://homotopytypetheory.org) | MMT/urtheories
Mizar/mml	| the Mizar Mathematical Library	| MMT/LATIN
TPTP/Distribution	| the TPTP problem library	| MMT/LATIN
HOLLight/basic	| the standard library of HOL Light	| MMT/LATIN

### Setup
To work with the archives in the OAF, you usually want to clone the relevant git repositories and then add your local working copies to the math path.
To clone the repositories, you typically proceed along the following lines:

``` 
mkdir content
cd content

mkdir MMT
cd MMT
git clone http://gl.mathhub.info/MMT/urtheories.git
git clone http://gl.mathhub.info/MMT/examples.git
git clone http://gl.mathhub.info/MMT/LATIN.git
cd ..

mkdir HOLLight
cd HOLLight
git clone http://gl.mathhub.info/HOLLight/basic.git
cd ..

mkdir Mizar
cd Mizar
git clone http://gl.mathhub.info/Mizar/MML.git
cd ..

mkdir TPTP
cd TPTP
git clone http://gl.mathhub.info/TPTP/Distribution.git
cd .. 
```

You can also issue the clone command via MMT using the clone command of the [shell](shell.html). In that case, MMT automatically checks out all dependencies.
