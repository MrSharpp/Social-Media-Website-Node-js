-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "intractedPosts" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT NOT NULL,
    "upvote" TEXT NOT NULL,
    "downvote" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "views" INTEGER NOT NULL,
    "created" DATETIME NOT NULL,
    CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "eventDate" DATETIME NOT NULL,
    "upvotes" INTEGER NOT NULL,
    "downvotes" INTEGER NOT NULL,
    "created" DATETIME NOT NULL,
    "views" INTEGER,
    "link" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
