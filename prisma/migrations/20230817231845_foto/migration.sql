/*
  Warnings:

  - Added the required column `foto` to the `Candidato` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `candidato` ADD COLUMN `foto` VARCHAR(191) NOT NULL;
