---
layout: doc
title: Structural Delimiters
---


The only unusual aspect of the surface syntax is the use of the characters ASCII 28-31 as structural delimiters. These are usually considered whitespace, and most fonts do not have glyphs for them. Therefore, typing and displaying them depends on the editor and font used.

The advantage of these delimiters is that they do not clash with any other delimiters used by notations, lexing rules, or external formats that are integrated with MMT. Therefore, they permit near-perfect error recovery and make it easy to integrate different sublanguages (e.g., for comments or informal content).

Every delimiter marks the end of a declaration or a component of a declaration.

Symbol in [jEdit](../applications/jedit.html) | Delimiter	| Name in ASCII | Marks end of | Comment
---- | ---- | ---- | ---- | ----
![GS](/doc/img/GS.png) | ASCII 29	| Module Delimiter	| Modules | any declaration that has nested declarations, i.e., theory, view, structure etc.
![RS](/doc/img/RS.png) | ASCII 30 | Declaration Delimiter | Declarations |	in particular includes and constants. Redundant if end of module follows
![US](/doc/img/US.png) | ASCII 31 | Object Delimiter | Components of declarations |	in particular type, definiens, notation of a constant. Redundant if end of declaration follows.

Note that these form a hierarchy of nested levels and that we can add SPACE as 5th level delimiter, which marks the end of a keyword.

### In jEdit
The [jEdit plugin](../applications/jedit.html) offers three ways to insert these non-standard symbols.

* MMT adds buttons for all three delimiters to the toolbar of jEdit:

  ![menu](/doc/img/menu.png)
  
  * **O** inserts the object delimiter,
  * **D** inserts the declaration delimiter,
  * **M** inserts the module delimiter.
* via the menu option `Plugins > MMTPlugin > Insert <DELIMITER>`
* via the predefined [abbreviations](../applications/jedit.html#abbreviations):
  * `jUS` for the object delimiter,
  * `jRS` for the declaration delimiter,
  * `jGS` for the module delimiter.

You can modify (or add new) abbreviations in `Extras > Global Options > Abbreviations`.
