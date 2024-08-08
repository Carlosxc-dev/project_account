-- CreateTable
CREATE TABLE "account" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moneylender" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "valor" TEXT NOT NULL,
    "option" TEXT NOT NULL,
    "pago" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "moneylender_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_userName_key" ON "account"("userName");

-- CreateIndex
CREATE INDEX "moneylender_userId_idx" ON "moneylender"("userId");

-- AddForeignKey
ALTER TABLE "moneylender" ADD CONSTRAINT "moneylender_userId_fkey" FOREIGN KEY ("userId") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
