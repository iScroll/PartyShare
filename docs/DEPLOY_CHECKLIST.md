# TEST Deployment Checklist

Use this checklist before every TEST deployment.

## Pre-deploy

- [ ] `yarn install --frozen-lockfile` completes successfully.
- [ ] Required TEST environment variables are configured (names only, no secret values in logs).
- [ ] `yarn healthcheck` passes.
- [ ] `yarn build` passes.
- [ ] CI workflows are green for the target commit.

## GitHub Actions safety

- [ ] Workflow permissions follow least privilege.
- [ ] No workflow step interpolates issue/PR content directly into shell commands.
- [ ] Third-party actions are pinned to immutable references where feasible.

## Dependency hygiene

- [ ] Dependabot configuration is enabled for weekly npm/github-actions updates.
- [ ] No unintended major dependency changes are included.

## Rollback readiness

- [ ] Previous known-good commit SHA is recorded.
- [ ] Rollback procedure is confirmed (redeploy prior commit + restore prior env config if needed).
