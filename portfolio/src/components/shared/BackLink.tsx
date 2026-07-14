import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function BackLink({ to, children }: Readonly<BackLinkProps>) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Intercept standard left-clicks without modifier keys
    if (
      !e.defaultPrevented &&
      e.button === 0 &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.altKey &&
      !e.shiftKey
    ) {
      if (
        window.history.state &&
        typeof window.history.state.idx === "number" &&
        window.history.state.idx > 0
      ) {
        let previousPath = null;
        try {
          previousPath = sessionStorage.getItem(
            `history-path-${window.history.state.idx - 1}`
          );
        } catch (err) {
          console.warn("Failed to read from sessionStorage", err);
        }

        if (previousPath === to) {
          e.preventDefault();
          void navigate(-1);
        }
      }
    }
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className="group inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
    >
      <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
      <span>{children}</span>
    </Link>
  );
}
