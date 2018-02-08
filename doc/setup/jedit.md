---
layout: doc
title: Details on Setting up jEdit
---

The jEdit plugin based on MMT yields an IDE for MMT content.

This section is about the 'setup' of the jEdit plugin.
The 'functionality' is described [here](../applications/jedit.html)

### Installation

When running MMT for the first time, it will ask whether you want to setup the jEdit support.
To do that, you have to install jEdit *before* you run MMT.
Use the following instructions:

1. Install jEdit, for example from [http://www.jedit.org/](http://www.jedit.org/) and run it at least once, so its config folder will be created (for setting up MMT).
2. Font and encoding issues for working with files in native MMT syntax (.mmt files):
  * Install a font on your system that includes a good amount of unicode characters, such as GNU unifont, and set this font as the font for jEdit text areas. To set a font click on the ```Utilities``` menu, then ```Global Options```, then ```Text Area``` on the left and change the ```Text font``` on the right. 
  * You should also set jEdit's default encoding to UTF-8 because many example files use Unicode. To change the default encoding click on the ```Utilities``` menu, then ```Global Options```, then ```Encodings``` on the left and change the ```Default Character encoding``` on the right.
3. Run MMT and follow the instructions to configure jEdit.
4. Run jEdit, open the plugin manager dialog, and activate the MMT plugin.
   After doing that once, the plugin will be loaded automatically when jEdit is started.

### Dependencies of the MMT Plugin

The MMT plugin depends on the following other jEdit plugins
  * ErrorList
  * Console
  * SideKick
  * Hyperlinks

During setup, MMT will try to automatically download and configure these so that normally no further steps are needed.
However, if something goes wrong, you can also install these plugins manually: click on the ```Plugins``` menu, then ```Plugin Manager```, then click on the ```Install``` tab, check the plugins you want to install and click ```Install```.  

<!--
### Updating

To update the plugin, just replace the changed jar(s) in jEdit's settings folder (`~/.jedit/jars` on linux, `<USER>AppData\Roaming\jEdit` on windows) and restart jEdit or reload the changed jars via jEdit's plugin manager dialog.

The MMT code also provides the build target `sbt jedit/install` to replace the old jars in the jEdit settings folder. (Calling `mmt :jeditsetup" will additionally copy/uninstall configuration files.)
--->

### Options of the MMT Plugin

Configuration the MMT plugin is optional. But some steps may be useful.

* Go to the MMT pane of the jEdit plugin options dialog.
* The startup file is an MMT script that is run when the MMT plugin is loaded (usually when jEdit is started).
  If this is empty, it defaults to `JEDIT/plugins/info.kwarc.mmt.jedit.MMTPlugin/startup.msl`.
* The archives folder is a folder containing MMT archives that the plugin will load.
* MMT provides some macros. You can bind them to specific combinations using the jEdit options dialog. 
* Pin the SideKick, Console and ErrorList windows to the sides of the main text area.

### jEdit Tips

It is advisable to make the following general jEdit configurations:

**Abbreviations:** Select the setting 'expand abbreviations on space' to activate the abbreviations that come with the plugin.

**Parsing:** Select the setting of the Sidekick plugin to automatically parse the buffer. This activates the parsing/type-checking of the MMT plugin and populates the SideKick tree and the ErrorList list. It is recommended to *deactivate* the menu option `parse on key` in the area `Auto parsing settings`, since parsing tends to defocus the text area making it difficult to type continuously.

**Plugins:** Browse the plugin manager and install all additional plugins you fancy. I recommend BufferTabs, CandyFolds, DirtyGutter, SuperAbbrevs, WhiteSpace, and XML.

**Encoding:** Set UTF-8 as your default encoding in the Options/Encodings.

### Building from within jEdit

While using jEdit, the current files are constantly checked and maintained in memory.

To store the results persistently, you need to build the files.
This can be done by

* the button in jEdit
* running the shell-based [build tool](../applications/building.html)
* running the build tool from within jEdit using the MMT console that.
