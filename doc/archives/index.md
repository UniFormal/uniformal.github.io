---
layout: doc
title: MMT Archives
---

MMT archives correspond to software projects and are used by MMT to provide project-oriented work flows for any language defined in MMT.
They are the primary means to maintain and distribute MMT content.

### Archive Structure

MMT-archives are directory trees in which all human-written files should be contained in a folder called `source`. Besides the following folders of an archive have a special meaning to MMT:

Folder  |	Content
------ | -------
[source](source) |	the primary content of the archive in some format that MMT understands natively.
[content](content)	| index of all modules (created by MMT when building the archive).
[narration](narration)	| index of all documents (created by MMT when building the archive).
[relational](narration) |	the relational index with respect to the MMT ontology (created by MMT when building the archive).
[export](export) |	location for the results of exporters that produce auxiliary data from MMT content (created by MMT when running an exporter).
[errors](errors) | holds error and log messages from running build targets (created by MMT when running any build targets).
[META_INF](meta_inf) | holds the MANIFEST.MF file identifying the directory tree as an archive to MMT.

In addition there are the following optional folders:

Folder  |	Content
------ | -------
scala |	Contains content directly implemented in scala.
bin	| Compilation target of the scala folder.

### Writing and Building Archives

Archives can be written in any syntax that MMT can understand natively or for which an importer is registered.
The MMT [IDE](../../doc/setup/jedit) based on jEdit can be used well to write archives in MMT's native text syntax. Alternatively, an [MMT-plugin for
Intellij](../../doc/applications/intellij) is also available .
The MMT [build tool](building) can be used to build MMT archives. This is necessary to make the content available to other MMT applications.

### Examples of MMT-Archives

A number of MMT archives are described in the [OAF](oaf) section.


### Installing and Publishing Archives

The [Mathhub.info](Mathhub) section details how MMT-archives can be installed from and published to the MathHub portal.
