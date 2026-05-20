import { AppError, ErrorCode } from "./errors.js";

const SUPPORTED_LOCALES = new Set(["en", "id"]);

export function validateBrandBrief(input) {
  const errors = [];

  if (!input || typeof input !== "object") {
    throw new AppError(ErrorCode.VALIDATION_ERROR, "Request body must be an object.");
  }

  if (typeof input.businessIdea !== "string" || input.businessIdea.trim().length < 20) {
    errors.push("businessIdea must be at least 20 characters.");
  }

  if (input.businessIdea && input.businessIdea.length > 1200) {
    errors.push("businessIdea must be 1200 characters or less.");
  }

  if (!SUPPORTED_LOCALES.has(input.locale)) {
    errors.push("locale must be one of: en, id.");
  }

  if (input.audience !== undefined && typeof input.audience !== "string") {
    errors.push("audience must be a string when provided.");
  }

  if (errors.length > 0) {
    throw new AppError(ErrorCode.VALIDATION_ERROR, "Invalid brand brief.", { errors });
  }

  return {
    businessIdea: input.businessIdea.trim(),
    locale: input.locale,
    audience: input.audience?.trim() || "early-stage business customers",
    riskLevel: input.riskLevel || "low"
  };
}

export function validateBrandResult(result) {
  const hasCore = result?.brandCore && typeof result.brandCore.positioning === "string";
  const hasNames = Array.isArray(result?.nameDirections) && result.nameDirections.length > 0;
  const hasScore = typeof result?.qualityScore === "number" && result.qualityScore >= 0 && result.qualityScore <= 1;

  if (!hasCore || !hasNames || !hasScore) {
    throw new AppError(ErrorCode.OUTPUT_CONTRACT_ERROR, "AI output did not match the expected contract.");
  }

  return result;
}
