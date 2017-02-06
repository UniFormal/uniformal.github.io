---
layout: doc
title: Contributing
---

### Contribution Guidelines for MMT

(if you're looking for the TL;DR, there is one at the bottom)

This document explains the general development model of MMT. Before contributing to MMT, you should read this document to understand what is going on.

### Introduction
#### Main Branches

There are three central branches:
* ```master```: main development line, used by developers, stable and including latest features
* ```release```: used by external users, very stable, occasionally merged into from master
* ```devel```: a branch of master that is periodically merged into master; this branch is under constant development by Florian

Every MMT archive on MathHub has two corresponding branches master and release.
For testing purposes, release branches of archives are tested against the release branch of MMT, and accordingly for master branches.

#### Feature Branches

MMT developers typically branch for individual features from ```master``` but may sometimes have to branch from devel.
Usually this involves a discussion with Florian.
In particular, inexperienced contributors and developers of cutting-edge features typically have to work with ```devel``` in order to collaborate with Florian.

MMT developers merge their features into ```devel``` or ```master``` according to their own judgment.
Usually this involves an informal discussion with core developers or a pull request.
If they merge into master, they must also merge the resulting master into ```devel```.

#### Protections and Tests

Pushes to ```release``` must pass the corresponding test(s).

Pushes to ```master``` should pass the corresponding test(s). (This 'should' will probably become a 'must' in the future.)

All three main branches are protected from force-pushes.

The sbt build file contains the following tests:
* release/build and release/test: build certain projects and certain archives that must work in releases
* master/build and master/test: build certain projects and certain archives that should work on the master branch

### Working on MMT -- working with forks and branches

Making changes in MMT is possible in two different ways, through making forks and making branches. Usually you should only contribute directly to a branch if you know what you are doing.

One way of making changes is to make a [fork of the repository](https://help.github.com/articles/about-forks/) and then create a pull request to merge the changes back into the ```master``` branch. A fork is a copy of the repository that can be used to make a changes without affecting the original code. Pull requests should only be made after the actual code compiles and should always go onto the master branch.

#### Creating a fork

To create a fork go to the repository page and hit the [Fork](https://github.com/Uniformal/MMT/fork) button. Then select the account you want to fork into. This should usually be your private account and not another organisation. Afterwards you should then be able to clone the forked repository onto your hard drive by typing:

```bash
git clone git@github.com:your-username-here/MMT.git
```

Whenever you now make changes to your local git repository and push or pull them they will now only go to and from your fork -- that means you can experiment and make breaking changes at any time without affecting the main development of MMT.

#### Syncing changes with MMT

Whenever some changes are made inside of MMT they will **not** automatically be synced to your fork. To get the latest changes you should [sync the fork](https://help.github.com/articles/syncing-a-fork). To configure this you will first have to add a

```bash
git remote add upstream https://github.com/Uniformal/MMT.git
```

To then get the changes from the so-called upstream repository (that is, the main MMT repository) and merge them into your local master branch you can then:

```bash
# Get all the latest changes
git fetch upstream

# And merge them into your local branch
# You might have to resolve merge conflicts here
git merge upstream/master
```

Finally, you want to push these changes back into your fork:
```bash
git push
```

It is also possible to directly merge changes directly from another fork -- for example the fork of a different repository. To do this you need to add a separate remote and then fetch and merge from that repository:

```bash
# add a remote to their repository
git remote add someotheruser https://github.com/some-other-user/MMT.git

# fetch and merge their changes
git fetch someotheruser
git merge someotheruser/master
```

Also note that ```master``` in the ```git merge``` command refers to the master branch of the alternate repository.

### Contributing back to MMT -- creating a pull request and updating the master branch

Once you have made your commits and have locally checked that MMT compiles properly, you are ready to contribute your changes back into the original repository. To do so, you need to create a pull request.

To avoid merge conflicts during the pull request, please first sync your fork. Then, to create a pull request, go to the page of your repository and click the "new pull request" button. All settings should already be set correctly - all you need to do is enter a title as well as a description for the pull request.

In the next step, the Travis tests will be run automatically. This may take a few minutes due to the size of the code. If the tests fail, you can see the page and check what exactly went wrong. To update your changes, simply push additional changes to your fork.

Be aware that until your pull request is merged, all changes that you push to your fork will automatically be considered part of your pull request. To avoid this, you can create separate branches and merge these into master instead. To merge a different branch than the default one, simply view the branch on the forked repository page and create a pull request from that page instead.

Once the tests have run, any core developer can merge the changes into the master branch by clicking the "Merge pull request" button.

### Updating the release branch

To mark a version of MMT as a release, we again use pull requests. This time we merge from ```master``` onto ```release```. Again go to the main repository page and select [New pull request](https://github.com/UniFormal/MMT/compare/release...master). Choose ```release``` as the base and ```master``` as the head. Now write a title as well as a description of the changes that have been made since the last merge to the ```release``` branch. Then create the pull request by clicking the "Create pull request" button.

Only repository owners and administrators can merge this pull request.
<!-- In order to ensure stability, this additionally requires a [review](https://help.github.com/articles/about-pull-request-reviews/) from a maintainer. To create a review, select the "view changes" button inside the newly created pull request. After looking at the changes made, you can create a review by clicking the "Review changes" button. You can then write a comment as well as either "approve" or "request changes" to the pull request. -->

Once <!-- someone has submitted an approving review and --> the TRAVIS tests have passed, the pull request can be merged by any core developer.

### TL;DR

#### Updating master
* [Create a fork](https://github.com/Uniformal/MMT/fork) (if you haven't already)
 * ```git clone git@github.com:your-username-here/MMT.git``` -- clone your fork
 * ```git remote add upstream https://github.com/Uniformal/MMT.git``` -- add reference to the original repo
* Sync the fork
  * ```git fetch upstream``` -- get latest changes
  * ```git merge upstream/master``` -- merge them into your current branch
* Make your local changes and ```git push``` them to your fork
* Sync your fork again to avoid merge conflicts
* Make a pull request by going to your fork and clicking "New pull request"
  * wait for the Travis Tests to pass
* Wait until a core developer merges the pull request

#### Updating release
* Make sure that the code works as intended
* Create a [new pull request](https://github.com/UniFormal/MMT/compare/release...master) from ```master``` onto ```release```
  * wait for the Travis tests to pass
* wait for a core developer <!--to make a review and --> merge the pull request

### Sources and Useful reading

In general GitHub documentation is very helpful for any general questions:

* [GitHub - About forks](https://help.github.com/articles/about-forks/)
* [GitHub - Fork a Repo](https://help.github.com/articles/fork-a-repo)
* [GitHub - Syncing a Fork](https://help.github.com/articles/syncing-a-fork)
* [GitHub - Checking Out a Pull Request](https://help.github.com/articles/checking-out-pull-requests-locally)
* [GitHub - About protected branches](https://help.github.com/articles/about-protected-branches/)
* [GitHub - About pull request reviews](https://help.github.com/articles/about-pull-request-reviews/)

Furthermore parts of this README have been adapted from [https://github.com/OpenJUB/contribution-guidelines/blob/master/github_usage.md](https://github.com/OpenJUB/contribution-guidelines/blob/master/github_usage.md)
