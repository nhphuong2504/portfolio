import ReactMarkdown from "react-markdown";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  return (
    <article
      className={`prose prose-lg prose-neutral max-w-[65ch] ${className}`}
    >
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <h2 className="mt-10 mb-4 text-xl font-semibold tracking-tight text-editorial-foreground">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 mb-3 text-lg font-semibold text-editorial-foreground">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-5 leading-[1.7] text-editorial-muted">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mb-5 ml-6 list-disc space-y-2 text-editorial-muted">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-5 ml-6 list-decimal space-y-2 text-editorial-muted">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="leading-[1.7]">{children}</li>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline decoration-accent/30 transition duration-ui hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-editorial"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
