#!/usr/bin/env bun

import { TODO_FILE } from "./src/config.ts";
import { readTodoFile, writeTodoFile } from "./src/fs.ts";

const args = process.argv.slice(2);
const command = args[0];

function showHelp(): void {
  console.log(`todli - CLI TODO list manager

Usage:
  todli <command> [options]

Commands:
  add <text>    Add a new TODO
  list          Show all TODOs
  help          Show this help
`);
}

async function main(): Promise<void> {
  if (!command || command === "help") {
    showHelp();
  } else if (command === "add") {
    const text = args.slice(1).join(" ");

    if (!text) {
      console.error("Error: TODO text is required");
      process.exit(1);
    }

    const content = await readTodoFile(TODO_FILE);

    const newContent = content + `- [ ] ${text}\n`;

    await writeTodoFile(TODO_FILE, newContent);

    console.log(`✓ Added: ${text}`);
  } else if (command === "list") {
    const content = await readTodoFile(TODO_FILE);

    if (!content) {
      console.log("No TODOs yet. Add one with: todli add <text>");
    } else {
      console.log(content);
    }
  } else {
    console.error(`Unknown command: ${command}`);
    process.exit(1);
  }
}

main();
