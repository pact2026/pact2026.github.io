---
title: PACT 2026 Artifact evaluation
description: Artifact evaluation instructions
id: ae
layout: page_sidebar
show_sidebar: true
---

# Artifact Submission

_This page is based on the [submission guidelines for artifact evaluation set by ML Commons](https://github.com/ctuning/artifact-evaluation/blob/master/docs/submission.md)._

_Submission site: **Coming Soon!**_

PACT 2026 will conduct artifact evaluation (AE) this year. AE has become a common practice in the systems and architecture community (OSDI, PLDI, PACT, ISCA, MICRO, MLSys, HPCA, ASPLOS). We invite the authors of accepted PACT 2026 papers to submit their artifacts for assessment under the ACM Artifact Review and Badging policy. Note that this submission is voluntary and will not influence the final decision regarding the papers.

PACT 2026's artifact evaluation process will follow the [guidelines for artifact evaluation set by ML Commons](https://github.com/ctuning/artifact-evaluation/blob/master/docs/submission.md).

**Artifact registrations are due by TBD.**  
 **Full artifact submissions are due by TBD.**

Authors are invited to formally describe all supporting material (code, data, models, workflows, results) using the [unified Artifact Appendix and the Reproducibility Checklist template](https://github.com/ctuning/artifact-evaluation/blob/master/docs/checklist.md) and submit it to the [single-blind AE process](https://github.com/ctuning/artifact-evaluation/blob/master/docs/reviewing.md). Reviewers will then collaborate with the authors to evaluate their artifacts and assign the following [ACM reproducibility badges](https://www.acm.org/publications/policies/artifact-review-and-badging-current):

![](https://www.acm.org/binaries/content/gallery/acm/publications/replication-badges/artifacts_available_dl.jpg)
![](https://www.acm.org/binaries/content/gallery/acm/publications/replication-badges/artifacts_evaluated_functional_dl.jpg)
![](https://www.acm.org/binaries/content/gallery/acm/publications/replication-badges/results_reproduced_dl.jpg)

## Preparing your Artifact Appendix and the Reproducibility Checklist

You need to prepare the [Artifact Appendix](https://github.com/ctuning/artifact-evaluation/blob/master/docs/template/ae.tex) describing all software, hardware, and data set dependencies, key results to be reproduced, and how to prepare, run, and validate experiments.

You can find the examples of Artifact Appendices in the following: **coming soon**.

## Preparing your experimental workflow

**You can skip this step if you want to share your artifacts without the validation of experimental results - in such case, your paper can still be entitled for the "artifact available" badge!**

We strongly recommend you to provide at least some automation scripts to build your workflow, all inputs to run your workflow, and some expected outputs to validate results from your paper. You can then describe the steps for evaluating your artifact in README files or [Jupyter Notebooks](https://jupyter.org/).

Feel free to reuse [portable CM scripts](https://github.com/mlcommons/ck/tree/master/cm-mlops/script) developed by MLCommons to automate common steps for preparing and running benchmarks across continuously changing software, hardware, and data.

## Making artifacts available to evaluators

Most of the time, the authors make their artifacts available to the evaluators via GitHub, GitLab, BitBucket or private repositories. It allows the authors to quickly fix encountered issues during evaluation before submitting the final version to archival repositories.

We **strongly recommend** the use of [Docker](https://www.docker.com/), [Singularity](https://docs.sylabs.io/guides/3.5/user-guide/introduction.html), or other containers or VM images whenever possible. If not possible, we encourage authors to include pre-built binaries for all their code, so that reviewers can start with little effort; together with the source and build scripts that generate those binaries to guarantee maximum transparency. Providing pre-built VMs or containers is preferable to providing scripts (e.g., Docker or Vagrant configurations) that build the VM, since this alleviates reliance on external dependencies. If you are unfamiliar with the process of preparing artifacts and artifact evaluation, [Preparing Reproducible Scientific Artifacts using Docker](https://arxiv.org/abs/2308.14122) may be a good introductory read.

Other acceptable methods include:

- Using zip or tar files with all related code and data, particularly when your artifact should be rebuilt on reviewers' machines (for example to have a non-virtualized access to a specific hardware).
- Arranging remote access to the authors' machine with the pre-installed software. _It is specially recommended that authors plan ahead if this step may be needed to fully evaluate an artifact, e.g., because of the need of specific hardware or software configurations._ You will need to privately send the private access information to the AE chairs.

Note that your artifacts will receive the ACM "artifact available" badge **only if** they have been placed on any publicly accessible archival repository. We recommend the use of [Zenodo](https://zenodo.org/), which provides a DOI specific to the artifact. Note that Github, etc. are not adequate for receiving this badge (see FAQ), and that Zenodo provides a way to make subsequent revisions of the artifact available and linked from the specific version. A DOI by a publicly accessible archival repository will be required in your final Artifact Appendix!

## Submitting artifacts

Your submission to HotCRP should consist of three pieces:

1. The _submission version_ of your accepted paper (in `*.pdf` format).
2. A Zenodo link pointing to your artifact with appropriate documentation (details below).
3. Additional information.

**Artifact evaluation will be single-anonymous**, meaning that your artifact may contain author-revealing information, if that's helpful for the evaluation process.

### Documentation

Your artifact should include a `README` in a common format such as Markdown, plain text, or PDF, which should consist of two parts:

- a **Getting Started Guide**, and
- **Step-by-Step Instructions** for how you propose to evaluate your artifact (with appropriate connections to the relevant sections of your paper);

The Getting Started Guide should contain setup instructions (including, for example, a pointer to the VM software, its version, passwords if needed, etc.) and basic testing of your artifact that you expect a reviewer to be able to complete in 30 minutes. Reviewers will follow all the steps in the guide during an initial kick-the-tires phase. The Getting Started Guide should be as simple as possible, and yet it should stress the key elements of your artifact. Anyone who has followed the Getting Started Guide should have no technical difficulties with the rest of your artifact.

The Step by Step Instructions explain how to reproduce any experiments or other activities that support the conclusions in your paper. Write this for readers who have a deep interest in your work and are studying it to improve it or compare against it. If your artifact runs for more than a few minutes, point this out and explain how to run it on smaller inputs.

Where appropriate, include descriptions of and links to files (included in the archive) that represent expected outputs (e.g., the log files expected to be generated by your tool on the given inputs); if there are warnings that are safe to be ignored, explain which ones they are.

The artifact's documentation should include the following:

- A list of claims from the paper supported by the artifact, and how/why.
- A list of claims from the paper not supported by the artifact, and how/why.

Example: Performance claims cannot be reproduced in VM, authors are not allowed to redistribute specific benchmarks, etc. Artifact reviewers can then center their reviews / evaluation around these specific claims.

#### Zenodo link

Please create a [Zenodo](https://zenodo.org) repository. If you intend to publish the artifact, which is the preferred option, you can choose `Open Access` for `License`. Please note that this would generate a Zenodo DOI that is **permanently public**.

Submit the artifact abstract and the PDF of your paper with the Artifact Appendix attached using the PACT AE HotCRP website, coming soon.

## **Asking questions**

Coming soon
