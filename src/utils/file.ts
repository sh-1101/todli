import { mkdir, writeFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname } from "node:path";

export async function ensureDir(filePath: string): Promise<void> {
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

export async function readTodoFile(filePath: string): Promise<string> {
  if (!existsSync(filePath)) {
    return "";
  }
  return await readFile(filePath, "utf-8");
}

export async function writeTodoFile(
  filePath: string,
  content: string,
): Promise<void> {
  await ensureDir(filePath);
  await writeFile(filePath, content, "utf-8");
}
