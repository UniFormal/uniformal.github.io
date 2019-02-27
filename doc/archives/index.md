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
errors | holds error and log messages from running build targets (created by MMT when running any build targets)

### Manifest

MMT uses a `META-INF` directory containing a `MANIFEST.MF` file.<span class="detail">MMT archives are inspired by Java jar archives (which are directory trees zipped into jar files), from where the file name and location is taken.</span>
It corresponds to the project definition or project settings file in software projects.
Directories containing such a file with a key `id` are recognized as archives by MMT.

The manifest contains a list of key-value pairs.
The syntax is one `<key> : <value>` instance per line.
Archive and application developers are free to introduce keys as they see fit as long as the key contains a `.` character. (It is recommended to use URIs, e.g., `org.mytool.mykey` for user-defined keys.
The following keys are predefined by MMT:

Key(s) | Meaning
------ | ------
id |	unique identifier of the archive, used to refer to the archive in shell commands
content-base |	the default namespace in place when entering a source file; this only affects the [MMT URIs](../api/uris.html) of the modules in these source files
narration-base	| the URI prefix prepended to the file paths inside the archives to form document URIs
source, content, narration, relational |	custom folder names for specific dimensions (see the [build tool](building.html) for details)
ns	| the default namespace of the archive used for all files that do not declare a namespace
ns-PREFIX	| a namespace binding for PREFIX that is in effect for all files in the archives (unless a file redefines the prefix)
foundation | the (assumed to be common) **meta theory** for all modules in the archive.
