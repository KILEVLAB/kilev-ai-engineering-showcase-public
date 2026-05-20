# Observability Pattern

Reliable products need customer-impact observability, not only server metrics.

## Event Types

This showcase records:

- `brand.workflow.started`
- `brand.workflow.completed`
- `brand.workflow.failed`

In a banking reliability audit, similar events would be mapped to:

- login started
- password reset requested
- OTP issued
- OTP verified
- device binding checked
- account lookup succeeded
- account lookup failed
- transaction confirmation issued
- notification delivered

## Error Taxonomy

Errors are classified by stable codes:

- `VALIDATION_ERROR`
- `AI_PROVIDER_ERROR`
- `OUTPUT_CONTRACT_ERROR`
- `WORKFLOW_ERROR`

For a banking app, this avoids vague states like "system error" and gives support teams a usable incident map.

## Synthetic Monitoring

Recommended external probes for a banking app:

- app launch availability
- login page availability
- password reset journey
- OTP request journey
- account list lookup
- internal transfer start
- notification email/SMS delivery latency

The goal is to detect customer-impacting failures before social media or support tickets become the primary signal.

