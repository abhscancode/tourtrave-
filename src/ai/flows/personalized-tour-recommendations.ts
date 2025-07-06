// src/ai/flows/personalized-tour-recommendations.ts
'use server';

/**
 * @fileOverview Provides personalized tour package recommendations based on user travel history and preferences.
 *
 * - personalizedTourRecommendations - A function that generates personalized tour recommendations.
 * - PersonalizedTourRecommendationsInput - The input type for the personalizedTourRecommendations function.
 * - PersonalizedTourRecommendationsOutput - The return type for the personalizedTourRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedTourRecommendationsInputSchema = z.object({
  travelHistory: z
    .string()
    .describe('A detailed history of the user\u2019s past travels, including destinations, activities, and travel styles.'),
  preferences: z
    .string()
    .describe('The user\u2019s preferences for future travels, including preferred destinations, activities, budget, and travel companions.'),
});
export type PersonalizedTourRecommendationsInput = z.infer<typeof PersonalizedTourRecommendationsInputSchema>;

const PersonalizedTourRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      tourName: z.string().describe('The name of the recommended tour package.'),
      description: z.string().describe('A brief description of the tour package.'),
      price: z.number().describe('The price of the tour package.'),
      duration: z.string().describe('The duration of the tour package.'),
      link: z.string().describe('A link to the tour package details.'),
    })
  ).describe('An array of personalized tour package recommendations.'),
});
export type PersonalizedTourRecommendationsOutput = z.infer<typeof PersonalizedTourRecommendationsOutputSchema>;

export async function personalizedTourRecommendations(input: PersonalizedTourRecommendationsInput): Promise<PersonalizedTourRecommendationsOutput> {
  return personalizedTourRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedTourRecommendationsPrompt',
  input: {schema: PersonalizedTourRecommendationsInputSchema},
  output: {schema: PersonalizedTourRecommendationsOutputSchema},
  prompt: `Based on the user's travel history and preferences, provide personalized tour package recommendations.

Travel History: {{{travelHistory}}}
Preferences: {{{preferences}}}

Provide the recommendations in a structured format, including tour name, description, price, duration and a link to the tour details.
Ensure the recommendations align with the user's interests and preferences to enhance their travel planning experience.`,
});

const personalizedTourRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedTourRecommendationsFlow',
    inputSchema: PersonalizedTourRecommendationsInputSchema,
    outputSchema: PersonalizedTourRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
