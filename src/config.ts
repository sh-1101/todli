import { join } from "node:path";
import { homedir } from "node:os";
import packageJson from "../package.json";

export const VERSION = packageJson.version;

// ~/.todli/ ディレクトリ
export const BASE_DIR = join(homedir(), ".todli");

// ~/.todli/todo.md
export const TODO_FILE = join(BASE_DIR, "todo.md");
