---
layout: doc
title: Contributors
---

### Main Branches

There are three central branches:
* master: main development line, used by developers, stable and including latest features
* release: used by external users, very stable, occasionally merged into from master
* devel: a branch of master that is periodically merged into master; this branch is under constant develoment by Florian

Every MMT archive on MathHub has two corresponding branches master and release.
For testing purposes, release branches of archives are tested against the release branch of MMT, and accordingly for master branches.

### Feature Branches

MMT developers typically branch for individual features from master but may sometimes have to branch from devel.
Usually this involves a discussion with Florian.
In particular, inexperienced contributors and developers of cutting-edge features typically have to work with devel in order to collaborate with Florian.

MMT developers merge their features into development or master according to their own judgment.
Usually this involves an informal discussion with core developers or a pull request.
If they merge into master, they must also merge the resulting master into devel.

### Protections and Tests

Pushes to release must pass the corresponding test.

Pushes to master should pass the corresponding test. (This 'should' will probably become a 'must' in the future.)

All three main branches are protected from force-pushes.

The sbt build file contains the following tests:
* release/build and release/test: build certain projects and certain archives that must work in releases
* master/build and master/test: build certain projects and certain archives that should work on the master branch