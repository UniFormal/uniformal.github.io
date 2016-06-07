---
layout: doc
title: The MMT Language
---

This sections gives an overview of MMT's **surface syntax** that can be used to write content. A description of MMT's **abstract syntax** and the corrseponding internal data structures can be found [here](../api/syntax)

## The MMT Language

MMT is a language for formal mathematics that pays special attention to [*foundation-independence*](../philosophy/independence.html), scalability, and modularity.
MMT follows the [OMDoc](http://www.omdoc.org/) philosophy and will be integrated into the upcoming OMDoc 2 format.
The following describes the general principles of MMT.

The goals of OMDoc and MMT are to provide a web-scalable environment in which all mathematics can be represented in a way that supports both rigorous mathematical and logical tools as well as knowledge management services (e.g., databases, notation management, document management, change management).

The key features of the MMT language are

* a module system for declarative languages that combines expressivity with simplicity,
* a foundation- and logic-independent semantics,
* a design that incorporates web-scalability.

The central concepts of the MMT language are

* [**Documents**](namespaces.html): Documents are semantically transparent groupings of *modules*.
    In the simplest case, they serve as *namespaces* giving the modules declared in them globally unique MMT URIs.
* [**Modules**](modules.html): Modules are the semantically relevant toplevel declarations.
  * [*Theories*](modules.html#theories) encapsulate mathematical contexts.
  * *Theory morphisms* translate between theories either by representation ([*views*](modules.html#views)) or by inheritance ([*structures*](declarations.html#structures)).
    
  The body of a module is a list of *symbol declarations*.
  The module system permits combining, translating, instantiating modules. The semantics of the module system is defined by *flattening*, i.e., computing the induced body.
* [**Symbols**](declarations.html): Symbols are the smallest fragments of a document that have semantically relevant [identifiers](../api/uris.html).
  * [*Constants*](declarations.html#constants) represent named atomic mathematical objects such as function symbols, predicate symbols, sort/type symbols, axioms, theorems, judgments, inference rules.
  * [*Structures*](declarations.html#structures) are instantiations of other modules.
* [**Objects**](objects.html): Objects differ from declarations in that they do not have an [MMT URI](../api/uris.html). They are mathematical expressions formed from
  * the *symbols* that are in scope (referenced via MMT URI)
  * application, binding, and similar operations
  * *contexts* that introduce bound variables and substitutions for them
  * the *variables* in some context (referenced by their name)
  * [*literals*](literals.html) such as integers, floats, etc.
    
MMT follows the [OpenMath](http://www.openmath.org) data model for objects.
However, contrary to OpenMath, MMT uses formal theories and type systems that determine the well-typed objects.
