---
layout: doc
title: Application Development with MMT
---

In this tutorial, we show how to build a few minimal applications on top of the MMT library.
We will not build the applications step by step. But they are chosen to be easy to understand, reproduce, and play with.
They cover various but not all of the [extension interfaces](../api/extensions/) that MMT provides to application developers.

The following assumes that

* MMT has been [installed](../../setup),
* archives are placed in some folder, which is refered to as `CONTENT`,
* [jEdit](../../applications/jedit) is used for editing mmt files. <span class="detail">Other editors will work but might make editing awkward.</span>

<hr/>

### A Web-Based Editor

This mini-application shows how to easily integrate MMT with HTML pages.
It uses

* the core algorithms of MMT,
* the MMT HTTP server,
* the MMT query language,
* and the Javascript interface to MMT.

#### Behavior

First we start an MMT server:

 1. run `mmt.jar`
 1. enter `server on 8080`

Now download the file
[src/mmt-api/resources/mmt-web/editing-example.html](https://github.com/UniFormal/MMT/blob/master/src/mmt-api/resources/mmt-web/editing-example.html)
which is provided as part of the MMT sources.

Opening the file in a browser shows two input fields for

 * the URI of an MMT theory
 * an MMT expression relative to that theory

Clicking the commit button shows the same expression in MathML obtained by

 1. parsing
 1. type reconstruction
 1. simplification
 1. conversion to MathML

Best results of MathML display are obtained in Firefox.

#### Implementation

The html file is self-documenting. Open it in a text editor to see how it works.

You can also use your browser's inspector to see the Ajax request and response that the submit button generates.

<hr/>

### An OpenMath Content Dictionary Editor

This mini-application shows how to use MMT as an editor for OpenMath content dictionaries.
It uses

* the MMT build system,
* the [Exporter extension](../api/extensions/) for defining new build targets,
* the meta-data annotations to MMT content,
* the extensible MMT parser.

Concretely, it exports MMT theories as content dictionaries.

#### Behavior

Consider the archive `MMT/examples`, which was cloned automatically during setup.
In it, consider the files in the folder `source/tutorial`.

 1. Run `mmt.jar`
 1. Enter the commands
    
    ```
    extension info.kwarc.mmt.openmath.Exporter
    build MMT/examples openmath http..cds.omdoc.org/examples/tutorial
    ```

The first command registers the exporter with MMT. <span class="detail" markdown="1">There are several ways to automate this registration. For example, you can script MMT by putting the commands in an `msl` file or permanently add the exporter by adding an entry to your `mmtrc` file.</span>
The second one runs the build target all theories:

 * The exporter traverses all theories in the `content` folder, which are organized by their URI. Therefore, we restrict it to the folder `http..cds.omdoc.org/examples/tutorial` to export all theories of the tutorial.
 * It produces one ocd file per theory in the folder `export/openmath/content` of the archive.

The types and definitions are used to generate FMPs. The meta-data key `@_description` is used to give descriptions.

#### Implementation

The implemenation is part of the MMT sources in the project `mmt-openmath`.
The only file of this project is [src/mmt-openmath/src/info/kwarc/mmt/openmath/Exporter.scala](https://github.com/UniFormal/MMT/blob/master/src/mmt-openmath/src/info/kwarc/mmt/openmath/Exporter.scala).
It is self-documenting.

<hr/>

### Adding Computational Rules: LF + Rewriting + Literals

This mini-demo uses explores how to extend MMT's semantics by dynamically adding rules.
It uses

* extensible literals to add primitive natural numbers
* rule-based type checking by adding new rules for computing and unifying with natural numbers
* a ParserExtension to add a new keyword for adding rules for computing with literals
* a ChangeListener that generates new rewrite rules for certain user-annotated constant

#### Behavior

Consider the file `tutorial/3-literalsrules.mmt` in the archive `MMT/examples`.

It defines the natural numbers and then adds two kinds of rules:

 1. Computation rules are implemented in the file `scala_realizations/info/kwarc/mmt/examples/tutorial` of the archive and added to the theory using the `rule` keyword.
 1. Rewrite rules are declared using the annotation `role Simplify`.

#### Implementation

Computation rules is already part of MMT's core algorithms.
This application has to add new ways for adding computation rules dynamically.
The implementation is not presented as a minimal example. Instead, we provide links to code in the main MMT packages.

 1. The keyword `rule` is added by a ParserExtension that is part of the core MMT code and that is loaded by default.
 It is defined in the file [src/mmt-api/src/main/info/kwarc/mmt/api/symbols/RealizedConstant.scala](`https://github.com/UniFormal/MMT/blob/master/src/mmt-api/src/main/info/kwarc/mmt/api/symbols/RealizedConstant.scala`).
 1. The `role Simplify` is picked up by the ChangeListener defined in the file `[https://github.com/UniFormal/MMT/blob/master/src/mmt-lf/src/info/kwarc/mmt/lf/SimplificationRuleGenerator.scala](src/mmt-lf/src/info/kwarc/mmt/lf/SimplificationRuleGenerator.scala)`. It inspects the type of each new constant with the appropriate role, generates a rule, and adds it to the theory.
