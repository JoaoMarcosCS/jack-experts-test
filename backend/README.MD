[NODEJS_BADGE]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[EXPRESS__BADGE]: https://img.shields.io/badge/express-005CFE?style=for-the-badge&logo=express
[JSONWEBTOKEN_BADGE]:https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[ZOD_BADGE]:https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white

<h1 align="center" style="font-weight: bold;">Backend</h1>

<div style="display: flex; justify-content:center; gap:10px;">

![NODEJS_BADGE]

![EXPRESS__BADGE]

![ZOD_BADGE]

![JSONWEBTOKEN_BADGE]

</div>

<h2>📑 Documentação dos endpoints</h2>
Utilizei o Swagger para fazer a documentação dos endpoints, e pode ser vista na rota localhost:3001/api-doc. Nesta documentação também é possível disparar request para os endpoints. 
<h2>📁Estrtura do projeto</h2>

 Eu optei por usar o padrão <strong>package by feature</strong> pois é mais escável e organizado, separando cada arquivo pela funcionalidade a que pertence, e não pela sua camada(controller, service). Entretanto, o padrão <strong> package by label</strong>, é indicado para projetos menores, e já utilizei em um projeto pessoal que pode ser visto acessando https://github.com/JoaoMarcosCS/JardimSaudeAPI.

</br>
</br>


<code>collection-integretion-testes.json</code>: arquivo que contém a coleção de testes de integração. Necessário ter a extensão ThunderClient no Visual Studio Code, para poder fazer a importação da coleção e ver os testes.

<code>db.sqlite</code>: banco de dados local.

<code>.env</code>: variáveis de ambiente. Configure seguindo o arquivo .env.exemple.

<code>test/</code>: contém os teste unitário do service de cada entidade. Eu escolhi escrever os testes unitário para os serviços pois são neles em que as regras de negócios estão presentes. Os testes de integração foram feitos usando ThunderClient, e podem ser vistos importando o arquivo <code>collection-integretion-testes.json</code> no ThunderClient.

<code>src/auth</code>: contém o módulo de atenticação da aplicação, incluido as rotas, serviços, interfaces e etc.

<code>src/config</code>: contém apenas a configuração do cors.

<code>/src/database</code>: contém a configuração do datasource do typeorm e o arquivo de seed.

<code>src/entities</code>: contém as entidades do sistema, recomendada para o typeorm mapear de maineira mais fácil as entidades.

<code>src/environment</code>: contém um objeto com as variáveis de ambiente. Uma forma melhor de mapear as variáveis de ambiente do sistemas, sem que ocorra erro de sintaxe.

<code>src/task</code>: contém o módulo das tasks, incuindo service, controller, repository e etc para realização e validação das operações de CRUD sobre as tasks.

<code>src/user</code>: contém o módulo do usuário para operações de CRUD requiridas.

<code>src/utils</code>: contém as funções utilitárias que não pertencem a uma entidade especifica.



<h2>▶️ Como excutar</h2>

1) **Clone o repositório:**
   ```bash
   git clone https://github.com/JoaoMarcosCS/jack-experts-test.git

2) **Entre no diretório do backend:**
    ```bash
    cd backend

3) **Baixe as dependências:**
    ```bash
    npm i

4) **Configure as variáveis de ambiente no .env:**
    ```bash
    TOKEN_SECRET="odkodkedekd"
    TOKEN_EXPIRATION="1h"
    APP_PORT="3001"

5) **Após baixar as dependências e configurar as variáveis de ambiens, execute o projeto:**
    ```bash
    npm run dev


