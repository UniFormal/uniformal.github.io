---
layout: doc
title: Testing
---

MMT undergoes a limited amount of automated testing, to make sure that it functions properly. 

It particular, two kinds of tests exist:

- unit tests
- integration tests

#### Unit Tests

An MMT Unit Test is a test that tests exactly one component of the MMT Source Code. 
They are implemented as standard scala unit tests, and do not need a fully running MMT instance. 
In particular, they do not depend on any archives. 

The unit tests can be run with:

```
    sbt test
```

Historically, MMT has been largely untested. 
Hence only a couple of these exist. 

#### Integration Tests

GitHub Actions run tests on every pushed commit. 
These tests:

- Clone MMT
- Build the mmt.jar
- Run Setup
- Clone a set of core archives and report build status

For every instance of the tests, GitHub actions also makes the .jar available as a downloadable asset. 
These jars are kept around for 30 days. 
To keep a jar available permanently, releases are used. 
#### GitHub Actions

[![Devel Branch CI Status](https://github.com/Uniformal/MMT/workflows/CI/badge.svg?branch=devel)](https://github.com/UniFormal/MMT/actions?query=workflow%3ACI) automatically runs both unit and integration tests after every commit. 
It also automatically uploads an `mmt.jar` for every commit, which is kept for up to six months. 
