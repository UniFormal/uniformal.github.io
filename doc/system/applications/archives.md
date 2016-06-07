---
layout: doc
title: MMT Archives
---

## MMT Archives

MMT archives correspond to software projects and provide project-oriented work flow for any language defined in MMT.
They are the primary means to maintain and distribute MMT content.

A number of MMT archives are described in the [OAF](oaf.html) section.

### Writing Archives

Archives can be written in any syntax that MMT can understand natively or import.
The MMT [IDE](../../setup/jedit.html) based on jEdit can be used well to write archives in MMT's native text syntax.
The MMT [build tool](building.html) can be used to build MMT archives. This is necessary to make the content available to other MMT applications.

The following folders of an archive have a special meaning to MMT:

Folder  |	Content
------ | -------
source |	the primary content of the archive in some format that MMT understands natively
content	| index of all modules (produced by the build tool)
narration	| index of all documents (produced by the build tool)
relational |	the relational index with respect to the MMT ontology
export |	default location for all exports built by MMT, each export should use a separate subdirectory

### Manifest
MMT archives are inspired by Java archives (which are directory trees zipped into jar files). In particular, there must be a `META-INF` directory containing a `MANIFEST.MF` file.

The manifest contains a list of key-value pairs. The syntax is one `<key> : <value>` instance per line.
Archive and application developers are free to introduce keys as they see fit as long as the key contains a `.` character. (It is recommended to use URIs, e.g., `org.mytool.mmt` for user-defined keys.
The following keys are predefined by MMT:

Key(s) | Meaning
------ | ------
id |	unique identifier of the archive, used to refer to the archive in shell commands
content-base |	the default namespace in place when entering a source file; this only affects the [MMT URIs](../api/uris.html) of the modules in these source files
narration-base	| the URI prefix prepended to the file paths inside the archives to form document URIs
source, content, narration, relational |	custom folder names for specific dimensions (see the [build tool](building.html) for details)
ns	| the default namespace of the archive
ns-PREFIX	| the namespace binding for PREFIX
foundation | the (assumed to be common) **meta theory** for all modules in the archive.
