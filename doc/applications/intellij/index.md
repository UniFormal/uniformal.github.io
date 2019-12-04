---
layout: doc
title: IntelliJ-MMT Plugin
---

[IntelliJ IDEA](https://www.jetbrains.com/idea/) is a multi-purpose Java-based IDE. An **MMT plugin** adds functionality to deal with MMT sourecs. It serves the usual features of "language plugins":

- syntax highlighting
- type checking
- autocompletion
- refactoring tools (limited)

## Installation & First Usage

See the [IntelliJ-MMT Plugin Installation page](installation).

## Refactoring Tools

See [refactoring tools page](refactoring).

## Usage of the Sidekick

The sidekick appears as a panel on the left side of an IntelliJ MMT project:
![Screenshot of the MMT sidekick showing an expanded syntax tree of a theory, a declaration and its type component][../../../img/intellij-mmt-sidekick.png]

*After typechecking* the currently focussed MMT file, it shows all theories, views and their declarations. You can use this to

- **bidirectionally inspect** MMT data structures to see how MMT sees your document. By **left-clicking** on a node in that tree you can go to the corresponding location in the source file. By activating the "Navigate" checkbox, you can move your cursor in the current MMT file to navigate to the corresponding node in the tree.
- Starting with MMT plugin v.19+, **reconstruct MMT surface syntax** by **right-clicking**:

    ![Screenshot of the MMT sidekick reconstructing MMT surface syntax][../../../img/intellij-mmt-sidekick-surface-syntax.png]