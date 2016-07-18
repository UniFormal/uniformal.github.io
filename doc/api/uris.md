---
layout: doc
title: MMT URIs
---

[`api.Path`](https://uniformal.github.io/apidoc/index.html#info.kwarc.mmt.api.Path) is the base class of MMT URIs. The classes corresponding to MMT URIs are 

* [`LocalName`](https://uniformal.github.io/apidoc/index.html#info.kwarc.mmt.api.LocalName),
* [Document Paths (`DPath`)](https://uniformal.github.io/apidoc/index.html#info.kwarc.mmt.api.DPath),
* [Module Paths (`MPath`)](https://uniformal.github.io/apidoc/index.html#info.kwarc.mmt.api.MPath) of the form `DPath ? LocalName`,
* [Symbol Paths (`GlobalName`)](https://uniformal.github.io/apidoc/index.html#info.kwarc.mmt.api.GlobalName) of the form `MPath ? LocalName` and 
* [`ContentPath`](https://uniformal.github.io/apidoc/index.html#info.kwarc.mmt.api.ContentPath), which is a common superclass of `MPath` and `GlobalName`, and
* [Component Paths (`CPath`)](https://uniformal.github.io/apidoc/index.html#info.kwarc.mmt.api.CPath) of the form `ContentPath $ DeclarationComponent`.
