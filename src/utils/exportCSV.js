
export function exportToCSV(data){
const headers = Object.keys(data[0]);
const rows = data.map(r=>headers.map(h=>r[h]).join(","));
const csv=[headers.join(","),...rows].join("\n");
const blob=new Blob([csv]);
const url=URL.createObjectURL(blob);
const a=document.createElement("a");
a.href=url;
a.download="transactions.csv";
a.click();
}
