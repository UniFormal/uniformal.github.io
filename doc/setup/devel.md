---
layout: doc
title: Developing MMT
---

For developing and building MMT, it is recommened to use IntelliJ IDEA or Eclipse.
Furthermore, a working installation of `sbt` is required. 

### Using IntelliJ IDEA

1. Install [IntelliJ IDEA](https://www.jetbrains.com/idea/): the community edition suffices, but as a student you may be eligible for the ultimate edition for free.
2. Install the Scala plugin within IntelliJ IDEA.
3. Open IntelliJ IDEA and click "open project" (*not* "create new"). Simply select `<mmt repository>\src` in the folder selection dialog.
   The sbt importer of IntelliJ should work out of the box.

   IntelliJ IDEA project or module settings are not supposed to be comitted. Any changes should be made within build.sbt such that upon reimporting by the sbt importer (provided by the Scala plugin), the desired changes are induced in the project and module settings.

### Using Eclipse

`sbt eclipse` will create Eclipse project files. In Eclipse use the Import Wizard to import Existing Projects into Workspace.

### Building API documentation

`sbt apidoc` (based on [sbt-unidoc](https://github.com/sbt/sbt-unidoc)) creates the API documentation into the folder `doc/api`.
When rebuilding, you should delete this folder first.

<!-- TODO adapt to git
The `svn:auto-props` svn property of the toplevel folder ensures that new files (e.g., html, css, and js) get proper MIME types when added to the repository. (Files with wrong mime types will not be properly served by the SVN webserver.) --> 


### Running tests

To make sure that MMT works properly, several unit and integration tests exist. 
See [the page on testing](../development/testing) for more details. 
