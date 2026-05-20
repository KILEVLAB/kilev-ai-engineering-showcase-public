export class AppError extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.details = details;
  }
}

export const ErrorCode = Object.freeze({
  VALIDATION_ERROR: "VALIDATION_ERROR",
  AI_PROVIDER_ERROR: "AI_PROVIDER_ERROR",
  OUTPUT_CONTRACT_ERROR: "OUTPUT_CONTRACT_ERROR",
  WORKFLOW_ERROR: "WORKFLOW_ERROR"
});

export function toPublicError(error) {
  if (error instanceof AppError) {
    return {
      code: error.code,
      message: error.message
    };
  }

  return {
    code: ErrorCode.WORKFLOW_ERROR,
    message: "The workflow could not be completed."
  };
}
