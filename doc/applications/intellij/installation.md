---
layout: doc
title: IntelliJ-MMT Installation & First Usage
---
[IntelliJ IDEA](https://www.jetbrains.com/idea/) is a multi-purpose Java-based IDE. An MMT plugin adding functionality for creating, type checking MMT sources is available.

## Installing the Plugin itself

In IntelliJ go to *File* -> *Settings* -> *Plugins* and search in *IntelliJ's marketplace* for "mmt".

<!-- Dennis doesn't provide zipped distributions anymore.

Alternatively, you can install the plugin by extracting [the latest version in UniFormal/IntelliJ-MMT](https://github.com/UniFormal/IntelliJ-MMT/tree/master/build/distributions) to `<IntelliJ IDEA settings directory>/config/plugins`. The settings directory depends on your operating system and can be found in [IntelliJ's article on it](https://intellij-support.jetbrains.com/hc/en-us/articles/206544519-Directories-used-by-the-IDE-to-store-settings-caches-plugins-and-logs).

-->

## IDE Font setup

Since MMT files make heavy use of Unicode math charcters, be sure to have a font installed supporting it and IntelliJ using it. You can do so as follows:


1. Download and install GNU Unifont: http://unifoundry.com/unifont/index.html
2. In IntelliJ IDEA go to *File* -> *Settings* -> *Editor* -> *Font* and choose "Unifont" as the fallback font.
3. For developers: if you print MMT surface syntax to the console (e.g. using the MMTSyntaxPresenter class), you might want to use the same font in the console: under *File* -> *Settings* -> *Editor* -> *Color Scheme* -> *Console Font* choose "Unifont" as the "Font" (not fallback font in this case!)

## Usage

### Initial project setup

1. Set up a new MathHub-project in IntelliJ (this will contain all your MMT archives, an .msl-file and an mmtrc). You may choose a preexisting folder with MMT archives; these will **not** be overwritten.
2. Under *File* -> *Settings* -> *Editor* -> *File Encodings* set the "project encoding" to "UTF-8". It is recommended to set the global encoding and any other encoding you see on the settings page to "UTF-8" as well. Also choose "Create UTF-8 files: with NO BOM".

### Getting data to work with

- In the project-view on the left, select the *MathHub* view to get an overview over all available MMT groups on 
[MathHub](http://gl.mathhub.info). Groups usually contain archives with mmt-data which can be accessed through clicking on the arrow next to the project name to expand it. You can *git clone* archives by right-clicking an archive and choosing *Install archive*. 

- Note: on Windows, `lmh` (a tool to pull archives from MathHub) uses  the command `sh --login -c git ...`. Thus, you need to have `sh` as well as `git` on your PATH. This is easiest accomplished by having installed Git the usual way and adding `C:\Program Files\Git\bin` -- which contains `sh` to your PATH.

- You may encounter an error message stating "installation has failed, please make sure that git is installed and try again." There are several possible reasons for this (this list is probably non-exhaustive):

  1. You clicked on a group not an archive. This is a known bug of the MMT-Intellij Plugin. **Solution:** Until this gets fixed: type `lmh install group name` into the MMT-shell where `group name` is the name of the group you want to install (usually the string that appears in the Mathhub Pane without the prepended "~". Alternatively, install the archives contained in the group individually instead.
  2. You do not have access rights to the desired archive. **Solution:** Not all archives are public, for example because they are experimental in nature. Contact the person responsible for the archive to ask them for access rights.
  3. You are on Windows and do not have the git bash console "sh" in your path. **Solution:** See the note above on how to fix this.
  4. You have not set-up git to clone repositories with ssh. **Solution:** [Set up an ssh key and add it to your Github account.](https://help.github.com/en/enterprise/2.16/user/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
 
### Notes on automatic type checking

- By default, the Plugin does **not** type check the terms of an open *mmt*-file, since doing so is computationally expensive and inconvenvient for the user. Type checking can be easily activated and deactivated in the *Errors* panel of the MMT tool window (View -> Tool Windows -> MMT)
- The *Document Tree* (on the left border of the IntelliJ-Window) only shows the syntax tree of the document that has been type checked last. To see the tree for the currently opened document, check the *Type Checking* checkbox in the *Errors* panel. Automatically navigating the syntax tree by caret position in the document can be turned on and off with the corresponding check box at the top of the *Document Tree* panel.
