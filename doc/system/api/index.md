---
layout: doc
title: The MMT API
---

## The MMT API

### Overview

The **MMT API** is the core of MMT. It provides Scala-based reference API for the MMT data structures with various frontend, backends, and MMT-based algorithms.
The generated API documentation is available [here](http://kwarc.github.io/MMT/api/index.html).
The main package is documented at [`info.kwarc.mmt.api.package`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.package). The base name of all packages in the API is `info.kwarc.mmt.api`. Good starting points for browsing the API are the following classes

* [`frontend.Controller`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.frontend.Controller) is the MMT kernel explained in detail [here](controller.html).
* [`Path`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.Path) is the base class of [MMT URIs](uris.html).
* [`documents.Document`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.documents.Document), [`modules.Module`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.modules.Module), [`symbols.Symbol`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.symbols.Symbol), and [`objects.Obj`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.objects.Obj) are the base classes of the 4 levels of knowledge items of MMT's [abstract syntax](syntax/) described in more detail [here](syntax/).

### Operators and Conversions
This is a reference to some abbreviations in the code that are very useful when writing and reading code, but can be hard to find in the API Documentation. These consist of symbolic method names which give rise to unary/binary operators, implicit conversions, overloading, apply/unapply methods.

#### URIs and Files
Throughout the MMT code, the classes [`utils.File`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.utils.File) and [`utils.URI`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.utils.URI) replace Java's `java.io.File` and `java.net.URI`.

[`utils.FileConversion`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.utils.FileConversion) and [`utils.URI`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.utils.URI) define implicit conversions between Java and MMT files and URIs.

`/` for files and `/`, `?`, and `##` for URIs can be used to form new `File` and `URI` objects in the intuitive way:

* `File / List[String] : File`
* `URI / List[String] : URI`
* `URI ? String : URI`
* `URI ## String : URI`

[`utils.FileURI`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.utils.FileURI) defines apply/unapply methods to convert between files and file-URIs.

[`utils.File`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.utils.File) defines useful methods for reading and writing text files.

#### MMT URIs
`/` and `?` can be used to form [MMT URIs](uris.html) in the intuitive way:

* `DPath / LocalName : DPath`
* `DPath ? LocalName : MPath`
* `MPath / LocalName : MPath`
* `MPath ? LocalName : GlobalName`
* `LocalName / LocalName : LocalName`

The second arguments can also be a string, which counts as path of length 1.

#### Objects

* `GlobalName(argument-sequence) : OMA`: applying a symbol to a sequence of arguments
* `OMV / Term : Substitution`: substituting for a variable
* `OMV % Term : Context`: typed variable
* `Context ++ Context : Context`: concatenation
* `Substitution ++ Substitution : Substitution`: concatenation
* `Substitution ^ Substitution : Substitution`: composition
* `Context.id : Substitution`: identity
* `Term ^ Substitution : Term`: substitution application, computed recursively

Both contexts and substitutions convert back and forth with lists by importing [`objects.Conversions._`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.objects.Conversions).
A string can be used instead of an `OMV` by importing [`objects.Conversions._`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.objects.Conversions)

#### Queries

* `+ Relation : Query`: forward step along a relation
* `- Relation : Query`: backward step along a relation
* `Query | Query : Query`: alternative
* `Query * Query : Query`: Concatenation
* `- Query : Query`: inverse
