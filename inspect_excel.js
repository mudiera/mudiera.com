const XLSX = require('xlsx');
const workbook = XLSX.readFile('London muslim owned buisnesses.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log('Total rows:', rows.length);
if (rows.length > 0) {
    console.log('Headers (Row 0):', rows[0]);
    console.log('Sample Row 1:', rows[1]);
    console.log('Sample Row 2:', rows[2]);
    console.log('Sample Row 3:', rows[3]);
}
