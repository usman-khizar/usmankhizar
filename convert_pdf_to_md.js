const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');
const filePath = 'C:/Users/UsmanSeo/Downloads/shibu_messages_clickup_;document_pdf.pdf';

(async () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    const rawText = data.text;
    const normalized = rawText
      .replace(/\r\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    const outPath = path.join(process.cwd(), 'shibu_messages_clickup_document_pdf.md');
    fs.writeFileSync(outPath, normalized, 'utf8');
    console.log('Wrote markdown to', outPath);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
