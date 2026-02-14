import { Card } from "@/components/ui/card";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <Card className="p-10 text-center">
      <h3 className="mb-2 text-base font-medium text-neutral-900">{title}</h3>
      <p className="text-sm text-neutral-500">{description}</p>
    </Card>
  );
}
