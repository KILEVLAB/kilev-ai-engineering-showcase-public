# Security Notes

This showcase is intentionally sanitized.

## Excluded From This Repository

- production API keys
- database URLs
- customer records
- proprietary prompts
- payment logic
- analytics exports
- admin panels
- deployment credentials
- server IPs
- private webhook URLs

## Configuration Pattern

Production systems should load secrets only from secure runtime configuration, never from committed source files.

Recommended baseline:

- `.env` is never committed
- `.env.example` documents variable names only
- CI checks block accidental secret commits
- provider keys are scoped per environment
- logs redact user input, tokens, IDs, and financial data

## Data Handling

The sample telemetry implementation redacts long free-text input before logging. In a financial environment, the same principle should be stricter:

- redact account numbers
- redact phone and email identifiers
- avoid storing raw OTP/MFA state
- log state transitions, not secrets
- preserve only the minimum evidence needed for audit and support

