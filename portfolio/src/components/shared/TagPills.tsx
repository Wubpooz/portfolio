import { Badge } from "@/components/ui/badge";

interface TagPillsProps {
  tags: string[];
}

export default function TagPills({ tags }: Readonly<TagPillsProps>) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {tags.map((tag) => (
        <Badge key={tag} variant="outline" className="font-mono text-xs">
          {tag}
        </Badge>
      ))}
    </div>
  );
}
