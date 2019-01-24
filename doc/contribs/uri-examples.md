---
layout: doc
title: Concrete code examples to create URIs/refer to things
---

- **Rationale**: existing documentation describes all the different things MMT has (documents, modules, symbols) very well, but lacks concrete examples to form URIs to refer to them. E.g. I spent one hour creating an URI refering to an inclusion within a theory.\\

- All code blocks should be self-contained, simply copy-pastable.

- Preferably alternative terminology or concrete instance names (consider theories *are* specific modules) should be named as well.

### Refer to archives

### Refer to documents ("MMT files")

### Refer to modules ("theories or views")

### Refer to inclusions ("include XYZ")

```scala
val archive = DPath(URI("http://cds.omdoc.org/examples"))
val baseTheoryPath = archive ? "TheoryBeingIncluded"
val includingTheoryPath = archive ? "TheoryIncludingIt"
val inclusionSymbol = theory ? ComplexStep(baseTheoryPath)

// http://cds.omdoc.org/examples?TheoryBeingIncluded[http://cds.omdoc.org/examples?TheoryBeingIncluded]
```
Note: you cannot simply construct the path by the naive approach `archive ? baseTheoryPath ? ("[" + includingTheoryPath + "]")` as that would escape the square brackets by ???.

### Refer to structures

### Refer to things within a structure

Also elaborating the difference between `? structure / blah` and `<mpath> / structure ? blah` as highlighted in the other document concerning URIs.