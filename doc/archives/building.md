---
layout: doc
title: Building Documents
---

MMT can be used as a build tool using a special [shell command](shell.html).

`build ARCHIVE TARGET [P/A/T/H]` runs the build target `TARGET` on the [archive](archives.html) with id `ARCHIVE`. Optionally, the operation can be restricted to the subfolder `P/A/T/H`.

### Defining Build Targets

The collection of build targets is maintained by the [extension manager](../api/extensions/). New build targets are defined by implementing the [`archives.BuildTarget`](apidoc://info.kwarc.mmt.api.archives.BuildTarget) class.
Build target modfiers and change management are supported for automatically for every build target.

### Build Target Modifiers

* The target `TARGET*` only operates on input files that have been modified since the last build.
* The target `-TARGET` cleans, i.e., deletes the generated files.

The file-properties of the operating system are used to detect changes. Timestamps for the previous build are stored in `META-INF/timestamps`.

Any target may be followed by a modifier. Apart from `--force`, other supported modifiers are `--forceDeps` (which also forces building of dependencies), `--depsFirst`, `--onChange`, `--onError`, `--dry-run` and `--clean` (as well as `--test`,`--test-add` and `--test-update`). Omitting the modifier defaults to `--onChange`, i.e. files are only rebuild if they have changed on disk after an earlier build. (`--onError` rebuilds if the previous build failed with an error.)

### Individual Build Targets
Many build targets work with input and/or output dimensions. Those are the top level folders within an archive.
The most important build targets (which are available by default) include:
<table border="1">
<tr>
<th>Target</th><th>Input dimension</th><th>Output dimension</th><th>Provided by</th><th>Description</th>
</tr>
<tr>
    <td>index</td><td>source</td><td>content, narration, relational</td><td>api</td>
    <td>indexes and prepares OMDoc source files for MMT lookups, the produced dimensions are from where MMT retrieves content, documents, and the ontology, respectively</td>
</tr>
<tr>
    <td>mmt-omdoc</td><td>source</td><td>as index</td><td>api</td>
    <td>like index but parses and type-checks MMT source files instead of OMDoc files</td>
</tr>
<tr>
    <td>twelf-omdoc</td><td>source</td><td>as index</td><td>LF plugin</td>
    <td>like mmt-omdoc but for Twelf syntax</td>
</tr>
<tr>
    <td>html</td><td>narration</td><td>html</td><td>api</td>
    <td>produces html website, which relates to source roughly as JavaDoc does to Java</td>
</tr>
<tr>
    <td>svg</td><td>narration</td><td>svg</td><td>api</td>
    <td>produces theory graphs</td>
</tr>
<tr>
    <td>scala</td><td>content</td><td>scala</td><td>api</td>
    <td>produces Scala stubs for all MMT theories</td>
</tr>
<tr>
    <td>lf-scala</td><td>content</td><td>lf-scala</td><td>LF plugin</td>
    <td>produces LF-aware typed Scala stubs</td>
</tr>
<tr>
    <td>mar</td><td>multiple</td><td>none, produces file NAME.mar</td><td>api</td>
    <td>creates a math archive, a zipped collection of the archive</td>
</tr>
</table>

### Build Queue Interface

See [Build Queue](buildqueue.html) for detailed information on multi-threaded building.

### Error Viewer Interface

See [Error Viewer](errorviewer.html) for detailed information on seeing the results of building many files.
