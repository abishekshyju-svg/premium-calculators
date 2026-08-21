import { CalculatorMeta } from "../types";
import { financeCalculators } from "./finance";
import { healthCalculators } from "./health";
import { educationCalculators } from "./education";
import { mathCalculators } from "./math";
import { unitConversionCalculators } from "./unit-conversion";
import { businessCalculators } from "./business";
import { realEstateCalculators } from "./real-estate";
import { lifestyleCalculators } from "./lifestyle";
import { techCalculators } from "./tech";
import { constructionCalculators } from "./construction";

export const allCalculators: CalculatorMeta[] = [
  ...financeCalculators,
  ...healthCalculators,
  ...educationCalculators,
  ...mathCalculators,
  ...unitConversionCalculators,
  ...businessCalculators,
  ...realEstateCalculators,
  ...lifestyleCalculators,
  ...techCalculators,
  ...constructionCalculators,
];

export const getCalculatorBySlug = (slug: string): CalculatorMeta | undefined =>
  allCalculators.find((c) => c.slug === slug);

export const getCalculatorsByCategory = (categorySlug: string): CalculatorMeta[] =>
  allCalculators.filter((c) => c.categorySlug === categorySlug);
