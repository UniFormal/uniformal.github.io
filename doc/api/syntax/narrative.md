---
layout: doc
title: Narrative Elements
---
[`api.NarrativeElement`](apidoc://info.kwarc.mmt.api.NarrativeElement) is the parent class of all narrative elements. Those are in particular:
  * [`api.documents.Document`](apidoc://info.kwarc.mmt.api.documents.Document): These are generated e.g. by `.mmt` files and represent the top-level narrative structure of a file. A document is a [`api.ContainerElement`](apidoc://info.kwarc.mmt.api.ContainerElement), and as such can contain other elements, namely `NarrativeElement`s. Additionally, each theory in a `.mmt` file generates a corresponding document that contains all narrative elements of the theory, e.g. documentation comments.
  * [`api.documents.NRef`](apidoc://info.kwarc.mmt.api.documents.NRef) is a reference from a document *to* some other element, specifically
    * [`api.documents.DRef`](apidoc://info.kwarc.mmt.api.documents.DRef): A reference to another document (section).
    * [`api.documents.MRef`](apidoc://info.kwarc.mmt.api.documents.MRef): A reference to a module.
    * [`api.documents.SRef`](apidoc://info.kwarc.mmt.api.documents.SRef): A reference to a declaration.
  * [`api.opaque.OpaqueElement`](apidoc://info.kwarc.mmt.api.opaque.OpaqueElement) represents informal elements, such as documentation strings and comments. Most relevant for users are
    * [`api.opaque.OpaqueXML`](apidoc://info.kwarc.mmt.api.opaque.OpaqueXML): represents arbitrary XML and
    * [`api.opaque.OpaqueText`](apidoc://info.kwarc.mmt.api.opaque.OpaqueText): represents arbitrary strings. Comments starting with `/t` in a `.mmt` file end up as `OpaqueText`s.
