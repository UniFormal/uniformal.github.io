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
MMT/LATIN	| [the LATIN logic atlas](LATIN/index.html)	| MMT/urtheories
MMT/LFX | (experimental) various LF extensions and modifications, e.g. subtyping, record types and [HOTT](https://homotopytypetheory.org) | MMT/urtheories
Mizar/mml	| the Mizar Mathematical Library	| MMT/LATIN
TPTP/Distribution	| the TPTP problem library	| MMT/LATIN
HOLLight/basic	| the standard library of HOL Light	| MMT/LATIN


These archives can be installed and managed using [lmh](doc/applications/lmh/) functionality provided by MMT. 
