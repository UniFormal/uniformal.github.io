---
layout: doc
title: 3 - LF and Judgments-as-Types
---
[< 2 - A First Theory](2theories.html)

---------------------------

### 3 - LF and Judgments-as-Types

LF is a logical framework based on the dependently typed lambda calculus with two universes, `type` and `kind`. If you know what this means, you can safely skip this section.

A thorough description of both LF's abstract formalization as well as how to use it in practice can be found in [Part V here](https://github.com/florian-rabe/Teaching/blob/master/logic/notes_logic.pdf).

#### LF's lambda calculus

As seen in the previous section, LF declares a symbol `type`, which is a *universe*. LF has a second universe `kind`. Their behaviour is governed by the following rules:

* `kind` is a *universe*. That means: `kind` is *inhabitable* (may occur as a type of constants) and every symbol `c` with type `kind` is also inhabitable.
* `type` is a universe as well.
* `type:kind`, i.e. `type` has type `kind`.

We can mostly ignore `kind`, since it rarely comes into play. For most purposes, we are only interested in types.

LF has a single *type constructor*, that allows us to construct new types from existing ones, namely the *dependent product type* ![`\prod`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Csmall%20%5Cprod). Its behaviour is governed by the following *formation rule*:  

> If `A:type` and `B(x)` is inhabitable for any `x:A`, then ![`\prod_{x:A}B(x)`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Csmall%20%5Cprod_%7Bx%3AA%7DB%28x%29) has type `type`

![`\prod_{x:A}B(x)`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Csmall%20%5Cprod_%7Bx%3AA%7DB%28x%29) is the type of functions, that take an element `a:A` and return an element `b:B(a)`. Note, that the *return type* of the function may depend on the *argument*. If `B` does **not** depend on the argument, we get the *simple* function type we already used:

> If `B` does not depend on `x`, then ![`A\to B := \prod_{x:A}B(x)`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Csmall%20A%5Cto%20B%20%3A%3D%20%5Cprod_%7Bx%3AA%7DB).

Next, we need a way to construct elements of these function types. This is done using the `λ`-operator, which is governed by the following *introduction rule*:

> If `A:type` and `t(x):B(x)` for any `x:A`, then ![`\lambda x:A. t(x)`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Csmall%20%5Clambda%5C%3B%20x%3AA.%5C%3B%20t%28x%29) has type ![`\prod_{x:A}B(x)`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Csmall%20%5Cprod_%7Bx%3AA%7DB%28x%29).

So `λ` allows us to construct functions out of terms. Of course, functions are useless if we can't apply them. The behaviour of function applications is governed by this *elimination rule*:

> If `f` has type ![`\prod_{x:A}B(x)`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Csmall%20%5Cprod_%7Bx%3AA%7DB%28x%29) and `a:A`, then `f a` has type `B(a)` (where `B(a)` is the result of substituting `x` by `a` in `B(x)`)

Additional *computation rules* make sure, that e.g. `λ x. (f x)` is the same as `λ y. (f y)`, which is the same as `f`, etc., but those rules are intuitive enough to not require much explanation.

#### Judgments-as-Types

LF is a *logical framework*, i.e., it is intended to allow for conveniently specifying the syntax and proof theories of various logics. This might be surprising, given that LF only provides dependent function types. This is where the *judgments-as-types*-paradigm comes into play. It is based on the observation, that there is a natural correspondence between the *judgments* of a logic (e.g. "`φ` holds", or in symbols : `⊦ φ`) and some associated type `A` being *inhabited* (i.e. there is some `a` with `a:A`):

* We introduce a type `o` for the expressions of our logic,
* we associate every judgment `J` with a type `⊦J`,
* we interpret the type `TJ` as the type of *proofs* that the judgment `J` holds,
* correspondingly we can "prove" the judgment `J` by constructing an element of the type `⊦J`.
* The *syntax* of our logic thus reduces to functions, that construct new propositions from atomic propositions - i.e. new elements of the type `o` from declared elements of `o`,
* The *proof theory* of our logic corresponds to constructing elements of the judgment types `⊦J` (for some judgment `J`).

The last point is worth looking at more closely: Usually, proof rules are denoted in the form of:

![`\dfrac{\vdash \phi_1, ..., \vdash\phi_n}{\vdash\phi}`](https://latex.codecogs.com/gif.latex?%5Cdfrac%7B%5Cvdash%20%5Cphi_1%2C%20...%2C%20%5Cvdash%5Cphi_n%7D%7B%5Cvdash%5Cphi%7D)

, which translates to:

> **If** (judgment `φ_1` is provable **and** ... **and** judgment `φ_n` is provable), **then** judgment `φ` is provable.

, where a *context* is a list of assumptions. Since the judgments correspond to types, such a rule translates to a *function* taking proofs of the *premises* as arguments and returning a proof of the *conclusion*, i.e.

![`\prod_{p_1:\vdash\phi_1}...\prod_{p_n:\vdash\phi_n}\vdash\phi`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cprod_%7Bp_1%3A%5Cvdash%5Cphi_1%7D...%5Cprod_%7Bp_n%3A%5Cvdash%5Cphi_n%7D%5Cvdash%5Cphi)

---------------------------

In the case of propositional logic, we have a single judgment for every proposition `φ:prop`, namely the judgment `⊦ φ` that `φ` holds. Correspondingly, we declared the function `proof`, that maps a proposition `φ` to the associated type of proofs `⊦ φ`. The syntax we have already taken care of, by declaring the connectives as functions on the type `prop`. 

In the next section we will use dependend function types to implement the rules of the *natural deduction* calculus as functions, that yield elements of the proof types `⊦ φ`.

-------------------------------

[> 4 - Natural Deduction for Intuitionistic Propositional Logic](4natded.html)
