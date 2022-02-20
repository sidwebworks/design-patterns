import { writeFileSync } from "fs";
import path from "path";

class Journal {
  entries: Map<string | number, string>;
  count: number;

  constructor() {
    this.entries = new Map();
    this.count = 0;
  }

  addEntry(content: string) {
    const c = ++this.count;
    const entry = `${c}: ${content}`;
    this.entries.set(c, entry);
    return c;
  }

  getEntry(key: number) {
    return this.entries.get(key);
  }

  removeEntry(key: number) {
    this.entries.delete(key);
    this.count = this.count - 1;
  }

  toString() {
    return [...this.entries.values()].join("\n");
  }
}

class PersistanceManager {
  saveToFile(journal: Journal, filename: string) {
    const target = path.join(process.cwd(), filename);
    writeFileSync(target, journal.toString());
    return target;
  }
}

export { PersistanceManager, Journal };
