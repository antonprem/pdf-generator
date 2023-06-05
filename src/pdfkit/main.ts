import PDFDocument from "pdfkit";

interface PDFData {
  header1: JSON;
  header2: JSON;
  content: JSON;
  footer: JSON;
}

export function GeneratePDF(data: PDFData) {
  const doc = new PDFDocument({ compress: false });

  const fs = require("fs");

  const header1 = data.header1;
  const header2 = data.header2;
  const content = data.content;
  const footer: JSON = data.footer;

  doc.pipe(fs.createWriteStream("src/pdfkit/out/output.pdf"));

  RepeatingFooters(doc, footer);

  // Finalize PDF file
  doc.end();
}

function RepeatingFooters(doc, data: JSON) {
  let pageNumber = 1;

  const json = JSON.stringify(data);
  const footerStrings: string[] = json.replace(/\"/g, "").split(/\r?\\n/);

  footerStrings.reverse();

  SetFooter(doc, pageNumber++, footerStrings);

  doc.on("pageAdded", () => {
    SetFooter(doc, pageNumber++, footerStrings);
  });
}

function SetFooter(doc, pageNumber: number, data: string[]) {
  let bottom = doc.page.margins.bottom;
  doc.page.margins.bottom = 0;

  const lineHeight = 13;

  doc.fontSize(10);
  data.forEach((row, i) => {
    doc.text(
      row,
      0.5 * (doc.page.width - 500),
      doc.page.height - 60 - lineHeight * i,
      {
        width: 500,
        align: "center",
        lineBreak: false,
      }
    );
  });

  doc.text(
    "Page " + pageNumber,
    0.5 * (doc.page.width - 100),
    doc.page.height - 40,
    {
      width: 100,
      align: "center",
      lineBreak: false,
    }
  );

  // Reset text writer position
  doc.text("", 50, 50);
  doc.page.margins.bottom = bottom;
}
