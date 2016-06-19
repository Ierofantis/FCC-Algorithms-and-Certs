function convertHTML(str) {
 

return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/''/g, "marks&;").replace(/'/g, "&apos;");
}


convertHTML("Dolce & Gabbana");