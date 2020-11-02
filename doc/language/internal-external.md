---
layout: doc
title: Internal and External Theories
---

## 3 Levels of objects

There are often three levels of objects
* a theory T defining a class of models
* an individual model M of T, typically containing at least one universe
* elements x in a universe U of M

At the borders between the levels, we have natural is-a relations:
* M can be seen as an instance of T
* x can as an instance of M (if U is the only or the primary universe)

At both borders, we can distinguish the
* internal perspective, which focuses on individual models and elements
* external perspective, which focuses on the collection of models and elements as a whole

## The Theory-Model Border

### Internal Perspective

The internal perspective describes T via what is available in a single model.
Thus, we can think of T as a generic arbitrary model.
For example, in the theory Magma, we have a type u and a binary operation comp on u.
This is how we typically formalize the theory T.

Crucially, the model as a whole is not an accessible object in T.
Similarly, we cannot formalize operations that take or return other models (such as talking about submagmas within Magma).

### External Perspective

The external perspective describes the collection of models as a whole.
This can be done by introducing a dedicated type Mod for the models of T.
The external variant of T can be written as an MMT theory as well, albeit more verbosely: every operation now takes an additional first argument {M:Mod}.
For example, Magma would have a type u:Mod -> type, and an operation comp:{u:Mod} u.M -> u.M -> u.M.

We can call the above theories algebraic because they see the theory as a container for the constructors that generate the syntax.
In coalgebra or OOP, it is common that T may refer to itself as a type already (think of a Java class C that with a method taking another C).
It is interesting to investigate if such coalgebraic theories can be added to MMT as well.

## The Model-Universe Border

### Internal Perspective

The internal perspective describes M via what is available for individual elements.
M declares a type for U (and similarly for other universes), constructors for generating the elements, and rewrite rules to normalize/compare the elements, and to compure the operations of M.
This makes it very easy to describe the individual elements of U and their behavior.

The simplest example is the Peano theory for the natural numbers.
The approach can be extended easily to many other important models with term-generatable universes.

Crucially, the definition of U and the operations on it are split into multiple declarations: multiple constructors (e.g., zero, succ, plus) for the universe and multiple rewrite rules for the operations (e.g., plus_zero, and plus_succ).

But like for the theory-model border, the components of M are never available as self-contained objects.
In particular, we cannot access the universe U as a whole.
We can access the type U, but that type is just a placeholder: it is an open world, and the declaration of additional constructors for U change the semantics of U.
Thus, induction on U is not possible because that would require closing the world and looking at U as a whole.

The closure problem is typically worked around by explicitly declaring induction axioms in M, e.g., as for the Peano theory.
But that is problematic when reusing the model, e.g., when extending the natural numbers to the integers: here the induction axioms have to be thrown out.

### External Perspective

The external perspective describes M and its components as a whole.

Here U is defined as an arbitrary type that already exists, e.g., an inductive datatype.
Thus, U is a closed world with a fixed semantics.
Induction on U is a theorem that can be derived from its definition (e.g., the induction schema for inductive datatypes).
Moreover, because operations are available as single objects, they can be computed efficiently.

This works well with the external perspective for the theory-model border, where models are often seen as records.


## Typing

It is desirable to capture both instance relations using the typing relation.

This can be done as follows:
* the theories-as-types paradigm in MMT uses the operator Mod to turn a theory T into the record type Mod(T) of T-models
* a model can be seen as a type by projecting out the universe field (which is not possible to do implicitly in MMT yet)

