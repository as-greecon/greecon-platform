import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { alarms } from "@/lib/demo-data";

export default function AlarmsPage() {
  return (
    <Card className="p-6">
      <h1 className="mb-6 text-lg font-medium">Alarms</h1>
      <div className="space-y-3">
        {alarms.map((alarm) => (
          <div key={`${alarm.asset}-${alarm.time}`} className="flex items-center justify-between rounded-xl border border-border p-4">
            <div>
              <p className="text-sm font-medium">{alarm.asset}</p>
              <p className="text-xs text-neutral-500">{alarm.time}</p>
            </div>
            <Badge>{alarm.severity}</Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}
