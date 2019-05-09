---
layout: doc
title: Symbol Declarations
---


Symbol declarations occur in [modules](modules.html) and are [delimited](delimiters.html) by the symbol ![`\RS`](/doc/img/RS.png). The most important symbols are **constants** and **theory inclusions** (which are special cases of **structures**).

### Constants
Constants are symbols that have a name and several optional *components*, namely 

* a *type* (which is a [term](objects.html)),
* a *definition* (which is also a term), 
* a *notation*, 
* zero or more *roles* and 
* zero or more *aliases*.

Examples for constants include mathematical constants, functions, axioms, theorems and inference rules. Their concrete syntax is

![`<name> @ <alias> \US : <type> \US = <definition> \US # <notation> \US role <role> \RS`](/doc/img/constant.png)

The order of the object-level components is arbitrary. They are seperated by the object-[delimiter](delimiters.html) ![`\US`](/doc/img/US.png), the constant declaration itself is delimited by ![`\RS`](/doc/img/RS.png). Aliases are simply *alternative names* that can be used to refer to the constant and are useful e.g. in structures (see below).

* If a constant has a declared type `t`, then the term `t` has to be *inhabitable* (see *???*).
* If a constant has a definition but no declared type, its type is inferred from the definition.
* If a constant has both a type and a definition, the definition has to type-check against the given type, i.e. the judgment `|- <definition> : <type>` has to hold.
* Constants without either a type or a definition (assuming no additional type checking rules) are basically semantically void and thus uninteresting.

#### Notations

A notation is an arbitrary sequence of *tokens*, optionally followed by `prec <precedence>`. 

* Tokens are either a string, or a number representing an argument position of the constant.
* `<precedence>` is an arbitrary integer signifying the precedence (i.e. binding strength) of the notation.

This allows for almost arbitrary notation definitions. 

> **Example:** The notation for an infix operation `+` could be given by
> `# 1 + 2 prec 10`. If a notation for a multiplication has a *higher* precedence (and thus a higher *binding strength*), e.g. `# 1 ⋅ 2 prec 15`, we can omit parentheses according to standard mathematical convention, so the expression `a + b ⋅ c` would be correctly parsed as `a + (b ⋅ c)`.

Argument positions not given in a notation are assumed to be **implicit**, i.e. they have to be inferrable during type checking. This can be the case, if *dependent* type constructors are in scope, e.g. *dependent products*.

> **Example:** A constant `c` with type 
> ![`\prod_{a:A}F(a)\to B`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Csmall%20%5Cprod_%7Ba%3AA%7DF%28a%29%5Cto%20B)
> takes two arguments: an `a:A` and some `x:F(a)`. Obviously, the second argument depends on the first, which allows MMT to infer the first argument from the second. So `c` could have a notation `# c 2` omitting the first argument.

#### Roles

Roles serve as metadata-like annotations to constants. In most situations they are simply ignored. The following list of roles have some special meaning:

* `role Eq` indicates that the constant represents an equality that can be used for rewriting.
* `role Judgment` indicates that the constant is a *Curry-Howard*-style operator mapping propositions to types - as such, occurences of the symbol indicate theorems or axioms.
* `role Simplify` requires the type of the constant to be of the form `⊦ f(g(a)) ≐ b`, where `⊦` has role `Judgment` and `≐` has role `Eq`. This induces a rewrite rule, that simplifies instances of the left side of the equation to the right side during type checking.

### Imports/Inheritance between Theories

Large MMT theories are usually built modularly from smaller ones.
The central declaration is that of an import between two theories.
Similar to the ML module system, MMT supports unnamed imports, called **includes** and named imports, called **structures**.

Both make the contents of some theory `<domain>` available to the current one.
Structures may additionally modify the imported theory, most importantly by instantiating constants with concrete values in the importing theory.

#### Includes

The syntax for a **theory inclusion**  is

![`include <domain> \RS`](/doc/img/include.png)

The include-relation between theories generates a partial order.
In particular, includes are composed transitively, and including the same theory twice is redundant.

#### Structures

The syntax for structures is

![`structure <name> : <domain> = <declarations> \GS`](/doc/img/structure.png)

, where `<declarations>` is a sequence of declarations.

