export function createTelemetry({ sink = [] } = {}) {
  return {
    sink,
    record(eventName, payload = {}) {
      const event = {
        eventName,
        timestamp: new Date().toISOString(),
        payload: redact(payload)
      };
      sink.push(event);
      return event;
    }
  };
}

export function redact(value) {
  if (typeof value === "string") {
    if (value.length > 80) return `${value.slice(0, 77)}...`;
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(redact);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nested]) => {
        if (/token|secret|password|email|phone|account/i.test(key)) {
          return [key, "[REDACTED]"];
        }
        return [key, redact(nested)];
      })
    );
  }

  return value;
}
