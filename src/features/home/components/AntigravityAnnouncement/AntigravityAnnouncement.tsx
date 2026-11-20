import { readFile } from "node:fs/promises";
import path from "node:path";
import "./announcement.css";

export async function AntigravityAnnouncement() {
  const templatePath = path.join(
    process.cwd(),
    "src/features/home/components/AntigravityAnnouncement/template.html",
  );
  const html = await readFile(templatePath, "utf8");

  return (
    <>
      <div
        style={{ display: "contents" }}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <script src="/antigravedad/announcement.js" async />
    </>
  );
}
