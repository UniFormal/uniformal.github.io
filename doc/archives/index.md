---
layout: doc
title: MMT Archives
---

MMT archives correspond to software projects and are used by MMT to provide project-oriented work flows for any language defined in MMT.
They are the primary means to maintain and distribute MMT content.

A number of MMT archives are described in the [OAF](oaf.html) section.

### Writing Archives

Archives can be written in any syntax that MMT can understand natively or for which an importer is registered.
The MMT [IDE](../../doc/setup/jedit.html) based on jEdit can be used well to write archives in MMT's native text syntax. Alternatively, an MMT-plugin for
Intellij is also available.
The MMT [build tool](building.html) can be used to build MMT archives. This is necessary to make the content available to other MMT applications.

Archives should contain a folder called `source`, which contains all human-written files.
The following folders of an archive have a special meaning to MMT:

Folder  |	Content
------ | -------
[source](source.html) |	the primary content of the archive in some format that MMT understands natively.
[content](content.html)	| index of all modules (created by MMT when building the archive).
[narration](narration.html)	| index of all documents (created by MMT when building the archive).
[relational](narration.html) |	the relational index with respect to the MMT ontology (created by MMT when building the archive).
[export](export.html) |	location for the results of exporters that produce auxiliary data from MMT content (created by MMT when running an exporter).
[errors](errors.html) | holds error and log messages from running build targets (created by MMT when running any build targets).
[META_INF](meta_inf.html) | holds the MANIFEST.MF file identifying the directory tree as an archive to MMT.

Besides there are the following optional folders:

Folder  |	Content
------ | -------
scala |	Contains content directly implemented in scala.
bin	| Compilation target of the scala folder.