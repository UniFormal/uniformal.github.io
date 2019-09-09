---
layout: doc
title: Details on Setting up jEdit
---

The jEdit plugin based on MMT yields an IDE for MMT content.

This section is about the setup of the jEdit plugin.
The functionality is described [here](../applications/jedit)

### Installation

When running MMT for the first time, it will ask whether you want to setup the jEdit support.
To do that, you have to install jEdit *before* you run MMT.
Use the following instructions:

1. Install jEdit, for example from [http://www.jedit.org/](http://www.jedit.org/) and run it at least once, so its config folder will be created (for setting up MMT).
2. If you have just installed jEdit to use it with MMT, MMT will automatically set some useful configurations in jEdit. However, if you already use jEdit for other reasons, MMT will not touch your jEdit configuration. In that case, you may want to set a few settings manually:
  * Set jEdit's default encoding to UTF-8. (Many MMT example files use UTF-8.)
  * Set Sidekick to automatically parse a buffer on save. (Parsing on keystroke can occasionally be too much for MMT.)
  * Set abbreviations to expand on space. (MMT brings in a lot of abbreviations for for Unicode characters. Just write `j` instead of `\`, e.g., `jwedge`.
3. It is not so easy for MMT to automatically set the font in jEdit because it depends on what fonts are installed on your system. Install a font that includes a good amount of unicode characters, such as GNU unifont, and set this font as the font for jEdit text areas. To set a font click on the ```Utilities``` menu, then ```Global Options```, then ```Text Area``` on the left and change the ```Text font``` on the right.
4. Run MMT and follow the instructions to configure jEdit.
5. When running jEdit, if jEdit does not activate the MMT plugin automatically, activate it in the plugin manager dialog.
6. You can now use jEdit to open `.mmt`, e.g., the ons in the `MathHub/MMT/examples/source` folder produced during MMT setup.

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
* running the shell-based [build tool](../archives/building)
* running the build tool from within jEdit using the MMT console that.
