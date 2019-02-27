---
layout: doc
title: MMT URIs
---

[`api.Path`](apidoc://info.kwarc.mmt.api.Path) is the base class of MMT URIs. The classes corresponding to MMT URIs are 

* [`LocalName`](apidoc://info.kwarc.mmt.api.LocalName),
* [Document Paths (`DPath`)](apidoc://info.kwarc.mmt.api.DPath),
* [Module Paths (`MPath`)](apidoc://info.kwarc.mmt.api.MPath) of the form `DPath ? LocalName`,
* [Symbol Paths (`GlobalName`)](apidoc://info.kwarc.mmt.api.GlobalName) of the form `MPath ? LocalName` and 
* [`ContentPath`](apidoc://info.kwarc.mmt.api.ContentPath), which is a common superclass of `MPath` and `GlobalName`, and
* [Component Paths (`CPath`)](apidoc://info.kwarc.mmt.api.CPath) of the form `ContentPath $ DeclarationComponent`.
