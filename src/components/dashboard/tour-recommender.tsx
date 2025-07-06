"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { personalizedTourRecommendations, PersonalizedTourRecommendationsOutput } from '@/ai/flows/personalized-tour-recommendations';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Wand2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  travelHistory: z.string().min(20, 'Please describe your travel history in at least 20 characters.'),
  preferences: z.string().min(20, 'Please describe your preferences in at least 20 characters.'),
});

export function TourRecommender() {
  const [recommendations, setRecommendations] = useState<PersonalizedTourRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      travelHistory: "",
      preferences: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendations(null);
    try {
      const result = await personalizedTourRecommendations(values);
      setRecommendations(result);
    } catch (error) {
      console.error("Error getting recommendations:", error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "We couldn't generate recommendations at this time. Please try again later.",
      })
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="bg-secondary">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="text-primary" />
          Personalized Tour Recommendations
        </CardTitle>
        <CardDescription>
          Let our AI find the perfect trip for you. Tell us about your past travels and what you're looking for next.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="travelHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Travel History</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Visited Italy for its historical sites, enjoyed a beach vacation in Thailand, went hiking in the Swiss Alps..."
                        className="min-h-[120px] bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Preferences</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Looking for a relaxing beach holiday, interested in cultural experiences, budget around $2000, traveling with a partner..."
                        className="min-h-[120px] bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Generate Recommendations
            </Button>
          </form>
        </Form>

        {isLoading && (
          <div className="mt-8 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">Finding your next adventure...</p>
          </div>
        )}

        {recommendations && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Here are your personalized recommendations:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.recommendations.map((tour) => (
                <Card key={tour.tourName} className="flex flex-col bg-card">
                  <CardHeader>
                     <Image
                      src="https://placehold.co/600x400.png"
                      alt={tour.tourName}
                      width={600}
                      height={400}
                      className="w-full h-40 object-cover rounded-t-lg"
                      data-ai-hint="travel destination"
                    />
                    <CardTitle>{tour.tourName}</CardTitle>
                    <CardDescription>{tour.duration}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{tour.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <p className="text-lg font-bold text-primary">${tour.price}</p>
                    <Link href={tour.link} passHref>
                      <Button variant="outline">View Details</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

      </CardContent>
    </Card>
  );
}
