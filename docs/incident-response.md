# Incident Response Template

## Incident Summary

- Date:
- Channel:
- Affected journey:
- Customer-visible symptom:
- First detected by:
- Current status:

## Timeline

| Time | Event | Evidence | Owner |
| --- | --- | --- | --- |
| 00:00 | Incident suspected | Synthetic probe or customer report | Support |
| 00:05 | Failure classified | Error code / logs | Engineering |
| 00:15 | Customer messaging prepared | Status text | Product |

## Customer Impact

- affected segment
- affected feature
- failed state
- recovery path
- support instruction

## Technical Hypotheses

- identity/session state mismatch
- stale profile or account cache
- provider timeout
- OTP/MFA state inconsistency
- notification delivery failure

## Resolution Criteria

- synthetic probes pass
- support has recovery instruction
- customer-facing status is updated
- logs confirm successful recovery path
- post-incident report is written

