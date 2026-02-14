import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TD, TH, Table } from "@/components/ui/table";
import { assets } from "@/lib/demo-data";

export default function AssetsPage() {
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-border px-6 py-5">
        <h1 className="text-lg font-medium">Assets</h1>
      </div>
      <Table>
        <thead>
          <tr>
            <TH>Type</TH>
            <TH>Status</TH>
            <TH>Site</TH>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={`${asset.type}-${asset.site}`}>
              <TD>{asset.type}</TD>
              <TD><Badge>{asset.status}</Badge></TD>
              <TD>{asset.site}</TD>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
