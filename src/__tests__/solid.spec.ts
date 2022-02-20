import { existsSync, rmSync } from "fs";
import { describe, expect, it } from "vitest";
import { Journal, PersistanceManager } from "../solid/single-responsibility";

describe("Single Responsibility Principle", () => {
  const journal = new Journal();

  it("should add a new entries", () => {
    journal.addEntry("This is the first entry");
    journal.addEntry("This is the second entry");
    journal.addEntry("This is the third entry");
    journal.addEntry("This is the forth entry");

    expect(journal.count).toBe(4);
  });

  it("should get an single entry", () => {
    const entry = journal.getEntry(1);
    expect(journal.entries.get(1)).toMatch(entry);
  });

  it("should remove an entry", () => {
    journal.removeEntry(1);
    expect(journal.count).toBe(3);
  });

  it("should stringify all entries", () => {
    const case_1 = journal.toString();
    const case_2 = [...journal.entries.values()].join("\n");
    expect(case_1).toMatch(case_2);
  });

  it("should save all entries to a file", () => {
    const persister = new PersistanceManager();

    const target = persister.saveToFile(journal, "sample_test.txt");

    expect(existsSync(target)).toBe(true);

    rmSync(target);
  });
});
