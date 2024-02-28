/*
  Warnings:

  - You are about to drop the `bank_accounts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bank_accounts" DROP CONSTRAINT "bank_accounts_user_id_fkey";

-- DropTable
DROP TABLE "bank_accounts";

-- CreateTable
CREATE TABLE "personal_bank_accounts" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "account_number" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL,

    CONSTRAINT "personal_bank_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "salary_reports" (
    "id" SERIAL NOT NULL,
    "admin_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "salary" INTEGER NOT NULL,

    CONSTRAINT "salary_reports_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "personal_bank_accounts" ADD CONSTRAINT "personal_bank_accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary_reports" ADD CONSTRAINT "salary_reports_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary_reports" ADD CONSTRAINT "salary_reports_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
