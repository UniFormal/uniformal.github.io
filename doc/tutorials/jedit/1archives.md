---
layout: doc
title: 1 - Creating Archives
---


Before we look at jEdit, we will create a new archive in the `MMT/content` folder named `tutorial`, containing the following folders/files:

```
tutorial
   |--META_INF
   |     |--MANIFEST.MF
   |
   |--source
         |--fol.mmt
```

The `fol.mmt` will contain our theories, the `MANIFEST.MF` should contain the following data:

```
id: tutorial
narration-base: http://kwarc.github.io/MMT/doc/
ns: http://kwarc.github.io/MMT/
```

The `id` is simply the name of our new archive. The `narration-base` is the namespace for the narrative [*documents*](../../language/namespaces.html) we write. `ns` is the default namespace for the [modules](../../language/modules.html) we will create.

If the `tutorial` folder is in MMT's [math path](../../applications/shell.html#the-math-path), it registers the archive during start up and resolves content paths relative to the `ns`.

----------------------------
 
[> 2 - A First Theory](2theories.html)
