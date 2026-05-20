# Kilev AI Engineering Showcase

This repository is a sanitized technical showcase based on the engineering patterns used in Kilev AI / Telec.ai.

It is not the full product source code. It intentionally excludes proprietary prompts, customer data, funnel logic, production infrastructure, analytics configuration, payment logic, API keys, and deployment credentials.

Product reference:

- Indonesian product page: https://kilev.ai/id/

## What This Demonstrates

This sample shows how we structure production-oriented AI product logic:

- validated customer input
- predictable AI orchestration
- structured output contracts
- redacted observability events
- recoverable error taxonomy
- testable business workflow

The same engineering principles apply to high-impact digital banking flows: login, password recovery, device binding, account lookup, notification reliability, and incident diagnostics.

## Repository Map

```text
docs/
  architecture.md
  security.md
  observability.md
  ai-pipeline.md
  incident-response.md
examples/
  sample-input.json
  sample-output.json
src/
  demo.js
  lib/
    errors.js
    observability.js
    validation.js
  services/
    aiProvider.js
    brandWorkflow.js
tests/
  brandWorkflow.test.js
```

## Run Locally

```bash
npm test
npm run demo
```

No external API key is required. The showcase uses a mock AI provider so reviewers can inspect the workflow without exposing production prompts or model configuration.

## Review Notes

This repository is designed for technical due diligence. It focuses on code quality, architecture, operational thinking, and reliability patterns rather than visual UI or commercial funnel behavior.

