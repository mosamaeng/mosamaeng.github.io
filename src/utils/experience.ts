/**
 * Dynamic helper to calculate total years of professional experience.
 * Career started in early 2018.
 * Example for 2026: 2026 - 2018 + 1 = 9 years.
 */
export const getYearsOfExperience = (): number => {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear + 1;
};
