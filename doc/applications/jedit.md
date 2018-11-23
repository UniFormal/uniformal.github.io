---
layout: doc
title: the jEdit IDE
---

The jEdit IDE is the main MMT-based application and the primary to enter and edit MMT content manually.

Installation instructions can be found [here](../setup/jedit.html)

### Functionality

Unless otherwise mentioned, functionality that requires explicit human interaction can be triggered in several ways:
* the `Plugin - MMT` menu of jEdit
* the `MMT` group in the context menu when editing an MMT file
* the group of MMT-related buttons in the toolbar
* predefined keyboard shortcuts (see `Global Options - Shortcuts` and select the MMT Plugin)

Most commands are internally realized as jEdit actions, and these actions can be called in a variety of user-customizable ways.
See `Global Options - Shortcuts` for the list of actions (or https://github.com/UniFormal/MMT/blob/master/src/jEdit-mmt/src/resources/actions.xml if you want to see the internal names, which can be entered, e.g., in the jEdit Action bar).

**Syntax Highlighting**

The mode `mmt` is added for .mmt files, which provides syntax highlighting.
Other mode-specific options including the appearance of the syntax highlighting can be configured via the generic jEdit options dialog.
Most importantly, the mode assigns the token types OPERATOR and KEYWORDn. Additionally, the token types LITERAL1 to LITERAL4 are assigned to brackets at different levels.
The token type COMMENT4 is reseved by MMT. It is assigned to all hidden, i.e., invisible, parts. Changes to its text style are ignored and overwritten.

**Parsing and Type Checking**

MMT files are automatically processed using the MMT parser and type-checker.
This is called by Sidekick (see below), and the Sidekick options for the MMT mode allow configuring when type-checking occurs.

If this gets stuck, MMT can be safely interrupted by pressing MMT's stop button.

**Computation**

The normalize command fully computes the selected expression and shows the result.

**Auto-Completion and Hole-Terms**

Auto-completion is provided and can be configured via the Sidekick plugin. By default it is triggered by CTRL-Space.

Basic auto-completion shows a list of constants that are currently in scope.

But in conjunction with hole-terms, MMT performs unification to provide typing-aware auto-completion.
A hole-term is a term of the form ≪T≫ for a type T.
Type-checking treats it like an unknown term of type T.

If the cursor is placed just before a hole-term, auto-completion runs the MMT theorem prover for a small depth and suggests terms that have the right type.
This includes forward-search (generate closed terms of the right type) and backward-search (find functions that when applied return the right type). Options of the latter kind will, when selected, introduce new hole-terms for the arguments.
This turns the system into a (very simple) interactive theorem prover.

The type checker treats any occurrence of _ in MMT terms as a fresh unknown and tries to infer its value.
This includes calling the (experimental and very weak) automated theorem prover of MMT.
If successful, the term is inserted into the internal syntax (as shown by Sidekick) but the _ remains in the soruce.
If the prove fails but the expected type of the subterm is found, a hole-term is introduced.
In the latter case, the command introduce-hole can be used to replace _ with the hole-term in the source (e.g., in order to use auto-completion).

**Building**

The checking of MMT files happens entirely in memory.
The build buttons can be used to store the OMDoc of the current file in the file system.
Building from within jEdit is equivalent to building via the MMT shell.

**Abbreviations**

The file `abbrevs` (in jEdit's config folder) contains a number of useful abbreviations to produce Unicode characters using Latex-like commands.
For the most common Unicode characters, the abbreviation `jCOMMAND` produces the same character as `\COMMAND` in LaTeX.

Additionally, a few shorter abbreviations are defined for commands that are awkwardly long in LaTeX.
These are in particular the various arrows:

Arrows | short | long
--- | --- | ---       
**single**   | jTa | jTaa
**double**   | jTA | jTAA
**squiggly** | jTs | jTss

Arrow tips T | left | right | left-right
--- | --- | --- | ---
plain    | l  | r  | lr
hooked   | hl | hr | hlr
with bar | bl | br | blr

where T in the first table determines the arrow tips and is given by an entry in the second table. Note that some combinations do not exist because they are not supported by Unicode.

Every *user* can configure the details can be configured in jEdit's `Extras > Global Options > Abbreviations` menu or by editing the `<jedit>/abbrevs` file.
Every *developer* can configure the abbreviations that are available to every user (specifically: every user who runs the MMT setup or who reruns the jedit setup routine) by editing the file `src/jEdit-mmt/src/resources/plugin/abbrevs`.
Users are welcome to submit pull requests to define further abbreviations.

**Interpreter**

An interpreter is also provided. The input is by default type-checked, and written into the scratchpad by assigning the expression to a constant. The command `!help` displays the help.
To set the name of the scratch buffer, the command `!setname (name)` is used, and for setting the theory name inside the scratch buffer, the command `!theory (name)` is used.
Type checking can be turned on and off by using `!check true` and `!check false`. In a similar manner, output to the scratchpad can be turned on and off by using `!output (true|false)`.

### Interaction with Other Components

The MMT plugin integrates with jEdit core components and a number of other plugins. Many of these provide "dockable windows". These are subwindows of the jEdit window, which you open separately via the respective plugin.

**File System Browser:** The plugin provides actions specific to jEdit file system browser. These are available in the browser's plugin menu. This includes in particular actions for compiling files. Files do not have to be opened for this, and all errors will appear in the ErrorList.

**Sidekick:** The plugin provides a Sidekick parser (called "mmt"). Thus, the dockable window of the sidekick plugin provides an outline view and autocompletion for MMT files, both of which are synchronized with the current caret position. Parsing errors appear in the dockable window of the ErrorList plugin.

![`Sidekick example`](/doc/img/screenshots/sidekick.png)

**ErrorList:**
The plugin provides an ErrorList error source (called "mmt"), which maintains compilation errors. These errors appear in the dockable window of the ErrorList plugin.

![`Error list`](/doc/img/screenshots/errorlist.png)

**Hyperlinks:**
The plugin provides a Hyperlink source (called "mmt"). This displays the MMT URI of the identifier under the cursor as a tooltip and permits jumping to its declaration using Control-Click.
Jumping only works if the destination is known to MMT. This is the case if the file has been build by MMT earlier or is currently open in jEdit.

**Console:**
The plugin provides a Console (named "mmt") for the Console plugin. This permits direct access to the [MMT shell](shell.html) in the dockable Console window. It also provides a interpreter for writing MMT declarations into a scratchpad.

![`MMT console`](/doc/img/screenshots/console.png)

![`MMT interpreter`](/doc/img/screenshots/interpreter.png)

**Context Menu:**
The plugin provides a user-extensible mode-specific context menu that is initialized with a common commands in the MMT mode.

**Actions:**
The plugin provides a number of jEdit actions. These can be bound to any key, menu item, or toolbar button via the generic jEdit options dialog. By default, they are available in the MMT plugin menu. 
