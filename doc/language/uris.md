---
layout: doc
title: MMT URIs
---

### Motivation

*URIs* are logical identifiers. *URLs* are physical locations. Both use the same syntax. The only difference is that we can dereference a URL, but not necessarily a URI.

Most of the web seems to prefer *URL=URI*, i.e., every identifier is also a dereferencable location.
MMT uses a different approach:

* MMT strictly distinguish esbetween URIs and URLs.
* The [MMT language](../language/) defines the syntax and semantics of URIs.
* The MMT system allows full flexibility for the URLs and implements a catalog to translate URIs into URLs.

There are 2 reasons for MMT's approach:

* It yields better language and system design if the identifiers are part of the language, but the locations are not. In particular, this allows moving or cloning data containers without affecting the validity of the contained data.
    But the system complexity increases because one additional component is required: an extra-linguistic catalog that maps identifiers to their locations. However, once this component is implemented (as MMT does), the resulting system is much stronger.
* Any practical server must allow a complex API that goes beyond dereferencing an identifier.
    I estimated most server developers will eventually settle on URLs that look something like `http:// SERVER ? uri=URI & OTHERPARAMETERS`
    Such URLs are necessary anyway to cover the general case, i.e., to allow serving URIs that use other people's domains.

### MMT URI Format
An MMT URI consists of 3 components separated by `?` characters:

* the **namespace**: a URI (without query or fragment part)
* the **module**: a `/`-separated sequence of names
* the **local name**: a `/`-separated sequence of names

where a name is a string (using only pchars in the sense of the URI specification).