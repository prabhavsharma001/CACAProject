import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isAi: boolean;
  timestamp: string;
}

const ChatMessage = ({ message, isAi, timestamp }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex gap-3 p-4 rounded-2xl animate-slide-up",
        isAi
          ? "bg-gradient-to-br from-primary/10 to-primary-glow/10 border border-primary/20"
          : "bg-gradient-to-br from-muted to-muted/50 border border-border"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
          isAi
            ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground"
            : "bg-muted-foreground/10 text-muted-foreground"
        )}
      >
        {isAi ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">
            {isAi ? "AI Advisor" : "You"}
          </span>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
