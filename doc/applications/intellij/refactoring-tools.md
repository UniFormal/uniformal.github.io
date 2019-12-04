---
layout: doc
title: 'IntelliJ-MMT: Refactoring Tools'
---

Currently, there is only one refactoring tool, namely the "Generalizer":

## Generalizer

The "Generalizer" is a new component shipped with the release of MMT 16.0.0.

**Example file for generalization:**

<div class="detail"><pre>namespace http://cds.omdoc.org/theorysplittest/generalization/metricAndNormedSpaces❚
import base http://mathhub.info/MitM/Foundation❚

/T A theory extendinding MitM/Foundation's "Math" theory for some needed operators in the examples, namely < and ≥ on ℕ and ℝ.❚
theory OurMath : base:?Math =
  less_than_reals: ℝ ⟶ ℝ ⟶ prop❘ # 1 < 2❙
  geq_nats: ℕ ⟶ ℕ ⟶ prop❘# 1 ≥ 2❙
❚

theory MetricSpace : ?OurMath =
  X : type❙
  d: X ⟶ X ⟶ ℝ❙
❚

theory NormedVectorspace : ?OurMath =
  Y: type❙
  norm: Y ⟶ ℝ❙
  minus: Y ⟶ Y ⟶ Y ❘ # 1 - 2❙
❚

view NormedAsMetricSpace : ?MetricSpace -> ?NormedVectorspace =
  X = Y❙
  d = [a, b] norm (a - b)❙
❚

theory NormedVectorspaceThms : ?OurMath =
  include ?NormedVectorspace❙

  not_rewritable = [a] norm (a - a)❙

  cauchy: (ℕ ⟶ Y) ⟶ prop ❘ = [f] ∀[ɛ: ℝ] ∃[N: ℕ] ∀[n: ℕ] ∀[m: ℕ] (n ≥ N ∧ m ≥ N) ⇒ ((norm ((f n) - (f m))) < ɛ)❙
  convergent_to: (ℕ ⟶ Y) ⟶ Y ⟶ prop ❘ = [f, y] ∀[ɛ: ℝ] ∃[N: ℕ] ∀[n: ℕ] (n ≥ N) ⇒ ((norm ((f n) - y)) < ɛ)❙

  f: ℕ ⟶ Y❙
  f_is_cauchy: ⊦ cauchy f❙

  my_y: Y❙
  f_convergent: ⊦ convergent_to f my_y❙

  in_ball: Y ⟶ Y ⟶ ℝ ⟶ prop ❘ = [y,center,radius] (norm (y - center)) < radius❙

  /T Actually only for ɛ > 0❙
  center_always_in_ball: ⊦ ∀[y: Y] ∀[ɛ: ℝ] in_ball y y ɛ❙

  ball_convergent_to: (ℕ ⟶ Y) ⟶ Y ⟶ prop ❘ = [f, y] ∀[ɛ: ℝ] ∃[N: ℕ] ∀[n: ℕ] (n ≥ N) ⇒ in_ball (f n) y ɛ❙

  decl_mentinioning_prev_decl_in_rewrite_spot: ℝ ❘ = norm (my_y - my_y)❙
  rewrite_variable_name_clash_with_morphism: Y ⟶ Y ⟶ ℝ ❘ = [a, b] norm (a - b)❙
❚</pre></div>

1. Typecheck your files which contain the affected theories and views.
2. Enter MPaths in the input boxes. E.g. for the example file, take:
  - `http://cds.omdoc.org/theorysplittest/generalization/metricAndNormedSpaces?NormedVectorspaceThms` as the input theory
  - `http://cds.omdoc.org/theorysplittest/generalization/metricAndNormedSpaces?NormedVectorspace` as the to-be-generalized part
  - `http://cds.omdoc.org/theorysplittest/generalization/metricAndNormedSpaces?MetricSpace` as the generalization of that part
  - `http://cds.omdoc.org/theorysplittest/generalization/metricAndNormedSpaces?NormedAsMetricSpaces` as the specialization morphism
3. Click `Generalize`
