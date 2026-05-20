# AI Pipeline

This showcase uses a mock AI provider. In production, the provider adapter can call a hosted AI model while keeping the rest of the workflow stable.

## Pipeline Principles

1. Validate input before model execution.
2. Keep model prompts outside public repositories.
3. Ask for structured output.
4. Validate the returned structure.
5. Attach telemetry with redacted input.
6. Return customer-ready output or a recoverable error.

## Why Structured Output Matters

AI output should not be treated as trusted data. It should be parsed and validated before it drives UI, payments, account actions, document generation, or customer messaging.

For banking use cases, this principle is even more important:

- assistant responses must not expose private data
- recovery flows must not skip identity checks
- support summaries must be traceable to source events
- incident reports must separate fact from hypothesis

