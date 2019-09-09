---
layout: doc
title: The MMT Language
---

This sections gives an overview of the **general language structure** of MMT.
To be more concrete, it also explains one specific **concrete syntax**, which is the main syntax used to write MMT content natively.
A description of MMT's **abstract syntax** and the corrseponding internal data structures can be found [here](../api/syntax)

MMT is a language for formal mathematics that pays special attention to [*foundation-independence*](../philosophy/independence), scalability, and modularity.
MMT follows the [OMDoc](http://www.omdoc.org/) philosophy and will be integrated into the upcoming OMDoc 2 format.
The following describes the general principles of MMT.

The goals of OMDoc and MMT are to provide a web-scalable environment in which all mathematics can be represented in a way that supports both rigorous mathematical and logical tools as well as knowledge management services (e.g., databases, notation management, document management, change management).

The key features of the MMT language are

* a module system for declarative languages that combines expressivity with simplicity,
* a foundation- and logic-independent semantics,
* a design that incorporates web-scalability.

### MMT's 4 Levels of Knowledge

MMT organizes knowledge along the following four levels.
All 4 levels are interconnected through the use of identifiers: the [MMT URI](uris).

* [**Documents**](namespaces): Documents are semantically transparent groupings of *modules*.
   In the simplest case, they serve as *namespaces* giving the modules declared in them globally unique MMT URIs.
    
* [**Modules**](modules): Modules are the semantically relevant toplevel declarations.
  * [*Theories*](modules.html#theories) encapsulate mathematical contexts.
  * *Theory morphisms* translate between theories either by representation ([*views*](modules.html#views)) or by inheritance ([*structures*](declarations.html#structures)).
    
  The body of a module is a list of *symbol declarations*.
  The module system permits combining, translating, instantiating modules. The semantics of the module system is defined by *flattening*, i.e., computing the induced body.
  
* [**Symbols**](declarations): Symbols are the smallest fragments of a document that have semantically relevant [identifiers](uris).
  * [*Constants*](declarations.html#constants) represent named atomic mathematical objects such as function symbols, predicate symbols, sort/type symbols, axioms, theorems, judgments, inference rules.
  * [*Structures*](declarations.html#structures) are instantiations of other modules.

* [**Objects**](objects): Objects differ from the other levels in that they do not have an MMT URI.
  They are mathematical expressions formed from
  * the *symbols* that are in scope (referenced via MMT URI)
  * application, binding, and similar operations
  * *contexts* that introduce bound variables and substitutions for them
  * the *variables* in some context (referenced by their name)
  * [*literals*](literals) such as integers, floats, etc.
  MMT follows the [OpenMath](http://www.openmath.org) data model for objects.
  However, contrary to OpenMath, MMT uses formal theories and type systems that determine the well-typed objects.

  At all levels, knowledge may be [informal].
  
### Structural Levels vs. Objects
  
Document, module, and symbol level are jointly called **structural levels**.
They share the following features:

* There are infinitely many possible declarations, but ony finitely many are actually made (by writing them in some source file or otherwise stating them).
* Each declaration that is actually made (and only those) witnesses the existence a concept or thing.
  Thus, declarations can be seen as actions that give birth to objects.
* Each declaration has a unique MMT URI through which it can be referenced.
  The URI can also be seen as the name of the object that the declaration introduces.
* The syntax tree of all declarations yields a tree of nested containers (in particular documents and modules) with atomic declarations (constants) at the leaves.
* Each declaration is attributed with some objects (e.g., the domain and codomain of a theory morphism or the type of a constant).

**Objects** differ from the structural declarations as follows:

* There are infinitely many objects, and every one of them is meaningful independent of whether it is written down somewhere.
* Objects have syntax trees, whose inner nodes are constructors or operations, and whose leaves are identifiers (MMT URIs).
* Objects are anonymous, and the object itself is needed to refer to it.
* Objects are subject to an equality relation.
  In many applications, two objects are considered the same if their equality can be proved.  

Sometimes structural levels and objects are distinguished as outer and inner syntax, respectively.

The distinction is very important in practice also: Many algorithms proceed fundamentally differently for the two.
This is because the structural levels introduce new identifiers and thus, e.g., new notations and typing rules, which then determine how objects must be processed.

For example, parsing the structural levels can use keywords and simple top-down parsers, whereas the notations and precedences involved parsing objects demand more sophisticated parsers.