* Even though structures are declarations, they have a [module](modules.html) body and are thus delimited by the module [delimiter](delimiters.html) ![`\GS`](/doc/img/GS.png) instead of the declaration delimiter ![`\RS`](/doc/img/RS.png).
* Simple includes are still delimited with ![`\RS`](/MMT/doc/RS.png).
* The name of each declaration in a structure has to correspond to the name of a declaration in the `<domain>`. 
* Components (aliases, types, definitions etc.) explicitely given in a structure *override* the corresponding component of the declaration in the `<domain>`, all other components are inherited from the latter. In particular, structures can introduce definitions for (not necessarily) previously undefined constants, in which case the (new) definition has to have the (induced/old) type of the constant. It is recommended to *never override the type* of a symbol in a structure.
* The full [URI](../api/uris.html) of an induced declaration `<declname>` in a structure `<struct>` in a module `<mod>` is `<mod> ? <struct> / <declname>`. It is this declaration, that is visible from the outside and can be used in subsequent (to the structure) declarations. In contrast, the URI `<mod> / <struct> ? <declname>` refers to the plain declaration as declared *directly in the structure*, i.e. without inheritance. The latter should never be used outside of the [API](../api/) and is invisible to declarations outside of the structure.
* Unlike simple includes, multiple *named structures* with the same `<domain>` are **not** redundant. Each structure introduces fresh (possibly modified) copies of the declarations in the domain.
* The limit of the previous point is the [*meta theory*](modules.html#theories) of the domain. If two structures `s1`,`s2` have corresponding domains `dom1`,`dom2` with the same meta theory `meta`, then *everything in the dependency closure of `meta`* will be included exactly once.

Implementation note: Because includes and structures are often treated exactly the same way, the MMT system represents an include as a structure with empty body and the induced name `[<domain>]`. API-wise this corresponds to having an [MPath](https://uniformal.github.io/apidoc/info/kwarc/mmt/api/MPath.html) referencing a module (e.g. a theory) and then taking a [ComplexStep](https://uniformal.github.io/apidoc/info/kwarc/mmt/api/ComplexStep.html) to refer to the inclusion: `MPath ? ComplexStep(MPath)`.


**Example**

Let us assume, we have a theory `Monoid` with a constant `G` for the domain of a monoid, `op` for the monoid operation, `unit` for the unit of the monoid and the usual axioms. The latter might be included in (and extended by) a theory `AbelianGroup` adding the additional axioms. then we can use structures to form a theory `Ring`, using the theory `Monoid` for multiplication and `AbelianGroup` for addition. If we use includes, like this

![`theory Rings = include ?Monoid \RS include ?AbelianGroup \RS \GS`](/doc/img/ringwrong.png)

the (transitively twice) included instances of `Monoid` will be identified, defeating the purpose. As mentioned above, named structures prevent that, and allow us to additionally

* identify the two instances of the domain `G`,
* give new aliases to the instances of `op` (e.g. `plus` and `times`) and of `unit` (e.g. `zero` and `one`) and
* give the instances of `op` new desired notations.

Thus, the correct theory `Ring` could look like this:

![`theory Rings = R : type \RS // domain of the ring \RS structure addition : ?AbelianGroup = G = R \RS op @ plus \US # 1 + 2 prec 10 \RS unit @ zero \RS \GS structure multiplication: ?Monoid = G = R \RS op @ times \US # 1 \cdot 2 prec 10 \RS unit @ one \RS \GS \GS`](/doc/img/ringright.png)

All the monoid/group axioms are imported via the structures and are thus available for the respective new symbols. If `Monoid` and `AbelianGroup` have the same meta theory (e.g. `first_order_logic`), then all symbols imported via that (e.g. quantifiers, logical connectives etc.) are identified across the two structures.

### Rules

Rules are special Scala objects that can be declared in an MMT theory Thy to change the semantics of Thy-terms.
For example,

* all typing rules for the toplevel meta-theory
* lexing rules for user-defined [literals](literals.html)

are provided as rules.

Users typically do not need to use rules except when designing their own type systems outside logical frameworks.

To declare a rule, just write `rule PATH` inside Thy, where `PATH` is the MMT URI of a Scala object on the current class path - MMT will dynamically load the Scala object and use it in all Thy-algorithms.
