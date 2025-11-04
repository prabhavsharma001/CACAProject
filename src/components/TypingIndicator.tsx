import { Bot } from "lucide-react";

const TypingIndicator = () => {
  return (
    <div className="flex gap-3 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-glow/10 border border-primary/20 animate-slide-up">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <Bot className="w-5 h-5" />
      </div>
      <div className="flex items-center gap-1 pt-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
      </div>
    </div>
  );
};

export default TypingIndicator;
