---
layout: doc
title: Developing MMT
---

For developing and building MMT, it is recommened to use IntelliJ or Eclipse. 
Furthermore, a working installation of `sbt` is required. 

### Using IntelliJ

For interactive development [IntelliJ (community edition)](https://www.jetbrains.com/idea/) with an installed Scala plugin allows to create a new SBT-based project from the src project location that contains the `build.sbt` file. 
The sbt importer of IntelliJ should work out of the box.
IntelliJ settings are not supposed to be comitted. Any changes should be made within build.sbt and IntelliJ SBT projects be refreshed.

### Using Eclipse

`sbt eclipse` will create Eclipse project files. In Eclipse use the Import Wizard to import Existing Projects into Workspace.

### Building API documentation

`sbt apidoc` (based on [sbt-unidoc](https://github.com/sbt/sbt-unidoc)) creates the API documentation into the folder `doc/api`.
When rebuilding, you should delete this folder first.

<!-- TODO adapt to git
The `svn:auto-props` svn property of the toplevel folder ensures that new files (e.g., html, css, and js) get proper MIME types when added to the repository. (Files with wrong mime types will not be properly served by the SVN webserver.) --> 


### Running tests

To make sure that MMT works properly, several unit and integration tests exist. 
See [the page on testing](../development/testing.html) for more details. 
