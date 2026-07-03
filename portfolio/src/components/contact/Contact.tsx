import { ArrowUpRight, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const contacts = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mathieu-w-a9ba36211",
    href: "https://www.linkedin.com/in/mathieu-w-a9ba36211/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/Wubpooz",
    href: "https://github.com/Wubpooz",
    icon: "github",
  },
  {
    label: "Email",
    value: "mathieu.waharte@gmail.com",
    href: "mailto:mathieu.waharte@gmail.com",
    icon: "mail",
  },
]

function ContactIcon({
  label,
  icon,
}: {
  label: string
  icon: string
}) {
  if (icon === "mail") {
    return <Mail className="size-5 text-muted-foreground" aria-hidden="true" />
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${icon}`}
      alt={label}
      width={20}
      height={20}
      loading="lazy"
      className="size-5 object-contain"
      aria-hidden="true"
    />
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-28">
      <Card className="overflow-hidden rounded-none border-border bg-card shadow-none">
        <CardHeader className="border-b border-border px-5 py-5 md:px-6">
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Contact
          </p>
          <CardTitle className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Let’s connect
          </CardTitle>
          <p className="mt-2 text-base text-muted-foreground">
            LinkedIn, GitHub, or email.
          </p>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {contacts.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className={[
                  "group flex items-center justify-between gap-4 border-border px-5 py-5 transition-colors hover:bg-muted/30 md:px-6",
                  "border-b",
                  index % 2 === 0 ? "md:border-r" : "",
                  index === contacts.length - 1 && contacts.length % 2 !== 0
                    ? "md:col-span-2"
                    : "",
                ].join(" ")}
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                    <ContactIcon label={item.label} icon={item.icon} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-base font-medium text-foreground">
                      {item.label}
                    </p>
                    <p className="truncate text-sm text-muted-foreground md:text-base">
                      {item.value}
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 border-t border-border px-5 py-5 md:flex-row md:px-6">
            <Button asChild className="rounded-md">
              <a href="mailto:mathieu.waharte@gmail.com">
                <Mail className="size-4" />
                Email me
              </a>
            </Button>

            <Button asChild variant="outline" className="rounded-md">
              <a href="/resume-fr.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="size-4" />
                Download resume
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}