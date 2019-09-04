---
layout: doc
title: 5 - Structures, Lambda, Pi and Implicit Arguments
---
[< 4 - Natural Deduction for Intuitionistic Propositional Logic](4natded.html)

We want to specify the proof rules of the *natural deduction* calculus for (intuitionistic) propositional logic. The first thing to note here, is that our `PLSyntax` theory declares all the constants/operators of propositional logic, but doesn't provide any definitions for them - `equiv` could have easily been defined as `(A ⇒ B) ∧ (B ⇒ A)`, and of course `False` is by definition `¬ ⊤`.

We *could* ameliorate that by just adding the definitions in the `PLSyntax` theory - instead, we're going to use [structures](../../language/declarations.html#structures). They behave similar to includes, but allow us to modify the included symbols within certain constraints. We're going to use them, to add new definitions to our constants.

Let us find out, how to define `equiv` formally. Its type is `o→o→o`, so we need to construct an element of a function type, which we can do using `λ`. The result is:

`λ A:prop. λ B:prop. (A ⇒ B) ∧ (B ⇒ A)`

In LF, lambdas are denoted by square brackets enclosing the variable that is bound by it, so the above translates to 

`[A:prop][B:prop](A ⇒ B) ∧ (B ⇒ A)`.

Note:

* Since it is easily inferrable from `(A ⇒ B) ∧ (B ⇒ A)`, that `A` and `B` have to be of type `prop`, we can just leave out the types of the bound variables and have MMT infer them.
* notationally, `[A][B]` is the same as `[A,B]`.

Now, for our new theory. Using a structure which we call `syn` (for *syntax*), we can create a new theory `PLIntNatDed` (for *Int*uitionistic *P*ropositional *L*ogic *Nat*ural *Ded*uction) and give the new definitions:

![`theory PLIntNatDed : ur:?LF = include ?Logic \RS	structure syn : ?PLSyntax =	prop = prop \RS	False = ¬ ⊤ \RS	equiv = [A,B] (A ⇒ B) ∧ (B ⇒ A) \RS \GS`](doc/img/tut01/theory3.png)

Notice, that:

* The constants in `PLSyntax`, that do *not* occur in the structure are still included via the structure,
* structures create "fresh copies" of every symbol imported through it. This means, that the `prop` imported through the structure `syn` is **not** the same symbol as the one imported via the `include ?Logic`. The first statement `prop=prop` in the structure is therefore necessary, to give the `prop` imported via `syn` a new *definition*. This guarantees, that the two `prop` are equal. We *could* (maybe even *should*) do the same with `proof` as well, since that too has now two copies available; however, since `proof` doesn't occur anywhere in `PLSyntax` we can simply ignore the one imported by `syn`.

Since the structure imports all the operators, we can again define a testing constant in our new theory like before:

![`test = A ∧ B ⇒ ¬ C ∨ A ∧ B \RS`](doc/img/tut01/testconstant.png)

and it type checks as before. However, if we try to use the symbol names instead:

![`test = imp (and A B) (or (not C) (and A B)) \RS`](doc/img/tut01/testconstant2.png)

we get an error. That's because structures change the names of the objects - what used to be `imp` (and was declared in `PLSyntax`) is now `syn/imp` (and is declared in `PLIntNatDed`). If we adapt the constant accordingly, it type checks again:

![`test = syn/imp (syn/and A B) (syn/or (syn/not C) (syn/and A B)) \RS`](doc/img/tut01/testconstant3.png)

