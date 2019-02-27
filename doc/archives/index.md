---
layout: doc
title: MMT Archives
---

MMT archives correspond to software projects and are used by MMT to provide project-oriented work flows for any language defined in MMT.
They are the primary means to maintain and distribute MMT content.

A number of MMT archives are described in the [OAF](oaf.html) section.

### Writing Archives

Archives can be written in any syntax that MMT can understand natively or for which an importer is registered.
The MMT [IDE](../../setup/jedit.html) based on jEdit can be used well to write archives in MMT's native text syntax.
The MMT [build tool](building.html) can be used to build MMT archives. This is necessary to make the content available to other MMT applications.

Archives should contain a folder called `source`, which contains all human-written files.
The following folders of an archive have a special meaning to MMT:

Folder  |	Content
------ | -------
source |	the primary content of the archive in some format that MMT understands natively
content	| index of all modules (created by MMT when building the archive)
narration	| index of all documents (created by MMT when building the archive)
relational |	the relational index with respect to the MMT ontology (created by MMT when building the archive)
export |	location for the results of exporters that produce auxiliary data from MMT content (created by MMT when running an exporter)
errors | holds error and log messages from running build targets (created by MMT when running any build targets).