import { AppError, ErrorCode } from "../lib/errors.js";

export class MockAiProvider {
  async generateBrandDirection(brief) {
    if (brief.businessIdea.includes("force-provider-error")) {
      throw new AppError(ErrorCode.AI_PROVIDER_ERROR, "AI provider failed to generate a response.");
    }

    const isIndonesian = brief.locale === "id";

    return {
      brandCore: {
        positioning: isIndonesian
          ? "Sistem brand yang jelas dari satu ide bisnis."
          : "A clear brand system from one business idea.",
        tone: isIndonesian ? ["jelas", "hangat", "percaya diri"] : ["clear", "warm", "confident"],
        customerPromise: isIndonesian
          ? "Membantu founder melihat arah brand sebelum membayar paket final."
          : "Helps founders see a brand direction before paying for the final package."
      },
      nameDirections: [
        {
          name: isIndonesian ? "Ruang Merek" : "Brand Room",
          rationale: "Simple, memorable, and tied to a structured creation space."
        },
        {
          name: isIndonesian ? "Arah Brand" : "Brand Signal",
          rationale: "Emphasizes clarity, direction, and practical launch readiness."
        }
      ],
      qualityScore: 0.91
    };
  }
}