-------------------------------
We are now ready to formalize the [natural deduction rules](4natded.html#the-proof-rules). For that we need dependent functions, which in LF are denoted by curly braces enclosing the bound variables - so the inference rule

![`\dfrac{\vdash A\quad \vdash B}{\vdash A \wedge B}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cvdash%20A%5Cquad%20%5Cvdash%20B%7D%7B%5Cvdash%20A%20%5Cwedge%20B%7D)

, which we can express in the dependently typed lambda calculus as

![`\prod_{A:prop}\prod_{B:prop}\vdash A \to \vdash B \to \vdash A\wedge B`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cprod_%7BA%3Aprop%7D%5Cprod_%7BB%3Aprop%7D%5Cvdash%20A%5C%3B%20%5Cto%5C%3B%20%5Cvdash%20B%5C%3B%5Cto%5C%3B%5Cvdash%20A%5Cwedge%20B)

is ultimately written `{A,B} ⊦ A → ⊦ B → ⊦ A ∧ B`.

This leads us to these constants:

![`trueI : ⊦ ⊤ \US # ⊤I	\RS falseE : {A} ⊦ ⊥  → ⊦ A \US # ⊥E 2 1 \RS notI : {A} (⊦ A → ⊦ ⊥) → ⊦ ¬A	\US # ¬I 2 \RS notE : {A} ⊦ A → ⊦ ¬A 	→ ⊦ ⊥ \US # ¬E 2 3 \RS andI : {A,B} ⊦ A → ⊦ B → ⊦ A ∧ B \US # ∧I 3 4	\RS andEl : {A,B}		⊦ A ∧ B					→ ⊦ A			\US # ∧El 3	\RS andEr	: {A,B}		⊦ A ∧ B					→ ⊦ B			\US # ∧Er 3	\RS impI : {A,B}		(⊦ A → ⊦ B)			→ ⊦ A ⇒ B	\US # ⇒I 3 \RS impE : {A,B}		⊦ A ⇒ B → ⊦ A		→ ⊦ B			\US # ⇒E 3 4 \RS orIl : {A, B}		⊦ A							→ ⊦ A ∨ B	\US # ∨Il 3 2	\RS orIr : {A, B} ⊦ B → ⊦ A ∨ B \US # ∨Ir 1 3	\RS orE : {A,B,C} (⊦ A → ⊦ C) → (⊦ B → ⊦ C)  → ⊦ A ∨ B → ⊦ C \US # ∨-E 4 5 6	\RS`](doc/img/tut01/theory4.png)

Note:

* In `falseE`, we use the notation `⊥E 2 1` to flip the arguments. We could have defined the type just as well as `⊦ ⊥ → {A}⊦ A`, but that would have looked less nice.
* In `notI` we omit the first argument in the notation `¬I 2`, since MMT can *infer* the first argument `A` from the second one, which is a proof of `⊦ A` - since the (type of the) second depends on the first, the first can be inferred from the second
* Analogously in the other constants - we define our notations such that we can omit the arguments we don't want to have to "deal with", i.e. the ones that can be inferred from other arguments.

-------------
Finally, we can extend this theory to classical logic. Just for fun, we will use another structure for that, since that allows us to now define the other logical connectives as well: In classical logic, `A∨B = ¬(¬A ∧ ¬B)` and `A ⇒ B = ¬(A ∧ ¬B)`.
So first, we declare a structure from `PLSyntax` to add all the definitions, then we need another structure for `PLIntNatDed` in which we *define* the structure `PLIntNatDed?syn` as this *new* structure `PLNatDed?syn`. The we can add tertium non datur:

![` theory PLNatDed : ur:?LF = 	include ?Logic \RS structure syn : ?PLSyntax = prop 	= prop 	\RS proof	= proof	\RS False 	= ¬ ⊤ 		\RS equiv 	= [A,B] (A ⇒ B) ∧ (B ⇒ A) 	\RS imp   	= [A,B] ¬(A ∧ ¬B) 				\RS or			= [A,B] ¬ (¬A ∧ ¬B)				\RS \GS structure int : ?PLIntNatDed = structure syn = ?PLNatDed?syn \RS \GS tnd : {A} ⊦ A ∨ ¬A \RS \GS`](doc/img/tut01/theory5.png)

Note:

* This time, we need to define `proof` as well, since we used it heavily in `PLIntNatDed`, and thus need to make sure, that the two copies are identified,
* the definition of a structure (in `int`) expects a *path*, which is why we prepend the module name (`?PLNatDed`) - we're giving the *relative URI* of `int` instead of a symbol reference *to* `int`.


------------------
