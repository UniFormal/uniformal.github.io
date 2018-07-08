---
layout: doc
title: The Local MathHub Tool (LMH)
---

The Local MathHub (lmh) functionality in MMT provides local commands to install libraries
and archives
from and publish content to [MathHub.info](https://mathhub.info), a versioned hosting system and user
portal for OMDoc/MMT content. The
[MathHub Wiki](https://github.com/MathHubInfo/Documentation/wiki) gives details about the
system. 

### Configuring local folders
Before using any lmh functionality, a local folder needs to be configured to store archives in.

This is configured in the [mmtrc](/doc/setup/running) file automatically during setup,
however it can also be done manually on the MMT shell by typing `lmh root <path>`.

Furthermore, MMT archives can be cloned using ssh or https.
The difference is only relevant if you want to publish archives, or want to access non-public repositories.
The default method is https. To enable ssh, type `lmh root <path> ssh` on the shell.


### Installing, Updating & Managing Archives
Each archive may contain dependencies to other archives, therefore MMT provides the `lmh install` [shell command](/doc/applications/shell.html) to allow the user to install one or multiple archives.

For example, `lmh install MMT/urtheories MMT/examples` install the archives
`MMT/urtheories` and `MMT/examples` along with their dependencies. 
It is also possible to install all archives within one library, e.g. `lmh install MMT` will install all archives within the `MMT` group.
Once an archive is installed, it can be updated using `lmh pull`, which has the same
syntax as `lmh install`. `lmh pull` without an argument pulls all installed libraries and archives

To see which archives are installed locally, use the `lmh ls` command.
It optionally takes the name of an archive or library, and will restrict output to the matching archives.
It also shows the version numbers of locally installed archives.

To see which archives are available, use the `lmh search` command.
It functions exactly like the `lmh ls`, however it searches remotely instead of locally.

<!--
### Archive versions
The MMT System may depend on a specific version of some of the archives and vice-versa.
Therefore, the MMT system stores versions of selected archives which are used by default.
For example, running `lmh install MMT/examples`, will install the version of `MMT/examples` that is stored in [archive_versions.txt](https://github.com/UniFormal/MMT/blob/devel/src/mmt-api/resources/archives/archive_versions.txt).
This ensures that older versions of MMT still work properly, even if the archives have since been changed in a backwards-incompatible fashion.   
-->
<!--
The archive versions stored in MMT are usually only updated once with every release.
To see the versions currently stored in MMT, use the `show lmh` command.
The versions are respected by `lmh install` only, not by `lmh update`. Furthermore they are disabled for tests running on the `devel` branch of MMT.
Versioning can also be turned off manually by typing `lmh versioning disable` on the shell.
-->
