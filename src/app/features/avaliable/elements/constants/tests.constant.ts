import { Brain, Briefcase, Heart, User } from "lucide-react";

export const testsConstants = [
    {
        icon: Brain,
        iconColor: 'text-blue-500',
        title: 'IQ / Intelligence Test',
        duration: '15 minutes',
        questions: '25 questions',
        buttonText: 'Start IQ Test Now',
        available: true
    },
    {
        icon: User,
        iconColor: 'text-blue-500',
        title: 'Personality Type',
        duration: '20 minutes',
        questions: '90 questions',
        buttonText: 'Start Personality Test',
        available: true
    },
    {
        icon: Heart,
        iconColor: 'text-blue-500',
        title: 'Love Style',
        duration: '30 minutes',
        questions: '120 questions',
        buttonText: 'Start Love Style Test',
        available: true
    },
    {
        icon: Briefcase,
        iconColor: 'text-blue-500',
        title: 'Career',
        duration: '25 minutes',
        questions: '35 questions',
        buttonText: 'Coming Soon',
        available: false
    }
]