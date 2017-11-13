---
layout: doc
title: Contributing
---

This document explains the general development model of MMT. Before contributing to MMT, you should read this document to understand what is going on.

### Coding Style

See [here](scala) for some code conventions.

### Branches

#### Main Branches

There are three central branches:

* ```master```: main development line, used by developers, stable and including latest features
* ```release```: used by external users, very stable, occasionally merged into from master
* ```devel```: a branch of master that is periodically merged into master; this branch is under constant development by Florian

Every MMT archive on MathHub has two corresponding branches master and release.
For testing purposes, release branches of archives are tested against the release branch
of MMT, and accordingly for master branches.

#### Feature Branches

MMT developers typically branch for individual features from ```master``` but may sometimes have to branch from devel.
Usually this involves a discussion with Florian.
In particular, inexperienced contributors and developers of cutting-edge features typically have to work with ```devel``` in order to collaborate with Florian.

MMT developers merge their features into ```devel``` or ```master``` according to their own judgment.
Usually this involves an informal discussion with core developers or a pull request.
If they merge into master, they must also merge the resulting master into ```devel```.

### Pushing and Code Review

All code contributions to the MMT repository should be reviewed by one of the principal developers.
For core MMT functionality, this is essentially Florian at the moment.
There are two essential workflows:

* **small commits**: commits that repair bugs or mildly generalize functionality must pass through the `devel` branch, so that Florian can see, test, and review them. Commits should be accompanied by a meaningful message that explains what this commit tries to do and what it does to achieve that.
* **large commits**: introduce significant new functionality, generalize, or refactor existing functionality, and/or change APIs. Such commits *must* be accompanied with a MEP (MMT Extension proposal) that motivates the extended/changed functionality, details the (proposed) API changes and implementation, and discusses any invariants that are violated/required by the functionality at a level that is sufficient for MEP review by the MMT community. MEPs are usually prototyped in a feature branch. The specification can come before the implementation, or can be a result of the prototyping process. In the latter case, the MEP specification is part of the pull request that proposes to merge the functionality. In any case, the specification should be sufficient to serve as initial documentation if the MEP is accepted. 

#### Protections and Tests

Pushes to ```release``` must pass the corresponding test(s).

Pushes to ```master``` should pass the corresponding test(s). (This 'should' will probably become a 'must' in the future.)

All three main branches are protected from force-pushes.

The `sbt` build file contains the following tests:

* release/build and release/test: build certain projects and certain archives that must work in releases
* master/build and master/test: build certain projects and certain archives that should work on the master branch

### Git workflows

Making changes in MMT is possible in two different ways, through making forks and making branches. Usually you should only contribute directly to a branch if you know what you are doing.

One way of making changes is to make a [fork of the repository](https://help.github.com/articles/about-forks/) and then create a pull request to merge the changes back into the ```master``` branch. A fork is a copy of the repository that can be used to make a changes without affecting the original code. Pull requests should only be made after the actual code compiles and should always go onto the master branch.

#### Forking

External contributors are welcome to create forks.
However, note that the MMT license forbids distributing forked versions.
Therefore, forks are only useful if they are temporary. All changes in a fork should be reintegrated with the main project as fast as possible.

Students in the MMT research group(s) should never work on a fork.
Exceptions are only allowed with their advisor's permission.
Instead, they should ask for a branch to be created for them.

#### Updating the release branch

To mark a version of MMT as a release, we again use pull requests. 
This time we merge from ```master``` onto ```release```. 
Again go to the main repository page and select [New pull request](https://github.com/UniFormal/MMT/compare/release...master). 
Choose ```release``` as the base and ```master``` as the head. 
Now write a title as well as a description of the changes that have been made since the last merge to the ```release``` branch. 
Then create the pull request by clicking the "Create pull request" button.

Only repository owners and administrators can merge this pull request.
<!-- In order to ensure stability, this additionally requires a [review](https://help.github.com/articles/about-pull-request-reviews/) from a maintainer. To create a review, select the "view changes" button inside the newly created pull request. After looking at the changes made, you can create a review by clicking the "Review changes" button. You can then write a comment as well as either "approve" or "request changes" to the pull request. -->

Once <!-- someone has submitted an approving review and --> the travis tests have passed, the pull request can be merged by any core developer.

#### Making a binary release

After the release branch has been updated, a binary release should be made. 
For this we use GitHubs release system - all releases can be found on the [MMT release page](https://github.com/UniFormal/MMT/releases). 
Making a release involves two steps, making a tag and uploading a jar that can be distributed to users. 

To create a new release, visit the [draft a new release](https://github.com/UniFormal/MMT/releases/new) page. 
In the tag version, make sure that the target is the ``release`` branch . 
By convention, the name of the new tag is the current day, ``DD-MMM-YYYY``. 
The name should be ``nth Git Release`` (where n is increasing). 
Optionally, a human readable description can be written for the release. 
Finally, generate a fat jar locally and attach it to the release by dragging it into the attachment area below the description. 
Then publish the release by clicking the ``Publish release`` button. 

#### Sources and Useful reading

In general GitHub documentation is very helpful for any general questions:

* [GitHub - Checking Out a Pull Request](https://help.github.com/articles/checking-out-pull-requests-locally)
* [GitHub - About protected branches](https://help.github.com/articles/about-protected-branches/)
* [GitHub - About pull request reviews](https://help.github.com/articles/about-pull-request-reviews/)
* [GitHub - Creating Releases](https://help.github.com/articles/creating-releases/)

Furthermore parts of this README have been adapted from [https://github.com/OpenJUB/contribution-guidelines/blob/master/github_usage.md](https://github.com/OpenJUB/contribution-guidelines/blob/master/github_usage.md)

<!--  LocalWords:  devel sbt
 -->
