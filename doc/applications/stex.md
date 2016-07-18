---
layout: doc
title: Integration with sTeX
---

MMT can process .tex file using https://github.com/KWARC/LaTeXML or pdflatex. (So MMT will replace or will be used within https://github.com/KWARC/localmh)

`.tex` input file are expected to be below a `source` folder that is underneath a repository folder (i.e. `sets`) that is underneath a group folder (i.e. `smglom`). Let's assume that the directory containing group folders is called `MathHub` and its parent folder `localmh` (as it was the case for `lmh` from <https://github.com/KWARC/localmh>)

An executable for MMT may be obtained by downloading https://github.com/KWARC/MMT/raw/gh-pages/deploy/mmt.jar

The LaTeXML software needed by MMT is expected to be in the folder `localmh/ext` (as for `lmh`).

The most convenient way to call MMT is using `rbuild` followed by a build target (like `latexml`) and a list of files or folders (relativ to your current directory).

```
mmt.jar rbuild latexml --force MathHub/smglom/mv/source/a*.tex
```

This automatically loads the necessary extensions and archives and also switches on some logging. Furthermore, `rbuild` supports compound (or meta) targets, namely plain targets separated by underscores that will be executed in succession. Running `latexml` followed by `stex-omdoc` will be done by `latexml_stex-omdoc`. (Any combination is possible.)

Any target may be followed by a modifier. Apart from `--force` also `--onChange`, `--onError` and `--clean` are supported. Omitting the modifier defaults to `--onChange`, i.e. files are only rebuild if they have changed on disk after an earlier build. (`--onError` rebuilds if the previous build failed with an error.)

Further options (starting with `--`) are passed (unchecked) to the corresponding target implementation. An option for `latexml` and `pdflatex` is i.e. `--piper-worker-output`.

The following text only describes the more complicated way to call MMT (without compound targets) and can be skipped on first reading.

Within a repository folder (like `smglom/sets` from https://gl.mathhub.info/smglom/sets) `mmt.jar` can be called with the two arguments `file` and `build.msl`, where build.msl is a file containing something like:

```
log console
log+ latexml
extension info.kwarc.mmt.stex.LaTeXML
archive add .
build smglom/sets latexml union.de.tex
```

If the relative file name `union.de.tex` (below `source`) is omitted (or `.` is given) then (currently) all files below `source` will be processed.

Note that the identifier `smglom/sets` following the keyword `build` must correspond to the `id` entry of the file `META-INF/MANIFEST.MF`.

To only see minimal output you may use the following log lines:

```
log- user
log- error
log console
log+ latexml-result 
...
```

A current alternative way to call MMT without `build.msl` file is to pass the lines separated by ` ; ` as a single command line argument in double quotes, i.e. without output:

```
mmt.jar "extension info.kwarc.mmt.stex.LaTeXML ; archive add . ; build smglom/sets latexml union.de.tex"
```

Note the spaces around ` ; `!

Further extensions are `info.kwarc.mmt.stex.PdfLatex` and `info.kwarc.mmt.stex.SmsGenerator` with corresponding build targets `pdflatex` and `sms` (instead of the above `latexml`).

The `extension info.kwarc.mmt.stex.STeXImporter` with target `stex-omdoc` further processes the `.omdoc` files created by LaTeXML for MMT.

Setting logging, extensions or environment variables can be done in a `startup.msl` file that needs to be in the same folder where your mmt.jar is (actually) located (not where a link to mmt.jar is given).

MMT places the output files for `latexml` in a separate folder called `latexml`. `.sms` files remain in `source` whereas `.pdf` files will be placed in folder `export/pdflatex` (without any auxiliary files).
