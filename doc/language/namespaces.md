---
layout: doc
title: Documents and Namespaces
---

In module systems, there are two philosophies regarding the relation between logical and physical names of modules.
Some languages make the *physical location* independent of the *logical identifier*. For example, in ML dialects, the location of a file is irrelevant and only the names of the modules therein are logically meaningful.

Other languages use the phyiscal location to form qualified logical identifiers. For example, Python uses directories and files to form qualified identifiers for toplevel declarations.

A kind of mixture is employed in Java, where files begin with a package declaration defining the logical namespace, but are also recommended to be placed in a corresponding directory structure.

### Namespaces in MMT
MMT adopts a flexible namespace mechanism that can be customized to obtain either behavior.
Every source file corresponds to a **document**, whose logical identifier is formed from the `narration-base` of the [archive](../applications/archives) and the physical path of the file in the archive. .mmt-Files may have a *namespace declaration*, which defines the logical base [identifier](../api/uris) of the *modules* declared in the sequel. The surface syntax is

![`namespace http://some.example.uri.org/ \GS`](../img/namespace.png) (delimited by the module [delimiter](delimiters))

A namespace-URI is an instance of the class [`api.DPath`](apidoc://info.kwarc.mmt.api.DPath)

The given namespace may be an [absolute or a relative URI](../api/uris), and the latter are interpreted relative to the current namespace. At the beginning of a file, the current namespace is the corresponding document identifier.

### Examples

* If files do not have namespace declarations, the physical file paths are used to form [logical identifiers](../api/uris).
However, only the paths within the archive are used, the path segment from the file system root to the archive is replaced with the `narration-base`. Thus, moving or copying an [archive](../applications/archives) as a whole does not affect logical identifiers.
* If all files begin by declaring `.` as the namespace, the behavior is like in the previous example except that only folder names count and file names are ignored.
This is particularly useful in connection with the convention that every file contains exactly one *module*, whose name is the same as (or systematically related to) the file name.

* If all files begin by declaring some absolute URI as the namespace, modules can be placed, all physical paths are ignored, and modules reside in purely logical namespaces that are not affected by moving the files.

As a special case of the previous example, if all files begin by declaring the same absolute URI as the namespace, all modules reside in the same logical namespace. 

### Interpretation Instructions

Documents may contain various instructions that are not meaningful themselves but indicate how to interpret subsequent declarations.
The most important ones are:

* `namespace http://some.example.uri.org/` set the default namespace of the document
* `import prefix http://some.example.uri.org/` define a CURIE prefix
* `fixmeta http://some.example.uri.org/?SomeTheory` set a default meta-theory for all theories in the document

The full list is given in the API documentation of the class [`documents.InterpretationInstruction`](apidoc://info.kwarc.mmt.api.documents.InterpretationInstruction)
