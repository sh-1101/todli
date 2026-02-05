import { TODO_FILE } from "../config";
import { readTodoFile } from "../utils/file";

export async function list(): Promise<void> {
  const content = await readTodoFile(TODO_FILE);

  if (!content) {
    console.log("No TODOs yet. Add one with: todli add <text>");
  } else {
    console.log(content);
  }
}
