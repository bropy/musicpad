import { Brain, User, Heart, Lightbulb } from "lucide-react"

// constants
export const tests = [
    {
      key: "iq_test",
      icon: Brain,
      available: true,
      iconColor: "text-blue-600"
    },
    {
      key: "personality_test",
      icon: User,
      available: true,
      iconColor: "text-blue-500"
    },
    {
      key: "love_style_test",
      icon: Heart,
      available: true,
      iconColor: "text-blue-500"
    },
    {
      key: "career_test",
      icon: Lightbulb,
      available: false,
      iconColor: "text-blue-400"
    }
  ];