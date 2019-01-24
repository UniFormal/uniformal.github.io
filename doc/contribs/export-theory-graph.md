---
layout: doc
title: Exporting the theory graph as SVG
---

## Export the theory graph as SVG

Building on top of the code presented in the [Getting Started with the MMT API guide](https://uniformal.github.io/doc/tutorials/applications/getting-started):

```scala
// Your config
val mainTheory = ctrl.get(DPath(URI("http://cds.omdoc.org/urtheories")) ? "NatArith")
val svgFilePath = (ctrl.getHome / "out.svg").getAbsolutePath


val tgExporter = new TheoryGraphExporter
tgExporter.init(ctrl)
val graph = tgExporter.buildGraph(mainTheory)

val svgContents = new DotToSVG(File("dot")).apply(graph)

val writer = new OutputStreamWriter(new FileOutputStream(svgFilePath), Charset.forName("UTF-8").newEncoder())
writer.write(svgContents)
writer.close()
```

This needs the command `dot` from the software GraphViz to be installed and available on your environment PATH. Alternatively, you can just print out the string `graph` and then render your file online on [http://www.webgraphviz.com/](http://www.webgraphviz.com/).