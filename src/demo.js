import input from "../examples/sample-input.json" with { type: "json" };
import { createTelemetry } from "./lib/observability.js";
import { MockAiProvider } from "./services/aiProvider.js";
import { runBrandWorkflow } from "./services/brandWorkflow.js";

const telemetry = createTelemetry();
const aiProvider = new MockAiProvider();

const response = await runBrandWorkflow(input, { aiProvider, telemetry });

console.log(JSON.stringify({ response, telemetry: telemetry.sink }, null, 2));
