---
layout: doc
title: Modules
---


Modules occur in [documents](namespaces.html) level, contain [declarations](declarations.html) and have an associated [MMT URI](../api/uris.html) of the form `<NAMESPACE>?<NAME>`, with the namespace of the current document. Modules are [delimited](delimiters.html) with the symbol ![`\GS`](/doc/img/GS.png)

### Theories

Theories are simply named groups of [declarations](declarations.html). Examples for theories are first-order or higher-order theories, logics, type theories, logical frameworks. Their conrete syntax is

![`theory <name> : <metatheory> = <body> \GS`](/doc/img/theory.png)

where `<body>` is a sequence of declarations. The context available to any specific declaration is everything provided by previous declarations, specifically [theory inclusions](declarations.html#structures) and everything provided by the meta theory.

The **meta theory** statement is optional and behaves like a [theory inclusion](declarations.html#structures).

Theories can be *nested*, like this:

![`theory <outer> : <metatheory1> =	<previousbody> theory <inner> : <metatheory2> =	<innerbody>	\GS	<laterbody> \GS`](/doc/img/nestedtheory.png)

in which case the visible context of both the inner theory as well as `<laterbody>` is `<previousbody>`, i.e. the inner theory can see all previous declarations of the outer theory, but at no point can the outer theory see inside the inner theory (unless explicitely [included](declarations.html#structures)).

### Views

Given two theories `A` and `B`, a **view** from `A` to `B` maps all [declarations](declarations.html) in `A` to expressions over symbols in `B`, while preserving *typing judgments*. i.e. if `|- a : tpA` in `A` and `v:A->B` is a view, then `|- v(a) : v(tpA)`. Hence, views are *truth preserving*. `A` is the *domain* of `v` and `B` is the *codomain*.

Their conrete syntax is

![`view <name> : <domain> -> <codomain> = <assignments> \GS`](/doc/img/view.png)

where `<assignments>` is a list of assignment declarations. Their syntax looks like this:

![`<name> = <term> \RS`](/doc/img/assignment.png)

In assignments, `<name>` has to be a symbol declared in (the dependency closure of) `<domain>`, whereas `<term>` has to be a well-formed [term](objects.html) over symbols in `<codomain>` preserving typing judgments.

### Morphisms

The semantics of the large scale structure of developments in MMT is computed in the category of theories and theory **morphisms**.

Atomic morphisms can be declared in two ways: via [views](modules.html#Views) and [structures](declarations.html#Structures).
Complex morphisms can be built in particular using composition.

#### Implicit Morphisms

Every development in MMT yields a specific category of theories and morphisms.
Among those, MMT distinguishes the **implicit morphisms**.
For any two theories `A` and `B`, there may be at most one implicit morphism from `A` to `B`.
The implicit morphisms are the following:

 * any view or structure preceded by the keyword `implicit`
 * all includes
 * the identity morphism of all theories
 * all compositions of implciit morphisms

Thus, technically the implicit morphisms form a thin broad subcategory of the category of theories and morphisms.

The semantics of an implicit morphism `m` from `A` to `B` is that every declaration of `A` is also visible to `B`, i.e., any well-formed term `t` over `A` is also well-formed over `B`.
The meaning of `t` in `B` is `m(t)`.

**Examples**

 * The intended semantics of includes is induced by the above: an include from `A` to `B` is an implicit morphism, which maps every term to itself.
  Thus, the effect of an include from `A` to `B` is that every term of `A` can be used in `B` with the same meaning.
 * Consider a user who would like to add a defined declaration `c:a=t` to a theory `T` that she does not have write access to.
   She could declare a theory `T2` that includes `T`. But then the new declaration would only be available in theories that use `T2`.
   Instead, she would like to extend `T` itself from the outside, i.e., without changing it.
   She can achieve that by declaring a theory `T2` that contains `c:a` and an implicit view from `T2` to `T` that maps `c=t`.
   Then she can use `T2?c` wherever `T` is used.
 * [Realms](https://link.springer.com/content/pdf/10.1007/978-3-319-08434-3_19.pdf) were introduced as a language feature for providing a single interface to a large set of theories. Realms can be realized in MMT by simply making all involved morphisms implicit.
