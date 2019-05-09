---
layout: doc
title: Extensions
---


The MMT API provides a number of extension interfaces that permit injecting code for customizing the behavior of MMT algorithms.
All extensions are persistent and have full access to the MMT [controller](../controller.html).
All extensions inherit from [`info.kwarc.mmt.api.frontend.Extension`](apidoc://info.kwarc.mmt.api.frontend.Extension) and can be studied by browsing the known abstract subclasses in the [API documentation](https://uniformal.github.io/apidoc/index.html).

The API also includes numerous concrete extensions.
Some of these are loaded by default, some are loaded on demand, some can be added manually at run time.

### Loading Extensions

Users load extensions with a [shell command](../../applications/shell.html).
Programmers load them using the appropriate method of the [`frontend.ExtensionManager`](apidoc://info.kwarc.mmt.api.frontend.ExtensionManager), which maintains all loaded extensions.

### Writing Extensions

To write an extension, simply subclass the desired extension interface in Java or Scala.
The subclass must have a single constructor that takes no arguments.
It may override the `start` and `destroy` methods to perform arbitrary code during initialization and destruction.
The former also receives a list of strings as arguments, which users can pass when registering the extension.

### Extension Interfaces

There is a wide variety of extension interfaces.
They are documented in the respective API documentation pages, which are linked here.

Therefore, this page only gives an overview of their functionality:

* [`archives.BuildTarget`](apidoc://info.kwarc.mmt.api.archives.BuildTarget) allow building MMT archives. The MMT [build manager](../../applications/building.html) is generic and can be used for any build processes.
  2 special cases are most important:
  
  * [`archives.Importer`s](apidoc://info.kwarc.mmt.api.archives.BuildTarget) convert external formats into MMT's data structures.
  * [`archives.'Exporter`s](apidoc://info.kwarc.mmt.api.archives.BuildTarget) convert MMT content into external formats.

* MMT breaks the main processing pipeline of any formal language implementation into the following phases 

  * [`parser.Parser`s](apidoc://info.kwarc.mmt.api.parser.Parser) convert character streams into MMT data structures. This includes at least lexing, parsing, and management of notations, but may included full-fledged type-checking.
  * [`checking.Checker`s](apidoc://info.kwarc.mmt.api.checking.Checker) analyze and transform the MMT data structures returned by parsing. This includes type-checking and inference of omitted parts (often called reconstruction, elaboration, refinement).
  * [`checking.Interpreter`s](apidoc://info.kwarc.mmt.api.checking.Interpreter) bundles parsing and checking into a single step, often by combining the available parsers and checkers.
  * [`uom.Simplifier`s](apidoc://info.kwarc.mmt.api.uom.Simplifier) perform computations and rewriting as well as transforming content by elaboration. These are often intertwined with checking. 
  * [`presentation.Presenter`s](apidoc://info.kwarc.mmt.api.presentation.Presenter) transform MMT data structures into human-oriented formats, such as the original syntax or HTML.
  
  Further steps in this pipeline that are designed but not maturely realized yet include theorem proving, code generation, and execution and compilation of programs.
  
  Each of these steps is actually split into two interfaces: one for the structural levels and one for objects (see [central concepts](../../language/index.html) for the difference).
  That allows combining, e.g., MMT's default object parser with a new structure parser.

* Functionality-driven extensions 

  * [`frontend.ChangeListener`s](apidoc://info.kwarc.mmt.api.frontend.ChangeListener) add general purpose change-listening functionality. The methods of these extensions are called when MMT content is added, updated, etc.
  * [`web.ServerExtension`s](apidoc://info.kwarc.mmt.api.web.ServerExtension) allow using MMT as a very convenient web framework by adding interface functins to the [HTTP server](../../applications/server.html). Each extension has a `key` and serves requests to the URL `/:key`.

* Various extensions for fine-grained customization:
  
  * [`frontend.Plugin`s](apidoc://info.kwarc.mmt.api.frontend.Plugin) add language-specific functionality and are automatically loaded when the respective MMT theory is loaded.
  
  * [`parser.ParserExtension`](apidoc://info.kwarc.mmt.api.parser.ParserExtension) adds new keywords to MMT's [native text syntax](../../language/). The MMT parser will relegate processing of declarations to the appropriate extension based on the keyword.
  
  * [`ontology.QueryExtension`](apidoc://info.kwarc.mmt.api.ontology.QueryExtension) adds a new atomic function to the MMT [query language](../queries.html).
