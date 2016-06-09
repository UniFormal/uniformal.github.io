---
layout: doc
title: Setting up jEdit
---

## The jEdit IDE

Installation instructions for the jEdit plugin can be found [here](../../setup/jedit.html)

### Functionality

**The MMT Mode**

The mode `mmt` is added for .mmt files, which includes syntax highlighting. Mode-specific options including the appearance of the syntax highlighting can be configured via the generic jEdit options dialog.
Most importantly, the mode assigns the token types OPERATOR and KEYWORDn. Additionally, the token types LITERAL1 to LITERAL4 are assigned to brackets at different levels.
The token type COMMENT4 is reseved by MMT. It is assigned to all hidden, i.e., invisible, parts. Changes to its text style are ignored and overwritten.

**Abbreviations**

The file `abbrevs` (in jEdit's config folder) contains a number of useful abbreviations to produce Unicode characters using Latex-like commands.
For the most common Unicode characters, the abbreviation `jCOMMAND` produces the same character as `\COMMAND` in LaTeX.
The details can be configured in jEdit's `Extras > Global Options > Abbreviations` menu or by editing the `<jedit>/abbrevs` file.

### Interaction with Other Components

The MMT plugin integrates with jEdit core components and a number of other plugins. Many of these provide "dockable windows". These are subwindows of the jEdit window, which you open separately via the respective plugin.

**File System Browser:** The plugin provides actions specific to jEdit file system browser. These are available in the browser's plugin menu. This includes in particular actions for compiling files. Files do not have to be opened for this, and all errors will appear in the ErrorList.

**Sidekick:** The plugin provides a Sidekick parser (called "mmt"). Thus, the dockable window of the sidekick plugin provides an outline view and autocompletion for MMT files, both of which are synchronized with the current caret position. Parsing errors appear in the dockable window of the ErrorList plugin.

**ErrorList:**
The plugin provides an ErrorList error source (called "mmt"), which maintains compilation errors. These errors appear in the dockable window of the ErrorList plugin.

**Hyperlinks:**
The plugin provides a Hyperlink source (called "mmt"). This displays the MMT URI of the identifier under the cursor as a tooltip and permits jumping to its declaration using Control-Click.
Jumping only works if the destination is known to MMT. This is the case if the file has been build by MMT earlier or is currently open in jEdit.

**Console:**
The plugin provides a Console (named "mmt") for the Console plugin. This permits direct access to the [MMT shell](shell.html) in the dockable Console window.

**Hiding:**
All text enclosed in `%{SHOW ... }%` is hidable and shown. All text enclosed in `%{HIDE ... }%` is hidable and hidden. The delimiters themselves are always hidden. Hiding is achieved by reducing the font size to 0, i.e., the hidden parts are still in the buffer and treated as usual in all situations except for displaying.

**Actions:**
The plugin provides a number of jEdit actions. These can be bound to any key, menu item, or toolbar button via the generic jEdit options dialog. By default, they are available in the MMT plugin menu. 
