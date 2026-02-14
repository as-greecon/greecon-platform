import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { alarms, assets, sites } from "@/lib/demo-data";

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <p className="text-sm text-neutral-500">Active Sites</p>
          <p className="mt-3 text-3xl font-semibold">{sites.length}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-neutral-500">Connected Assets</p>
          <p className="mt-3 text-3xl font-semibold">{assets.length}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-neutral-500">Open Alarms</p>
          <p className="mt-3 text-3xl font-semibold">{alarms.length}</p>
        </Card>
      </section>
      <Card className="p-6">
        <h2 className="mb-6 text-lg font-medium">Latest Activity</h2>
        <div className="space-y-4">
          {alarms.map((alarm) => (
            <div key={`${alarm.asset}-${alarm.time}`} className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
              <div>
                <p className="text-sm font-medium">{alarm.asset}</p>
                <p className="text-xs text-neutral-500">{alarm.time}</p>
              </div>
              <Badge>{alarm.severity}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
