---
layout: doc
title: Overloading
---

We have to distinguish several kinds of overloading. Only some of them are supported by MMT.

### Types of Overloading

**Semantic Overloading** 

Here the same [identifier](../api/uris) is used for unrelated constants.
These usually have different arities or types so that uses of the shared identifiers can be disambiguated.
This is very common in programming languages.

This is intentionally not supported by MMT.
Instead, MMT is designed such that every declaration has a unique identifier.

When representing languages with semantic overloading in MMT, qualified names such as `c/0`, `c/1`, ... should be used for declarations sharing the overloaded name `c`.
In any case, it is still possible to use the same notation for all these declarations and use syntax overloading to emulate semantic overloading in user-facing formats.

**Syntax Overloading** 

Here the same notation is used for unrelated identifiers.

The MMT parser/checker supports syntax overloading.
The parser generates all possible syntax trees, and the checker will choose one of them if the type of exactly one of them can be inferred uniquely.

**Subtyping Overloading** 

Here a single semantic operation is formalized as multiple constants of the same name.
Contrary to semantic overloading, these constants are related: They have function types with overlapping domains and are implicitly specified to agree on the shared domain.

This is common in algebraic specification languages, e.g., CASL.
It is most commonly used for arithmetic functions on the various number domains: For example, addition may be declared for natural numbers and integers.

**Type Class Overloading** 

A type class `C` is a set of operations on an abstract type. An instance of `C` is a concrete type with corresponding operations on it.
Typical examples are the algebraic structures.

Thus, a constant `f` declared in `C` is then available for each instance.
This can be seen as a special case of syntax overloading: Every instance of `C` creates a new copy of `f`, and all copies have different types but the same notation.

Alternatively, one can consider `f` as a single operation that takes the specific instance as an additional first argument. In that case, there is no overloading.
If the instance argument `a` is explicit, the notation `a.f(x)` can be used as in object-oriented programming languages.
If the instance argument is implicit, interpretation must disambiguate in a way that is similar to syntax overloading.

This is not supported yet by MMT.


### Implementation in MMT

If multiple symbols use the same notation, the parser returns all possible parses.

1. Ambiguity handling is triggered if multiple constants use the same notation at the same precedence level.
    Currently, this also requires using the same pattern of implicit arguments. Future work may lift this restriction.
1. The ambiguous parses are represented as the term `oneOf(k, a_1, ..., a_n)` where `k` is a natural number and the `a_i` are the possible alternatives.
    The meaning of this object is `a_k`.
    After parsing, k is a variable of unknown value.
1. Ambiguity may be nested.
    This does not cause an exponential blowup in memory-use because all `a_i` share their subterms.
    This structure-sharing is obtained for free because Scala anyway uses pointers internally.
1. Structure-sharing is expanded whenever an inductive algorithm constructs a new object.
    Therefore, MMT uses special implementations of simplification and substitution that preserve structure-sharing.
    (Incidentally, this speeds up the algorithms because previous results for the same term are reused.)

When encountering an ambiguous term, the type-checker chooses the one that is well-typed.

1. The inference rule for `oneOf` tries to infer the type of each `a_i`.
1. If all alternatives are ill-typed except for `a_K`, the checker solves `k:=K`.
1. Once `k` is solved, the simplification rule for `oneOf` rewrites the whole term into `a_K`.

Due to the presence of other unknown variables, type-checking is usually only semi-decidable.
Therefore, it can be very difficult to conclude that an alternative is definitively ill-typed.
In particular, it becomes important to have other typing rules that can return a definite No. (Typical rule implementations return either Yes or Maybe, and MMT implements negation as failure.)

This may require some global restrictions on the available rules. For example, a rule trying to prove `c=d` for definition-less constants `c` and `d` can only conclude *No* if it knows that no other rule can rewrite `c` into `d`. 
