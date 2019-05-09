---
layout: doc
title: META_INF
---

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
