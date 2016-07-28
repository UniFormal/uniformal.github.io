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

### An OpenMath Content Dictionary Editor

This tutorial uses the Exporter extension to tranform MMT content into other formats.
Concretely, we export MMT theories as OpenMath content dictionaries.

### A Web-Based Editor

This mini-demo shows how to integrate MMT with HTML pages.

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

### Using a Rewrite
