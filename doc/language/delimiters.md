---
layout: doc
title: Structural Delimiters
---

The only unusual aspect of MMT's default concrete syntax is the use of the characters Unicode U+2758-A as structural delimiters.
These are usually considered whitespace, and most fonts do not even have glyphs for them.
Therefore, typing and displaying them depends on the editor and font used.

The advantage of these delimiters is that they do not clash with any other delimiters used by notations, lexing rules, or external formats that are integrated with MMT.
Therefore, they permit near-perfect error recovery during parsing, orthogonality of language features, and combining different languages in the same file.

Every delimiter marks the end of a declaration or a component of a declaration.

Symbol in [jEdit](../applications/jedit.html) | Delimiter	| Name in Unicode | Marks end of | Comment
---- | ---- | ---- | ---- | ----
![GS](/doc/img/GS.png) | U+275A	| Module Delimiter	| Modules | any declaration that has nested declarations, i.e., theory, view, structure etc.
![RS](/doc/img/RS.png) | U+2759 | Declaration Delimiter | Declarations |	in particular includes and constants. Redundant if end of module follows
![US](/doc/img/US.png) | U+2758 | Object Delimiter | Components of declarations |	in particular type, definiens, notation of a constant. Redundant if end of declaration follows.

Note that these form a hierarchy of nested levels and that we can think of SPACE as the 5th level delimiter, which marks the end of a keyword.

### In jEdit

The [jEdit plugin](../applications/jedit.html) offers three ways to insert these non-standard symbols.

* MMT adds buttons for all three delimiters to the toolbar of jEdit:

  ![menu](/doc/img/menu.png)

  * **O** inserts the object delimiter,
  * **D** inserts the declaration delimiter,
  * **M** inserts the module delimiter.
* via the menu option `Plugins > MMTPlugin > Insert <DELIMITER>`
* via the predefined [abbreviations](../applications/jedit.html#abbreviations):
  * `jOD` for the object delimiter,
  * `jDD` for the declaration delimiter,
  * `jMD` for the module delimiter.

You can modify (or add new) abbreviations in `Extras > Global Options > Abbreviations`.

### In IntelliJ

If you're using the [IntelliJ plugin](../applications/intellij.html) instead, you only have the auto-completed abbreviations at your disposal (besides copy-paste). The shortcuts are identical to the ones in jEdit.

* `jOD` for the object delimiter,
* `jDD` for the declaration delimiter,
* `jMD` for the module delimiter.
