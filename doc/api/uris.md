---
layout: doc
title: MMT URIs
---

[`api.Path`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.Path) is the base class of MMT URIs. The classes corresponding to MMT URIs are 

* [`LocalName`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.LocalName),
* [Document Paths (`DPath`)](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.DPath),
* [Module Paths (`MPath`)](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.MPath) of the form `DPath ? LocalName`,
* [Symbol Paths (`GlobalName`)](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.GlobalName) of the form `MPath ? LocalName` and 
* [`ContentPath`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.ContentPath), which is a common superclass of `MPath` and `GlobalName`, and
* [Component Paths (`CPath`)](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.CPath) of the form `ContentPath $ DeclarationComponent`.
