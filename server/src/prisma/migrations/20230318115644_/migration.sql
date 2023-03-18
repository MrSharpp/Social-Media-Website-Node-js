-- CreateTable
CREATE TABLE "Collections" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "columns" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Record" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "collectionsId" INTEGER NOT NULL,
    CONSTRAINT "Record_collectionsId_fkey" FOREIGN KEY ("collectionsId") REFERENCES "Collections" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
