---
layout: doc
title: The IntelliJ IDE
---
[IntelliJ IDEA](https://www.jetbrains.com/idea/) is a multi-purpose Java-based IDE. An MMT plugin adding functionality for creating, type checking MMT sources is available.

## Installation

### Plugin

In IntelliJ go to *File* -> *Settings* -> *Plugins* and search in *IntelliJ's marketplace* for "mmt".

Alternatively, you can install the plugin by extracting [the latest version in UniFormal/IntelliJ-MMT](https://github.com/UniFormal/IntelliJ-MMT/tree/master/build/distributions) to `<IntelliJ IDEA settings directory>/config/plugins`. The settings directory depends on your operating system and can be found in [IntelliJ's article on it](https://intellij-support.jetbrains.com/hc/en-us/articles/206544519-Directories-used-by-the-IDE-to-store-settings-caches-plugins-and-logs).

### IDE Font setup

Since MMT files make heavy use of Unicode math charcters, be sure to have a font installed supporting it and IntelliJ using it. You can do so as follows:

1. Download and install GNU Unifont: http://unifoundry.com/unifont/index.html
2. In IntelliJ IDEA go to *File* -> *Settings* -> *Editor* -> *Font* and choose "Unifont" as the fallback font.
3. For developers: if you print MMT surface syntax to the console (e.g. using the MMTSyntaxPresenter class), you might want to use the same font in the console: under *File* -> *Settings* -> *Editor* -> *Color Scheme* -> *Console Font* choose "Unifont" as the "Font" (not fallback font in this case!)

## Usage

### Initial project setup

1. Set up a new MathHub-project in IntelliJ (this will contain all your MMT archives, an .msl-file and an mmtrc). You may choose a preexisting folder with MMT archives; these will **not** be overwritten.
2. Under *File* -> *Settings* -> *Editor* -> *File Encodings* set the "project encoding" to "UTF-8". It is recommended to set the global encoding and any other encoding you see on the settings page to "UTF-8" as well. Also choose "Create UTF-8 files: with NO BOM".

### Getting data to work with

- In the project-view on the left, select the *MathHub* view to get an overview over all available MMT archives on 
[MathHub](http://gl.mathhub.info). You can *git clone* them via right-clicking an archive and choosing *Install archive*.

### Using the Generalizer

The "Generalizer" is a new component shipped with the release of MMT 16.0.0.

**Example file for generalization:** <span class="detail">```namespace http://cds.omdoc.org/theorysplittest/generalization/metricAndNormedSpaces❚
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
❚```</span>

1. Enter MPaths in the input boxes. E.g. for the example file, take:
  - `http://cds.omdoc.org/theorysplittest/generalization/metricAndNormedSpaces?NormedVectorspaceThms` as the input theory
  - `http://cds.omdoc.org/theorysplittest/generalization/metricAndNormedSpaces?NormedVectorspace` as the to-be-generalized part
  - `http://cds.omdoc.org/theorysplittest/generalization/metricAndNormedSpaces?MetricSpace` as the generalization of that part
  - `http://cds.omdoc.org/theorysplittest/generalization/metricAndNormedSpaces?NormedAsMetricSpaces` as the specialization morphism
2. Click `Generalize`

### Notes on automatic type checking

- By default, the Plugin does **not** type check the terms of an open *mmt*-file, since doing so is computationally expensive and inconvenvient for the user. Type checking can be easily activated and deactivated in the *Errors* panel of the MMT tool window (View -> Tool Windows -> MMT)
- The *Document Tree* (on the left border of the IntelliJ-Window) only shows the syntax tree of the document that has been type checked last. To see the tree for the currently opened document, check the *Type Checking* checkbox in the *Errors* panel. Automatically navigating the syntax tree by caret position in the document can be turned on and off with the corresponding check box at the top of the *Document Tree* panel.
