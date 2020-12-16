---
layout: doc
title: Diagrams & Diagram Operators
---

In larger formalizations, parts of theory graphs are often redundant and have been created in a *systematic* way from other parts of the theory graph.
As of December 2020, MMT has preliminary support for diagram operators, which are Scala functions accessible from MMT surface syntax allowing to create whole diagrams from input diagrams.

For example, consider formalizing the algebraic hierarchy with theories for magmas, semigroups, monoids, groups, and more.
Creating the theories for homomorphisms of magmas, semigroups, monoids, and groups, respectively would be redundant &mdash;
[universal algebra](https://en.wikipedia.org/wiki/Universal_algebra) tells us that, given the underlying theories,
there is a canonical way to construct the theories of homomorphisms.
This redundancy is significant in practice, too: if you were to formalize the algebraic theories and their homomorphisms manually,
*every* change in the former would necessitate a change in the latter.

![Universal algebra diagram operators Hom, Sub, Cong, and connectors](../img/diagops-universal-algebra.png)
