import { TODO_FILE } from "../config.ts";
import { readTodoFile, writeTodoFile } from "../utils/file.ts";

export async function clear(): Promise<void> {
  const content = await readTodoFile(TODO_FILE);
  if (!content) {
    console.log("No TODOs found.");
    return;
  }

  const lines = content.split("\n");

  const completedCount = lines.filter((line) =>
    line.trim().startsWith("- [x]"),
  ).length;

  if (completedCount === 0) {
    console.log("No completed TODOs to clear.");
    return;
  }

  const newLines = lines.filter((line) => {
    if (line.trim().startsWith("- [x]")) {
      return false;
    }
    return true;
  });

  await writeTodoFile(TODO_FILE, newLines.join("\n"));

  console.log(`✓ Cleared ${completedCount} completed TODO(s)`);
}
