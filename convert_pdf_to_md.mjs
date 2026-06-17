import fs from 'fs';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname.replace(/^\//, ''));
const pdfjsLib = await import('./node_modules/pdfjs-dist/build/pdf.mjs');
const filePath = 'C:/Users/UsmanSeo/Downloads/shibu_messages_clickup_;document_pdf.pdf';

async function extractText(filePath) {
  const data = new Uint8Array(fs.readFileSync(filePath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdfDocument = await loadingTask.promise;
  const pageCount = pdfDocument.numPages;
  let text = '';

  for (let pageNum = 1; pageNum <= pageCount; pageNum++) {
    const page = await pdfDocument.getPage(pageNum);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str);
    text += strings.join(' ') + '\n\n';
  }

  return text;
}

try {
  const rawText = await extractText(filePath);
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
