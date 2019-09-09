---
layout: doc
title: Basic Query Examples with the MMT API
---

This document shows several query examples. It is assumed that you know how to incorporate the code snippets into your code, otherwise see the [getting started with the MMT API tutorial](../tutorials/applications/getting-started.md). Especially, the archives you are querying from need to have been built beforehand and their relational information read. This is explained in the tutorial and most importantly its accompanying code as well.

<!-- TOC -->

- [I Listing all declarations of a theory](#i-listing-all-declarations-of-a-theory)
- [II Getting a specific declaration of a theory](#ii-getting-a-specific-declaration-of-a-theory)
- [III Getting all theories included/imported by theory X](#iii-getting-all-theories-includedimported-by-theory-x)
- [IV Getting all theories including theory X](#iv-getting-all-theories-including-theory-x)
- [V For a document get all dependency documents](#v-for-a-document-get-all-dependency-documents)
- [VI Get all documents relying on theory X](#vi-get-all-documents-relying-on-theory-x)

<!-- /TOC -->

### I Listing all declarations of a theory

Expanding on the code above:
```scala
val boolTheory = ctrl.get(DPath(URI("http://cds.omdoc.org/urtheories")) ? "Bool")
boolTheory.getDeclarations foreach println
```

First, we have to query our desired theory by its path. We got path used above from the console output of the last example.
The document [MMT URIs](../language/uris) features more information on these URIs/paths.

### II Getting a specific declaration of a theory

```scala
val boolTheory = ctrl.get(DPath(URI("http://cds.omdoc.org/urtheories")) ? "Bool")
val falseSymbol = boolTheory.path.asInstanceOf[MPath] ? "FALSE"

println(ctrl.get(falseSymbol))
```

### III Getting all theories included/imported by theory X

- `Includes`: `S ~ T` in the relation iff. `S` contains `include T`.
- `RelationExp.HasStructureFrom`: `S ~ T` iff. `S` contains `structure T`.
- Both: `RelationExp.Imports`: `S ~ T` in the relation iff. `S` imports (i.e. includes/structures from) `T`.


```scala
val boolTheoryPath = DPath(URI("http://cds.omdoc.org/urtheories")) ? "Bool"

// only inclusions
ctrl.depstore.querySet(boolTheoryPath, Includes)

// only structures
ctrl.depstore.querySet(boolTheoryPath, RelationExp.HasStructureFrom)

// both
ctrl.depstore.querySet(boolTheoryPath, RelationExp.Imports)

// Hint: RelationExp.Imports is defined as
RelationExp.Imports = Choice(+Includes, RelationExp.HasStructureFrom)
// Choice builds the union of both relations
// TODO: Explain the relevance of +.
```

Output of the import query above:
```
Set(http://cds.omdoc.org/urtheories?Typed, http://cds.omdoc.org/urtheories?TypedConstants, http://cds.omdoc.org/urtheories?ModExp, http://cds.omdoc.org/urtheories?TermsTypesKinds, http://cds.omdoc.org/mmt?Errors, http://cds.omdoc.org/urtheories?Kinded, http://cds.omdoc.org/urtheories?KindedConstants, http://cds.omdoc.org/mmt?mmt)
```

### IV Getting all theories including theory X

You can use the same relations as in I.3, but now swap their direction, e.g. use `-RelationExp.Imports` instead of `RelationExp.Imports`:

The minus sign in `-RelationExp.Imports` swaps the relation. Initially we had `S ~ T` in the relation iff. `S` imports `T`. By swapping we get `S ~ T` iff. `T` imports `S` (or equivalently: `S` is imported by `T`).

```scala
val boolTheoryPath = DPath(URI("http://cds.omdoc.org/urtheories")) ? "Bool"
ctrl.depstore.querySet(boolTheoryPath, -RelationExp.Imports))
```

Output:
```
Set(http://cds.omdoc.org/urtheories?LFS, http://cds.omdoc.org/urtheories?Ded, http://cds.omdoc.org/urtheories?DHOL)
```

### V For a document get all dependency documents

> For a given document `doc` get all documents it directly depends on.

E.g. if theory T in `doc` includes theory S in `doc2`, then get `doc2` should be within the result set. Also, the result set should contain `doc` itself.

Code:

```scala
val boolTheoryDocument = DPath(URI("http://docs.omdoc.org/urtheories/primitive_types/bool.omdoc"))

// Alternative way to query that document would be:
// val boolTheoryPath = DPath(URI("http://cds.omdoc.org/urtheories")) ? "Bool"
// val boolTheoryDocument = ctrl.depstore.queryList(boolTheoryPath, -Declares).head

// doc1 ~ doc2 iff. doc1 depends (directly) on doc2
val documentDependencyRelation = Declares * HasType(IsTheory) * (RelationExp.Imports | Reflexive) * -Declares

val docDeps = ctrl.depstore.querySet(boolTheoryDocument, documentDependencyRelation)
println(docDeps)
```

Output:

> Set(http://docs.omdoc.org/urtheories/module-expressions.omdoc, http://docs.omdoc.org/urtheories/meta.omdoc, http://docs.omdoc.org/urtheories/lf.omdoc, http://docs.omdoc.org/urtheories/primitive_types/bool.omdoc)

Step-by-step explanation:

- `+Declares`: For a given document get all things it declares
- `* HasType(IsTheory)`: Limit those things to theories. Call that set X.
- `* (Imports | Reflexive)`: Consider all the theories imported (= included/structured from) by one theory within X. Add them to X. ("Add them" instead of "replace X by that new set" because of Reflexive.)
- `* -Declares`: Now consider all things (e.g. documents) declaring a theory in X.

Exercise for the reader: What if the result set should not contain `doc`?

<span class="detail">The easiest solution would be to employ the "remove" method on the (immutable) set: `docDeps - boolTheoryDocument`</span>

Exercise II: Why does omitting `| Reflexive` part not work?

<span class="detail">Because our bool document contains multiple theories, let's call them A, B, C.
(You can have a look at that document if you really want to know the exact names.)
B includes A, hence "B is a theory declared in the bool document importing a theory A from the bool document", hence the bool document is contained in the result set.</span>

Exercise III: How to get all indirect document dependencies as well?

<span class="detail">`ctrl.depstore.querySet(boolTheoryDocument, Transitive(documentDependencyRelation))`</span>

### VI Get all documents relying on theory X

```scala
val boolTheoryPath = DPath(URI("http://cds.omdoc.org/urtheories")) ? "Bool"

// From the previous section
val documentDependencyRelation = Declares * HasType(IsTheory) * (RelationExp.Imports | Reflexive) * -Declares
val transitiveDocumentDependencies = Transitive(documentDependencyRelation)

val docs = ctrl.depstore.querySet(boolTheoryPath, Transitive(-RelationExp.Imports) * -Declares * -transitiveDocumentDependencies)

println(docs)
```

Output:

> Set(http://docs.omdoc.org/urtheories/sequences.omdoc, http://docs.omdoc.org/urtheories/primitive_types/bool.omdoc)
