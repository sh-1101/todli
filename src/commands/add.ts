import { TODO_FILE } from "../config";
import { readTodoFile, writeTodoFile } from "../utils/file";

export async function add(text: string): Promise<void> {
  if (text === "") {
    console.error("Error: TODO text is required");
    process.exit(1);
  }

  const content = await readTodoFile(TODO_FILE);

  const newContent = content + `- [ ] ${text}\n`;

  await writeTodoFile(TODO_FILE, newContent);

  console.log(`✓ Added: ${text}`);
}
