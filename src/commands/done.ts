import { TODO_FILE } from "../config.ts";
import { readTodoFile, writeTodoFile } from "../utils/file.ts";

export async function done(indexStr: string | undefined): Promise<void> {
  // 引数チェック
  if (!indexStr) {
    console.error("Error: Index is required");
    console.error("Usage: todli done <index>");
    process.exit(1);
  }

  const index = Number.parseInt(indexStr, 10);
  if (Number.isNaN(index) || index < 1) {
    console.error("Error: Index must be a positive number");
    process.exit(1);
  }

  const content = await readTodoFile(TODO_FILE);
  if (!content) {
    console.log("No TODOs found.");
    return;
  }

  const lines = content.split("\n");

  const todoLines = lines.filter((line) => line.trim().startsWith("- ["));

  if (index > todoLines.length) {
    console.error(`Error: Index ${index} out of range (1-${todoLines.length})`);
    process.exit(1);
  }

  let todoCount = 0;
  const newLines = lines.map((line) => {
    if (line.trim().startsWith("- [")) {
      todoCount++;
      if (todoCount === index) {
        return line.replace("- [ ]", "- [x]");
      }
    }
    return line;
  });

  await writeTodoFile(TODO_FILE, newLines.join("\n"));

  console.log(`✓ Completed TODO #${index}`);
}
