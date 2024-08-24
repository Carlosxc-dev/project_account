# Use uma imagem base oficial do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o package.json e o package-lock.json para instalar dependências
COPY package*.json ./

# Instale as dependências
RUN npm install 

# Copie o restante dos arquivos para o container
COPY . .

# Compile o código TypeScript
RUN npm run build

# Exponha a porta em que o servidor irá rodar
EXPOSE 3001

# Comando para iniciar o servidor
CMD ["node", "dist/server.js"]

