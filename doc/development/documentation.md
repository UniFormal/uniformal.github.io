---
layout: doc
title: About this documentation
---

### Infrastructure

This is essentially a WiKi except for

* it is maintained on github via the gh-pages repository [uniformal/uniformal.github.io]((https://github.com/uniformal/uniformal.github.io)
* jekyll is used to generate a static output page instead of a database
* editing files using text editors, repository commits or the github online editor

Anybody is allowed and encouraged to add and change the content and the css styles as they see fit. 

### Adding a Page

To add a page, simply add the necessary folders under the doc folder. You can 
use the existing files as a template if needed. Then add the page to the menu
in [\_includes/menu.html](https://github.com/uniformal/uniformal.github.io/edit/master/_includes/menu.html). 

### Formatting Conventions

The title of each page is automatically type-set at level ##.
Sections inside the page start at level ###.

Source code, file names, etc. are type-set in `back ticks`.

Additional details (footnotes, popups, etc.) that should not be visible initially are type set as HTML with css class `detail`. <span class="detail">For example, as `<span class="detail">extra text</span>`.</span>