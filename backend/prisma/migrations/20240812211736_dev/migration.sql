-- CreateTable
CREATE TABLE "account" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moneylender" (
    "id" SERIAL NOT NULL,
    "id_account" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "option" BOOLEAN NOT NULL,
    "pago" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "moneylender_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_email_key" ON "account"("email");

-- CreateIndex
CREATE INDEX "moneylender_id_account_idx" ON "moneylender"("id_account");

-- AddForeignKey
ALTER TABLE "moneylender" ADD CONSTRAINT "moneylender_id_account_fkey" FOREIGN KEY ("id_account") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
