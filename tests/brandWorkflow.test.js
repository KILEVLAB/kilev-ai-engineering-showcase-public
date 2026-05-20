import test from "node:test";
import assert from "node:assert/strict";
import { createTelemetry } from "../src/lib/observability.js";
import { MockAiProvider } from "../src/services/aiProvider.js";
import { runBrandWorkflow } from "../src/services/brandWorkflow.js";

test("runs the brand workflow and returns structured output", async () => {
  const telemetry = createTelemetry();
  const response = await runBrandWorkflow(
    {
      businessIdea: "A neighborhood coffee brand in Canggu for young founders and remote teams.",
      locale: "id",
      audience: "young founders"
    },
    { aiProvider: new MockAiProvider(), telemetry }
  );

  assert.equal(response.ok, true);
  assert.equal(response.result.qualityScore, 0.91);
  assert.equal(telemetry.sink.length, 2);
  assert.equal(telemetry.sink[0].eventName, "brand.workflow.started");
  assert.equal(telemetry.sink[1].eventName, "brand.workflow.completed");
});

test("returns a recoverable validation error", async () => {
  const telemetry = createTelemetry();
  const response = await runBrandWorkflow(
    {
      businessIdea: "Too short",
      locale: "id"
    },
    { aiProvider: new MockAiProvider(), telemetry }
  );

  assert.equal(response.ok, false);
  assert.equal(response.error.code, "VALIDATION_ERROR");
  assert.equal(telemetry.sink.at(-1).eventName, "brand.workflow.failed");
});

test("redacts sensitive payload fields in telemetry", async () => {
  const telemetry = createTelemetry();
  const event = telemetry.record("security.test", {
    email: "customer@example.com",
    accountNumber: "09814340853",
    note: "safe"
  });

  assert.equal(event.payload.email, "[REDACTED]");
  assert.equal(event.payload.accountNumber, "[REDACTED]");
  assert.equal(event.payload.note, "safe");
});
