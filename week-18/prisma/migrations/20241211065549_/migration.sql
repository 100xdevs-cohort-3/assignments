-- Initial schema for the travel assignment.
-- The starter migration assumed tables from an unrelated todo exercise.
CREATE TABLE "User" (
  "id" SERIAL NOT NULL,
  "username" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE TABLE "TravelPlan" (
  "id" SERIAL NOT NULL,
  "userId" INTEGER NOT NULL,
  "title" TEXT NOT NULL,
  "destinationCity" TEXT NOT NULL,
  "destinationCountry" TEXT NOT NULL,
  "startDate" TIMESTAMP(3) NOT NULL,
  "endDate" TIMESTAMP(3) NOT NULL,
  "budget" DOUBLE PRECISION,
  CONSTRAINT "TravelPlan_pkey" PRIMARY KEY ("id")
);
ALTER TABLE "TravelPlan" ADD CONSTRAINT "TravelPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
