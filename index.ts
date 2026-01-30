console.log("Hello, Todli!");

console.log(`process.argv: ${process.argv}`);

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
    console.log(`TODO追加: ${text}`);
  } else if (command === "list") {
    console.log("TODO一覧を表示");
  } else {
    console.error(`Unknown command: ${command}`);
    process.exit(1);
  }
}

main();
