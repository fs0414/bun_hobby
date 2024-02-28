/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `personal_bank_accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "personal_bank_accounts_user_id_key" ON "personal_bank_accounts"("user_id");
