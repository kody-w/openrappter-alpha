# OpenRappter alpha ring

Alpha is an **explicit early promotion** from a vetted nightly. It never follows
a branch automatically. This repository is a maintained pointer, not a source
copy: OpenRappter code remains in [`kody-w/openrappter`](https://github.com/kody-w/openrappter).

The current [closed manifest](.ring/manifest.json) is `disabled`: the recorded
commit and GitHub archive SHA-256 are real, but no promotion receipt or
installable alpha artifact exists. `--ring alpha` must therefore fail closed.

Train: `nightly -> alpha -> canary -> beta -> stable`.

Validate with `node scripts/validate-manifest.mjs .ring/manifest.json alpha`.
