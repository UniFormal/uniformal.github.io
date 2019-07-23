---
layout: doc
title: Includes and Implicit Morphisms
---

# Includes

A theory T may contain an include declaration of S.
The basic intuition is that this makes the identity map a well-formed morphism from S to T, i.e., everything true in S is also true in T.

In the simplest case, an include declaration can be understood as follows: the flattening of T contains a copy of all declarations of S.

In the implementation, by te way, this flattening is not computed: copying included declarations would lead to a size explosion. Instead, MMT computes for every theory which theories it includes. That corresponds to taking the transitive closure of the include-relation.

# Includes are implicit morphisms

Includes are a special case of implicit morphisms.
In addition to the usual theory graph, MMT maintains a subgraph containing only certain edges, in particular all inclusions.
The paths in this graph are the implicit morphisms.
If there is an implicit morphism m from S to T, all names c of S can be used in T as an abbreviation of m(c).
Similarly, every morphism out of T can be treated as a morphism out of S by composing with m.
This happens automatically, i.e., the user does not have to refer to m, hence the name *implicit* morphisms.

Of course, this only works if m is uniuqe, i.e., there may at most 1 implicit morphism between any two theories.
In other words, the subgraph of implicit morphisms must commute.

A number of examples are given in the research paper on implicit morphisms.

# Includes can have a definiens

A powerful feature of MMT is that there are more implicit morphisms.
Includes can be **defined**, i.e., T can have an include of S with definiens m, where m must be a morphism from S to T.
In this case, the flattening of T contains all declarations of S but with definitions as provided by m. 
In programming language terms, we can understand undefined includes as inheritance and defined includes as delegation.
The latter states that T also implements the interface of S, but the implementations are not given individually; instead, all S-operations are uniformly delegated to the object m, which already implements S.

From the perspective of implicit morphism, a defined include just means that m becomes an implicit morphism.
Vice versa, implicit morphisms can induce defined includes:
Assume we declare an undefined include from S in T when there already is an implicit morphism m.
At first sight, that may look like a violation of the commutativity condition. But it works out fine - the new include simply acquires m as its definiens.

Defined includes are particularly relevant in structures and views l from T to U where T contains an undefined include from S.
Instead of defining assignments individually for all declarations of S, l can simply include an existing morphism from S to U. This is done by declaring a defined include of S in l. 

# Views an also be implicit

Thus, from the perspective of T, an implicit morphism m out of S and a defined includes of S with definiens m are equivalent. 
However, implicit morphisms are even more powerful: we can add implicit morphisms into T even from the outside, i.e., when T has already been defined.
Specifically, we can give any structure or view the additional keyword *implicit*.

A very common situation is that T is strong enough to implement the interface of S.
We can accomplish that by defining a view v from S to T.
In programming language terms, v is an adapter that turns implementations of T into implementations of S.
But by declaring that v to an implicit view, we can eliminate the need to manually apply the adapter: MMT applies it automatically.

Another way to think of that is that the implicit view v extends the interface of T from the outside.
Later on, anybody who uses T can use it as if T included S.

Note that the author of v may be different from the author of T. She may not even have access rights to change T.
But by declaring an implicit view, she can create essentially the same effect as if she had changed T.

# Theories can realize other theories like views

Declaring an implicit v view from S to T can be cumbersome if v and T are written together.
For example, it requires naming v even though the name will never be used directly later on.

In that case, a better solution is for T to double as a view from S to itself.
In that case, the body of T contains all the assignments that would otherwise be placed into the body of v.
Inside T, they behave like normal (defined) constants.
Additionally, we put the declaration *realize S* before those assignments.
This can be seen as a postulated include: we promise that at the end of T, the identity map will be a well-formed morphism from S to T (which requires T to contain the same as a view out of S, namely a definition for every name in the interface of S).

In programming language terms, realizations can be seen as interface implementations.
For example, MMT's includes and realizations roughly correspond to Java's *extends* and *implements* declarations and to ML's signature inclusions and signature type ascriptions.

In most situations, realizations behave in the same way as includes.
In particualr, realizations are also implicit morphisms.
However, while an include induces an implicit morphism immediately, a realization only does so at the end of the containing theory.

Like includes, realizations can also be defined.
Here, we promise a realization and provide its witness directly.
That is essentially the same as declaring a defined include.
Therefore, defined realizations usually make no sense in user syntax.
(They may be generated, however, during flattening when multiple realizations are composed.)