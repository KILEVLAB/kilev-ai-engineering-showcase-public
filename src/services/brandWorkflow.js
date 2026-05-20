import { toPublicError } from "../lib/errors.js";
import { validateBrandBrief, validateBrandResult } from "../lib/validation.js";

export async function runBrandWorkflow(input, { aiProvider, telemetry }) {
  try {
    const brief = validateBrandBrief(input);

    telemetry.record("brand.workflow.started", {
      locale: brief.locale,
      audience: brief.audience,
      businessIdea: brief.businessIdea
    });

    const rawResult = await aiProvider.generateBrandDirection(brief);
    const result = validateBrandResult(rawResult);

    telemetry.record("brand.workflow.completed", {
      locale: brief.locale,
      qualityScore: result.qualityScore,
      nameCount: result.nameDirections.length
    });

    return {
      ok: true,
      result
    };
  } catch (error) {
    telemetry.record("brand.workflow.failed", {
      error: toPublicError(error)
    });

    return {
      ok: false,
      error: toPublicError(error)
    };
  }
}
