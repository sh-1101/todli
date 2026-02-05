#!/usr/bin/env bun

import { add } from "./src/commands/add.ts";
import { done } from "./src/commands/done.ts";
import { list } from "./src/commands/list.ts";
import { remove } from "./src/commands/remove.ts";

const args = process.argv.slice(2);
const command = args[0];
const commandArgs = args.slice(1);

function showHelp(): void {
  console.log(`todli - CLI TODO list manager

Usage:
  todli <command> [options]

Commands:
  add <text>    Add a new TODO
  list          Show all TODOs
  done <index>  Mark a TODO as completed
  remove <index>  Remove a TODO 
  help          Show this help
`);
}

async function main(): Promise<void> {
  if (!command || command === "help") {
    showHelp();
  } else if (command === "add") {
    const text = commandArgs.join(" ");
    await add(text);
  } else if (command === "list") {
    list();
  } else if (command === "done") {
    await done(commandArgs[0]);
  } else if (command === "remove") {
    await remove(commandArgs[0]);
  } else {
    console.error(`Unknown command: ${command}`);
    process.exit(1);
  }
}

main();
