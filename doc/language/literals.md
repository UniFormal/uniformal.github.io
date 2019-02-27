---
layout: doc
title: Generic Literals
---

MMT uses generic literals. That means that the MMT syntax does not commit to a particular set of literals.
This is a deviation from most other languages, which usually use a fixed built-in set of literals.
For example, [OpenMath](http://www.openmath.org) fixes unlimited precision integers, floating point numbers, strings, and byte arrays as literals.

MMT literals are

* *extensible*: any type of literals can be added, e.g., various number types, strings, characters, dates, RGB color values, etc.
* *context-sensitive*: only theories that explicitly declare a type of literals may use them
* *subject to computation*: a type of literals can define computation rules for them, e.g., to simplify 1+1 into 2

### Usage

To use literals, first create a Scala instance of [`uom.SemanticType,`](apidoc://info.kwarc.mmt.api.uom.SemanticType), which captures the set of literals and optionally defines a lexing rule for them.

Various ready-to-use semantic types (e.g., for numbers, strings), operators on semantic types (e.g., for subtypes, quotients, and products (e.g., for defining rational number literals)), and lexing rules (e.g., for numbers, quoted strings) can be found by following the API documentation.

Then create a Scala instance of [`uom.RealizedType`](apidoc://info.kwarc.mmt.api.uom.RealizedType), which ties an MMT symbol Syn to a semantic type Sem. Declare that Scala object as a [rule](declarations.html#rules) in your MMT theory Thy to make the set of Sem-values legal Thy-terms of Thy-type Syn.

### Particularly Interesting Examples

#### String Interpolation

The lexing rule [`StringInterpolationLexer`](apidoc://info.kwarc.mmt.api.parsing.StringInterpolationLexer) allows for Scala-style string interpolation.

The result is usually not a literal, but an application of an MMT symbol to some literals and other terms.

#### Notations

MMT notations are available as literals via the rule [`notations.NotationRealizedType`](apidoc://info.kwarc.mmt.api.notations.NotationRealizedType).

That allows using notations inside MMT terms (e.g., when writing record terms) or obtain notations that are the result of computations.