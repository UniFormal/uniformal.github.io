---
layout: doc
title: Integration with LaTeXML
---

The MMT `rbuild` action allows to pass options to the target implementation. For the executable of a target the target name itself can be used as an option, i.e. `rbuild latexml --latexml=latexmlc ...`.
Other options for `latexml` are `--latexmls=...`, `--profile=...`, `--expire=...`, `--port=...`, `--preload=...`, `--path=...`, `--timeout=...`, and `--pipe-worker-output`. 

`--timeout=...` and `--pipe-worker-output` are also options for `pdflatex`. In order to change the executable for `pdflatex` from `xelatex` (the default) to `pdflatex` write:

```
mmt.jar rbuild pdflatex --force --pdflatex=pdflatex <files>
```

An alternative way is to use environment variables. The above options have precedence, but 
settings for `--preload=...` and `--path=...` simply accumulate. 

There are no environment variable for the options `--timeout=...` (defaults to 300 seconds) and `--pipe-worker-output` (to show process output on stdout).

The following environment variables can be set either in your shell or in your build.msl file using `envvar` in order to customize LaTeXML processing. For `envvar` the value of variables must be given within double quotes, i.e. `envvar LATEXMLEXPIRE "30"`. Use:

 - LATEXMLC to set the path to your LaTeXML client. The default is to use `/path/to/localmh/ext/perl5lib/bin/latexmlc`.
 - LATEXMLS to set the path to the LaTeXML server. The default is to use `/path/to/localmh/ext/perl5lib/bin/latexmls`.
 - LATEXMLPROFILE to set the `--profile=` argument of LaTeXML. The default is `stex-smglom-module`.
 - LATEXMLEXPIRE to set the `--expire=` argument of LaTeXML. The default is `600`. Setting it to `-1` avoids the server `latexmls` that is expected to be in the PATH augmented by `/path/to/localmh/ext/perl5lib/bin`.
 - LATEXMLPORT to set the `--port=` argument of LaTeXML. The default is between `3334` and `4333` depending on the archive.
 - LATEXMLPRELOADS to set a space-separated list of additional `--preload=` arguments. The default is none.
 - LATEXMLPATHS to set a space-separated list of additional `--path=` arguments. Despite this setting `/path/to/localmh/sty` is always passed as `--path=` argument.

When creating .pdf files the variable PDFLATEX may be used to set the pdflatex binary. By default `xelatex` from your PATH will be used.

Also the variables STEXSTYDIR, TEXINPUTS, and PERL5LIB influence the processing.
By default they are set to `/path/to/localmh/ext/sTeX/sty`, `.//:/path/to/localmh/sty:/path/to/localmh/ext/sTeX/sty//:`, and `/path/to/localmh/ext/perl5lib/lib/perl5:/path/to/localmh/ext/LaTeXML/blib/lib` respectively. Given variables TEXINPUTS or PERL5LIB are extended at the front by these defaults. A user-defined STEXSTYDIR variable should denote a single directory and will be used as given.

Note that the above absolute path `/path/to/localmh/` is just an example that may be different on your system. The folder `localmh` (that may even be called differently, too) will be computed from your input files.

It is possible to exclude files from builds by adding them into the file `META-INF/MANIFEST.MF` under the key `no-sms`, `no-omdoc`, or `no-pdf`. The string value following any of these keys and the colon is interpreted as a space delimited list of regular expression. All regular expressions are compared to the short input file name (without path) in turn. If any regular expression (a java pattern) `matches` (or is illegal) the input file will not be built. A message `skipping ...` will be shown. Folders can not be excluded by this mechanism. (A java pattern `.*` matches everything.)
