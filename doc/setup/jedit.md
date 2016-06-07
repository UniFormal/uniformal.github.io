---
layout: doc
title: Setting up jEdit
---

The functionality of the jEdit plugin is described [here](../system/applications/jedit.html)

## Setting up jEdit

The jEdit plugin based on MMT yields an IDE for MMT content.
While using jEdit, the current files are constantly checked and maintained in memory. To create hard drive images of the build results, use the [build tool](../system/applications/building.html).

### Installation

1. Install jEdit, for example from [http://www.jedit.org/](http://www.jedit.org/).
2. Using the jEdit plugin manager, install (at least) the following plugins
  * ErrorList
  * Console
  * SideKick
  * Hyperlinks
3. Font and encoding issues for working with files in native MMT syntax (.mmt files):
  * Install a font on your system that includes a good amount of unicode characters, such as GNU unifont, and set this font as the font for jEdit text areas.
  * Make sure jEdit's default encoding is set to UTF-8. 
  * [Install MMT](index.html) (the quick checkout is enough)

To load the plugin run jEdit, open the plugin manager dialog, and select the MMT plugin. After doing that once, the plugin will be loaded automatically when jEdit is started.

### Updating

To update the plugin, just replace the changed jar(s) in jEdit's settings folder (`~/.jedit/jars` on linux, `<USER>AppData\Roaming\jEdit` on windows) and restart jEdit or reload the changed jars via jEdit's plugin manager dialog.

The MMT code also provides the build target `sbt jedit/install` to replace the old jars in the jEdit settings folder. (Calling `MMT/system/deploy/jedit-setup/setup.sh" will additionally copy/uninstall configuration files.)

### Configuration

Configuration is optional. But some steps may be useful.

* Go to the MMT pane of the jEdit plugin options dialog.
* The startup file is an MMT script that is run when the MMT plugin is loaded (usually when jEdit is started).
    If this is empty, it defaults to `<jedit>/plugins/info.kwarc.mmt.jedit.MMTPlugin/startup.msl` (which is created by the install step above).
* The archives folder is a folder containing MMT archives that are added to the math path when the MMT plugin is loaded (usually when jEdit is started).
    If you are working with the OAF, you want to set this to the `content` folder into which you cloned the archives.
* MMT provides some macros. You can bind them to specific combinations using the jEdit options dialog. 
* Pin the SideKick, Console and ErrorList windows to the sides of the main text area.

### jEdit Tips

It is advisable to make the following general jEdit configurations:

**Abbreviations:** Select the setting 'expand abbreviations on space' to activate the abbreviations that come with the plugin.

**Parsing:** Select the setting of the Sidekick plugin to automatically parse the buffer. This activates the parsing/type-checking of the MMT plugin and populates the SideKick tree and the ErrorList list. It is recommended to *deactivate* the menu option `parse on key` in the area `Auto parsing settings`, since parsing tends to defocus the text area making it difficult to type continuously.

**Plugins:** Browse the plugin manager and install all additional plugins you fancy. I recommend BufferTabs, CandyFolds, DirtyGutter, SuperAbbrevs, WhiteSpace, and XML.

**Encoding:** Set UTF-8 as your default encoding in the Options/Encodings.
