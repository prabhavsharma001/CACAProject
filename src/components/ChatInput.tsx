import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about careers, courses, or career advice..."
        className="min-h-[80px] pr-14 resize-none rounded-2xl border-2 focus-visible:ring-primary"
        disabled={isLoading}
      />
      <Button
        type="submit"
        size="icon"
        disabled={!message.trim() || isLoading}
        className="absolute bottom-3 right-3 rounded-xl bg-gradient-to-br from-primary to-primary-glow hover:shadow-lg transition-all"
      >
        {isLoading ? (
          <Sparkles className="w-5 h-5 animate-pulse" />
        ) : (
          <Send className="w-5 h-5" />
        )}
      </Button>
    </form>
  );
};

export default ChatInput;
