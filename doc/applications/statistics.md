---
layout: doc
title: MMT Statistics Exporter
---

This adds the build target 'statistics' to MMT producing statistical information about an archive or a mmt document. The statistics are generated from the relational data files in an archive and are written to json files in export/statistics, one file per MMT document. Each statistics file contains a list of key value pairs (formaly a JSON array of JSON objects), each pair consist of a string describing what is counted and the count itself. 
How exactly different declarations in the archive are counted is detailed below: 

### Types of counted objects

The sorts of different counted objects are the following ones: 
- `documents`, `theories` and `views` declared in the archive or document (transitive closure of the `declares` relation)
- `explicit theory morphisms` (transitive closure of views)
- `any theory morphisms`(transitive closure of any (explicit or implicit theory morphisms))
- `constants` of different type declared (as above) in the archive or document:
  - `structures` and `patterns`
  - `untyped constants` (can't be differentiated further) and `maltyped constants` (whoose type cannot be inferred)
  - Term-level constants (which ultimately return a term)
    - `data constructors`
    - `rules`
  - Type-level constants (which ultimately return a type)
    - `datatype constructors`
    - `judgment constructors`
  - constants of a `high universe` (returning a kind, or classes even higher in the type hirachy)
  - If not annotated otherwise (in the relational files) constants will be counted as `typed constants` as a fallback 
- Induced declarations by `explicit theory morphisms`, distinguished in the above types
- Induced declarations by `any theory morphisms`, also distinguished in the above types

Since the statistics are based on the relational files, when an archive is updated, it needs to be rebuild first, before the statistics can be updated. 
