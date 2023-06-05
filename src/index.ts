import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { GeneratePDF } from "./pdfkit/main";

interface PDFData {
  header1: JSON;
  header2: JSON;
  content: JSON;
  footer: JSON;
}

const app = express();
const port = 3000;

// Parse JSON and form data
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "5000mb",
    extended: true,
    parameterLimit: 100000000000,
  })
);
app.use(cors());

// Define the API endpoint for form submission
app.post("/submit-form", (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const content = req.body;

  console.log(content);

  console.log("-------------------");

  GeneratePDF(content);

  res.send("Form submission successful");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
