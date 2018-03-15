---
layout: doc
title: About this documentation
---

### Infrastructure

This repository ([uniformal/uniformal.github.io](https://github.com/uniformal/uniformal.github.io)) contains:

* The MMT homepage in the root directory's `index.html` file, which serves as the main landing page.
  It is plain HTML and can be edited directly.
* A WiKi-style documentation for MMT including tutorials in the folder `doc`.
  This is written in markdown (.md files), and GitHub automatically builds (using jekyll) a set of static HTML pages after every commit.
 
### Editing Wiki Pages
  
Every Wiki page contains a link for editing, which opens GitHub's in-browser editor, which includes a previewer for the markdown syntax.

Anybody is allowed and encouraged to add and change the content and the css styles as they see fit.
If you lack access rights, contact us.

### Adding Wiki Pages

To add a page, simply add the necessary folders under the doc folder. You can 
use the existing files as a template if needed. Then add the page to the menu
in [\_includes/menu.html](https://github.com/uniformal/uniformal.github.io/edit/master/_includes/menu.yml). 

### Formatting Conventions for the Wiki

The title of each page is automatically type-set at level ##.
Sections inside the page start at level ###.

Source code, file names, etc. are type-set in `back ticks`.

Additional details (footnotes, popups, etc.) that should not be visible initially are type set as HTML with css class `detail`
<span class="detail">
  For example, as `<span class="detail">extra text</span>`.
</span>. 
