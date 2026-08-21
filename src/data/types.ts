import { LucideIcon } from "lucide-react";

export interface CalculatorInput {
  id: string;
  label: string;
  type: "number" | "text" | "select" | "date";
  placeholder?: string;
  unit?: string;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: string | number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CalculatorMeta {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  longDescription: string;
  inputs: CalculatorInput[];
  formula: string;
  formulaExplanation: string;
  howToUse: string[];
  example: {
    description: string;
    inputs: Record<string, string | number>;
    result: string;
  };
  benefits: string[];
  faqs: FAQ[];
  relatedSlugs: string[];
  icon: string;
  keywords: string[];
}

export interface CategoryMeta {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  calculators: string[];
}

export type CalculateFn = (inputs: Record<string, string | number>) => {
  label: string;
  value: string;
}[];
