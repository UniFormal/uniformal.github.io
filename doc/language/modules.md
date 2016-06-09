---
layout: doc
title: Modules
---

## Modules

Modules occur in [documents](namespaces.html) level, contain [declarations](declarations.html) and have an associated [MMT URI](../api/uris.html) of the form `<NAMESPACE>?<NAME>`, with the namespace of the current document. Modules are [delimited](delimiters.html) with the symbol ![`\GS`](/doc/img/GS.png)

### Theories

Theories are simply named groups of [declarations](declarations.html). Examples for theories are first-order or higher-order theories, logics, type theories, logical frameworks. Their conrete syntax is

![`theory <name> : <metatheory> = <body> \GS`](/doc/img/theory.png)

, where `<body>` is a sequence of declarations. The context available to any specific declaration is everything provided by previous declarations, specifically [theory inclusions](declarations.html#structures) and everything provided by the meta theory.

The **meta theory** statement is optional and behaves like a [theory inclusion](declarations.html#structures).

Theories can be *nested*, like this:

![`theory <outer> : <metatheory1> =	<previousbody> theory <inner> : <metatheory2> =	<innerbody>	\GS	<laterbody> \GS`](/doc/img/nestedtheory.png)

in which case the visible context of both the inner theory as well as `<laterbody>` is `<previousbody>`, i.e. the inner theory can see all previous declarations of the outer theory, but at no point can the outer theory see inside the inner theory (unless explicitely [included](declarations.html#structures)).

### Views

Given two theories `A` and `B`, a **view** from `A` to `B` maps all [declarations](declarations.html) in `A` to expressions over symbols in `B`, while preserving *typing judgments*. i.e. if `|- a : tpA` in `A` and `v:A->B` is a view, then `|- v(a) : v(tpA)`. Hence, views are *truth preserving*. `A` is the *domain* of `v` and `B` is the *codomain*.

Their conrete syntax is

![`view <name> : <domain> -> <codomain> = <assignments> \GS`](/doc/img/view.png)

, where `<assignments>` is a list of assignment declarations. Their syntax looks like this:

![`<name> = <term> \RS`](/doc/img/assignment.png)

In assignments, `<name>` has to be a symbol declared in (the dependency closure of) `<domain>`, whereas `<term>` has to be a well-formed [term](objects.html) over symbols in `<codomain>` preserving typing judgments.
