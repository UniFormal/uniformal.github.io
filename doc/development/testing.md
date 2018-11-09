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

Several large MMT Integration tests exist. 
When run, these:

- setup a new MMT environment from scratch (i.e. creating a new configuration file, installing `MMT/urtheories` etc)
- install additional archives required for testing (and use the devel version if needed)
- make sure that content within an archive builds and typechecks properly

Integration tests are implemented as a subclass of the `MMTIntegrationTest` class. 
At the time of writing, the following Integration Tests exist:

- `info.kwarc.mmt.api.test.APITest`
- `info.kwarc.mmt.lf.LFTest`
- `info.kwarc.mmt.odk.ODKTest`
- `info.kwarc.mmt.odk.MitMTest`

To run an integration test, simply run the appropriate class. 
From command line this can be done with e.g.:

```
java -cp deploy/mmt.jar info.kwarc.mmt.api.test.APITest
```

The tests will exit with a return code of `0` iff they are successfull and no errors occur. 

Furthermore the tests will try to automatically determine if they are being run from the `devel` or `master` branch. 
If this is not possible (for example when just running from a downloaded jar), then this can be specified manually:

```bash
# use the devel version of archives
TEST_USE_DEVEL=1 java -cp deploy/mmt.jar info.kwarc.mmt.api.test.APITest

# use the default (master) version of archives
TEST_USE_DEVEL=0 java -cp deploy/mmt.jar info.kwarc.mmt.api.test.APITest
```

#### Travis

Travis CI automatically runs both unit and integration tests after every commit. 