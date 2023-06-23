import puppeteer from "puppeteer";

interface PDFData {
  header1: JSON;
  header2: JSON;
  content: JSON;
  footer: JSON;
  styles?: JSON;
}

export function GeneratePDF(data: PDFData, filename: string) {
  const header1: JSON = data.header1;
  const header2: JSON = data.header2;
  const content: JSON = data.content;
  const footer: JSON = data.footer;
  const styles: JSON = data.styles;

  createPdf(header1, header2, footer, content, styles)
    .then((pdfBuffer) => {
      // Save the PDF to a file or perform further processing
      // For example, save the PDF to a file named "output.pdf"
      require("fs").writeFileSync(
        `src/puppeteer/out/${filename}.pdf`,
        pdfBuffer
      );
      console.log("PDF generation complete.");
    })
    .catch((error) => {
      console.error("PDF generation error:", error);
    });
}

async function createPdf(header1, header2, footer, content, styles = {}) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  const headerTemplate = `
  <style>
  .header {
    padding: 20px; 
    width: 100%; 
    font-size: 12px; 
    display: flex; 
    justify-content: space-between;
  }
  </style>
  <div class="header">
    <div class="header1">${header1}</div>
    <div class="header2">${header2}</div>
  </div>`;

  const footerTemplate = `<style>
  .footer {
    padding: 20px; width: 100%; font-size: 12px; text-align: center;
  }
  </style><div class="footer">${footer}</div>`;

  const options: any = {
    format: "A4",
    displayHeaderFooter: true,
    headerTemplate,
    footerTemplate,
    margin: {
      top: "6cm",
      bottom: "2cm",
    },
  };

  const htmlTemplate = `
  <style>
    /* Content styles */
    body {
      padding: 0 2rem;
    }
    ${styles}
  </style>
  <body>
    <div class="content">${content}</div>
  </body>
  `;

  await page.setContent(htmlTemplate);
  const pdfBuffer = await page.pdf(options);

  await browser.close();

  return pdfBuffer;
}
