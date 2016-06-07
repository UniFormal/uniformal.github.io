---
layout: doc
title: 4 - Natural Deduction for Intuitionistic Propositional Logic
---
[< 3 - LF and Judgments-as-Types](3LF.html)

---------------------------------

### 4 - Natural Deduction for Intuitionistic Propositional Logic

In this section, we will look at the natural deduction calculus for intuitionistic propositional logic. If you already know the calculus, you can safely skip this section.

[Intuitionistic logic](https://en.wikipedia.org/wiki/Intuitionistic_logic) is a constructive fragment of classical logic - i.e. syntactically identical, but the law of the excluded middle `A ∨ ¬A` is omitted.

**Natural Deduction** calculi follow the idea that we give for each logical connective *introduction* and *elimination* rules. 

Introduction rules tell us, when we are allowed to *introduce* an instance of the connective. e.g. the introduction rule for `∧` is pretty straight-forward:

![`\dfrac{\vdash A\quad \vdash B}{\vdash A \wedge B}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cvdash%20A%5Cquad%20%5Cvdash%20B%7D%7B%5Cvdash%20A%20%5Cwedge%20B%7D)

> If `A` is provable and `B` is provable, then `A∧B` is provable.

Conversely, elimination rules allow us to *get rid* of the connective. In the case of `∧`, there are two ways to do that:

![`\dfrac{\vdash A\wedge B}{\vdash A}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cvdash%20A%5Cwedge%20B%7D%7B%5Cvdash%20A%7D)  and ![`\dfrac{\vdash A\wedge B}{\vdash A}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cvdash%20A%5Cwedge%20B%7D%7B%5Cvdash%20B%7D)

> If `A∧B` is provable, then `A` is provable.  
> If `A∧B` is provable, then `B` is provable.

Since we use judgments-as-types, these three rules correspond to the following three function types:

![`\vdash A \to \vdash B \to \vdash A\wedge B`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cvdash%20A%5C%3B%20%5Cto%5C%3B%20%5Cvdash%20B%5C%3B%5Cto%5C%3B%5Cvdash%20A%5Cwedge%20B)  
![`\vdash A \wedge B \to \vdash A`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cvdash%20A%5Cwedge%20B%5C%3B%20%5Cto%5C%3B%5Cvdash%20A)  
![`\vdash A \wedge B \to \vdash B`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cvdash%20A%5Cwedge%20B%5C%3B%20%5Cto%5C%3B%5Cvdash%20B)

Noticably, the function arrows in these types lend themselves to be interpreted just like implications: We can read e.g. the first rule as

> If `A` is provable, then (if `B` is provable, then `A∧B` is provable).

This is no coincidence - this correspondence between a logical connective and a type constructor is known as *Curry-Howard-Isomorphism* (or *propositions-as-types*), and we will (rather trivially) prove this isomorphism later in MMT using [views](../../language/modules.html#views).

However, the types above don't quite work in LF, for the simple reason, that `A` and `B` are free variables. The proof rules are valid for *any* propositions `A`, `B`, so to avoid them being free variables, we can instead declare a *function* that takes two proposition `A`,`B` and returns the functions corresponding to the rules. For that, we finally need the dependend function types:

![`\prod_{A:prop}\prod_{B:prop}\vdash A \to \vdash B \to \vdash A\wedge B`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cprod_%7BA%3Aprop%7D%5Cprod_%7BB%3Aprop%7D%5Cvdash%20A%5C%3B%20%5Cto%5C%3B%20%5Cvdash%20B%5C%3B%5Cto%5C%3B%5Cvdash%20A%5Cwedge%20B)  
![`\prod_{A:prop}\prod_{B:prop}\vdash A \wedge B \to \vdash A`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cprod_%7BA%3Aprop%7D%5Cprod_%7BB%3Aprop%7D%5Cvdash%20A%5Cwedge%20B%5C%3B%20%5Cto%5C%3B%5Cvdash%20A)  
![`\prod_{A:prop}\prod_{B:prop}\vdash A \wedge B \to \vdash B`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cprod_%7BA%3Aprop%7D%5Cprod_%7BB%3Aprop%7D%5Cvdash%20A%5Cwedge%20B%5C%3B%20%5Cto%5C%3B%5Cvdash%20B)

Again, noticably, the dependent functions here lend themselves to be read like a "for all" - e.g. we can read the first rule as

> For all `A:prop`, for all `B:prop`: If `A` is provable, then (if `B` is provable, then `A∧B` is provable).

#### The Proof Rules

The full set of rules of the natural deduction calculus is:

Symbol | Introduction Rule(s) | Elimination Rule(s)
----- | ----- | -----
`⊤` | ![`\dfrac{\ }{\vdash\top}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5C%20%7D%7B%5Cvdash%5Ctop%7D) | None
`⊥` | None | ![`\dfrac{\vdash\bot}{\vdash A}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cvdash%5Cbot%7D%7B%5Cvdash%20A%7D)
`¬` | ![`\dfrac{\begin{matrix}[A]\\ \vdots \\ \vdash\bot\end{matrix}}{\vdash\neg A}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cbegin%7Bmatrix%7D%5BA%5D%5C%5C%20%5Cvdots%20%5C%5C%20%5Cvdash%5Cbot%5Cend%7Bmatrix%7D%7D%7B%5Cvdash%5Cneg%20A%7D) | ![`\dfrac{\vdash A\quad\vdash \neg A}{\vdash\bot}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cvdash%20A%5Cquad%5Cvdash%20%5Cneg%20A%7D%7B%5Cvdash%5Cbot%7D)
`∧` | ![`\dfrac{\vdash A\quad \vdash B}{\vdash A \wedge B}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cvdash%20A%5Cquad%20%5Cvdash%20B%7D%7B%5Cvdash%20A%20%5Cwedge%20B%7D) | ![`\dfrac{\vdash A\wedge B}{\vdash A}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cvdash%20A%5Cwedge%20B%7D%7B%5Cvdash%20A%7D) and   ![`\dfrac{\vdash A\wedge B}{\vdash A}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cvdash%20A%5Cwedge%20B%7D%7B%5Cvdash%20B%7D)
`∨` | ![`\dfrac{\vdash A}{\vdash A \vee B}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cvdash%20A%7D%7B%5Cvdash%20A%20%5Cvee%20B%7D) and ![`\dfrac{\vdash b}{\vdash A \vee B}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cvdash%20B%7D%7B%5Cvdash%20A%20%5Cvee%20B%7D) | ![`\dfrac{\begin{matrix}[A]\\ \vdots\\ \vdash C\end{matrix}\quad\begin{matrix}[B]\\ \vdots\\ \vdash C\end{matrix}\quad\begin{matrix}\ \\ \ \\ \vdash A\vee B\end{matrix}}{\vdash C}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cbegin%7Bmatrix%7D%5BA%5D%5C%5C%20%5Cvdots%5C%5C%20%5Cvdash%20C%5Cend%7Bmatrix%7D%5Cquad%5Cbegin%7Bmatrix%7D%5BB%5D%5C%5C%20%5Cvdots%5C%5C%20%5Cvdash%20C%5Cend%7Bmatrix%7D%5Cquad%5Cbegin%7Bmatrix%7D%5C%20%5C%5C%20%5C%20%5C%5C%20%5Cvdash%20A%5Cvee%20B%5Cend%7Bmatrix%7D%7D%7B%5Cvdash%20C%7D)
`⇒` | ![`\dfrac{\begin{matrix}[A]\\ \vdots\\ \vdash B\end{matrix}}{\vdash A \Rightarrow B}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cbegin%7Bmatrix%7D%5BA%5D%5C%5C%20%5Cvdots%5C%5C%20%5Cvdash%20B%5Cend%7Bmatrix%7D%7D%7B%5Cvdash%20A%20%5CRightarrow%20B%7D) | ![`\dfrac{\vdash A\Rightarrow B\quad\vdash A}{\vdash B}`](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdfrac%7B%5Cvdash%20A%5CRightarrow%20B%5Cquad%5Cvdash%20A%7D%7B%5Cvdash%20B%7D)

-----------------------------------

[> 5 - Structures, Lambda, Pi and Implicit Arguments](5structures.html)
