export const sites = [
  { name: "North Ridge", status: "Healthy", lastUpdate: "2 minutes ago" },
  { name: "Harbor Point", status: "Warning", lastUpdate: "9 minutes ago" },
  { name: "Metro East", status: "Healthy", lastUpdate: "18 minutes ago" },
];

export const assets = [
  { type: "Inverter", status: "Online", site: "North Ridge" },
  { type: "Compressor", status: "Maintenance", site: "Harbor Point" },
  { type: "Sensor Cluster", status: "Online", site: "Metro East" },
];

export const alarms = [
  { severity: "High", time: "10:42", asset: "Compressor A-17" },
  { severity: "Medium", time: "09:16", asset: "Inverter B-04" },
  { severity: "Low", time: "08:03", asset: "Sensor Cluster C" },
];
