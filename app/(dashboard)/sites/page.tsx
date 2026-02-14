import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TD, TH, Table } from "@/components/ui/table";
import { sites } from "@/lib/demo-data";

export default function SitesPage() {
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-border px-6 py-5">
        <h1 className="text-lg font-medium">Sites</h1>
      </div>
      <Table>
        <thead>
          <tr>
            <TH>Name</TH>
            <TH>Status</TH>
            <TH>Last update</TH>
          </tr>
        </thead>
        <tbody>
          {sites.map((site) => (
            <tr key={site.name}>
              <TD>{site.name}</TD>
              <TD><Badge>{site.status}</Badge></TD>
              <TD>{site.lastUpdate}</TD>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
