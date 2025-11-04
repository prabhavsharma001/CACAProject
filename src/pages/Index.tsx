import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import TypingIndicator from "@/components/TypingIndicator";
import Hero from "@/components/Hero";

interface Message {
  id: string;
  text: string;
  isAi: boolean;
  timestamp: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI Career and Course Advisor. I'm here to help you discover the perfect career path and recommend courses that align with your goals and interests.\n\nWhat would you like to know about? I can help with:\n• Career exploration and planning\n• Course recommendations\n• Skills development guidance\n• Industry insights and trends",
      isAi: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isAi: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateMockResponse(text),
        isAi: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const generateMockResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase();
    
    if (lowerText.includes("career") || lowerText.includes("job")) {
      return "Based on current industry trends and your interests, I'd recommend exploring these career paths:\n\n1. **Data Science & AI** - High demand, competitive salaries, and diverse applications\n2. **UX/UI Design** - Creative field with growing opportunities\n3. **Software Development** - Versatile career with multiple specializations\n\nWould you like me to provide more details about any of these paths, including required skills and recommended courses?";
    }
    
    if (lowerText.includes("course") || lowerText.includes("learn")) {
      return "I can recommend several excellent courses based on your goals:\n\n📚 **For Beginners:**\n• Introduction to Python Programming\n• Fundamentals of Data Science\n• Web Development Bootcamp\n\n🚀 **For Intermediate:**\n• Machine Learning Specialization\n• Advanced React Development\n• Cloud Computing Certification\n\nWhat's your current skill level and area of interest? I can provide more tailored recommendations.";
    }
    
    return "That's an interesting question! I'm here to help you with career planning and course recommendations. Could you tell me more about:\n\n• Your current background and experience\n• Your career goals and interests\n• What skills you'd like to develop\n\nThis will help me provide more personalized advice for your journey.";
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Hero />
      
      <div className="flex-1 container max-w-5xl mx-auto px-4 py-8">
        <Card className="h-[calc(100vh-400px)] flex flex-col shadow-lg border-2">
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isAi={message.isAi}
                  timestamp={message.timestamp}
                />
              ))}
              {isLoading && <TypingIndicator />}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>
          
          <div className="p-6 border-t bg-muted/30">
            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
