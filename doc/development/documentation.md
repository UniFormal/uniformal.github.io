---
layout: doc
title: About this documentation
---

### Infrastructure

This repository ([UniFormal/uniformal.github.io](https://github.com/uniformal/uniformal.github.io)) contains:

* The MMT homepage in the root directory's `index.html` file, which serves as the main landing page.
  It is plain HTML and can be edited directly.
* A wiki-style documentation for MMT including tutorials in the folder `doc`.
  This is written in markdown (.md files) and postprocessed using Jekyll into a set of static HTML pages. This postprocessing is automatically done upon every commit in the GitHub repository.<br>

	If you want to test changes locally, you can also build and serve the documentation as follows on your local machine:
	
	1. Install Python, Ruby
	2. Install Pygments (a syntax highligher): `python -m pip install Pygments`
	2. `git clone https://github.com/UniFormal/uniformal.github.io.git`
	3. `bundler install`
	4. `jekyll serve --watch` (this command will tell you the URL of the locally spawned web server)

	and GitHub automatically builds (using jekyll) a set of static HTML pages after every commit.
 
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

Inline code, file names, etc. are type-set in `back ticks`. You can typeset larger code blocks as follows:
````
```
Here comes your code
```
````

Optionally, you can specify a language name after the three backticks to get syntax highlighting with [Pygments](http://pygments.org/):

````
```java
public class ThisIsJavaCode {
  /* ... */
}
```
````
 Have a look at the [list of supported languages in the Pygments documentation](http://pygments.org/docs/lexers/) (particularly their "short names").

Additional details (footnotes, popups, etc.) that should not be visible initially are type set as HTML with css class `detail`
<span class="detail">
  For example, as `<span class="detail">extra text</span>`.
</span>. 
