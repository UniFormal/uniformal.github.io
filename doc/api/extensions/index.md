---
layout: doc
title: Extensions
---


The MMT API provides a number of extension interfaces that permit injecting code for customizing the behavior of MMT algorithms.
All extensions are persistent and have full access to the MMT [controller](../controller.html).
All extensions inherit from [`info.kwarc.mmt.api.frontend.Extension`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.frontend.Extension) and can be studied by browsing the known abstract subclasses in the [API documentation](http://kwarc.github.io/MMT/api/index.html).

The API also includes numerous concrete subclasses.

### Loading Extensions
Users load extensions with the extension [shell command](../../applications/shell.html).
Programmers load them using the appropriate method of the [`frontend.ExtensionManager`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.frontend.ExtensionManager), which maintains all loaded extensions.

### Writing Extensions
To write an extension, simply subclass the desired extension interface in Java or Scala.
The subclass must have a single constructor that takes no arguments.
It may override the `start` and `destroy` methods to perform arbitrary code during initialization and destruction.
The former also receives a list of strings as arguments, which users can pass when registering the extension.

### Extension Interfaces
The extension interfaces include

* [`frontend.Plugin`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.frontend.Plugin) adds general purpose functionality. In particular, plugins can be used to bundle multiple extensions or perform other customizations.
* [`parser.ParserExtension`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.parser.ParserExtension) adds new keywords to MMT's [native text syntax](../../language/). The MMT parser will relegate processing of declarations to the appropriate extension based on the keyword.
* [`libraries.Foundation`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.libraries.Foundation) adds stand-alone type checking for a particular language.
* [`archives.BuildTarget`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.archives.BuildTarget) adds targets to the [build tool](../../applications/building.html).
Extension developers only have to implement the action on a single file, and MMT takes care of recursion and change management.
* [`presentation.Presenter`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.presentation.Presenter) implements rendering methods for new output formats.
* [`web.ServerExtension`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.web.ServerExtension) adds functionality to the [HTTP server](../../applications/server.html). Each ServerPlugin provides a key and serves requests to the URL `/:key`.
    Extension developers only have to implement the function, and MMT handles the HTTP protocol.
* [`frontend.ChangeListener`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.frontend.ChangeListener) adds general purpose change-listening functionality. The methods of these extensions are called when MMT content is added, updated, etc.
* [`ontology.QueryExtension`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.ontology.QueryExtension) adds a new atomic function to the MMT [query language](../queries.html).

Some extension interfaces come with abstract subclasses that specialize on certain functionality. For example, [`archives.BuildTarget`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.archives.BuildTarget) is extended by [`archives.ContentExporter`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.archives.ContentExporter), which can be used to conveniently export MMT projects in any format.

An overview of the most important extensions and their main implementations is available [here](processors.html).
