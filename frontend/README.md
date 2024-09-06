[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[JSONWEBTOKEN_BADGE]:https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[ZOD_BADGE]:https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white
[REACT_HOOK_FORM_BADGE]:https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white
[REACT_QUERY_BADGE]:https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white
[TAILWIND_BADGE]:https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[STYLED_COMPONENTS]:https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[ZUSTAND]:https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[REACT_ROUTER]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white 


<h1 align="center" style="font-weight: bold;">Frontend</h1>

<div style="display: flex; justify-content:center; gap:10px;">

![TYPESCRIPT__BADGE]

![REACT_ROUTER]

![REACT_HOOK_FORM_BADGE]

![ZOD_BADGE]

![REACT_QUERY_BADGE]

![TAILWIND_BADGE]

![STYLED_COMPONENTS]

![ZUSTAND]

![JSONWEBTOKEN_BADGE]

</div>

<h2>📁Estrtura do projeto</h2>

</br>
</br>

 Eu optei por usar o padrão <strong>package by feature</strong> pois é mais escável e organizado, separando cada arquivo pela funcionalidade a que pertence, e não pela sua camada(controller, service). Entretanto, o padrão <strong> package by label</strong>, é indicado para projetos menores, e já utilizei em um projeto pessoal que pode ser visto acessando https://github.com/JoaoMarcosCS/JardimSaudeAPI.

 
</br>
</br>

<code>components.json</code>: arquivo de configuração do shadcn.

<code>src</code>: pasta que contém toda aplicação.

<code>src/auth</code>: módulo de autenticação, incluindo os hooks e serviços para autenticar o usuário e proteger as páginas.

<code>src/components</code>: pasta onde contém os componentes do shadcn, componentes do layout e componentes reutilizaveis como <code>Title</code> e <code>SecondaryText</code>

<code>src/createTask</code>: pasta que contém a página de criar tarefa. Os hooks, services, interfaces e schemas não estão nessa pasta pois estão no módulo de tasks, onde estão todas as funcionalidades relacionadas à entidade Task.


<code>src/favorites</code>: contém a página de visualização das tarefas favoritadas.

<code>src/home</code>: contém a página home da aplicação.

<code>src/interfaces</code>: pasta genérica que contém as interfaces usadas em mais de um lugar da aplicação, como a <code>error-reponse.interface.ts</code>

<code>src/lib</code>: contém o arquivo utilitário do shadcn.

<code>src/notFound</code>: contém a página de not found.

<code>src/profile</code>: contém, além da página de visualização do perfil, contém o módulo do usuário, com os hooks, services, schemas e interfaces para executar o CRUD do usuário.

<code>src/search</code>: contém a página de procura de tasks e seu service e hook.

<code>src/services</code>: pasta genérica que contém a configuração do axios para requisições

<code>src/signIn</code>: contém a página de signIn e o hook para o formulário da página. O service para a rota /signIn da api está no módulo <code>src/auth</code>, junto com outros services e hooks pertencentes a funcionalidade de autenticação da aplicação.

<code>src/signUp</code>: contém a página de signUp, os hooks e services para o CREATE do usuário.

<code>src/store</code>: contém a configuração do estado do usuário.

<code>src/tasks</code>: módulo para fazer as operações de CRUD da entidade Task.

<code>src/utils</code>: contém as funções utilitárias que não pertencem a uma entidade especifica.

<h2>▶️ Como excutar</h2>

**Antes de executar o frontend, é necessário que o backend já esteja em execução**

1) **Clone o repositório:**
   ```bash
   git clone https://github.com/JoaoMarcosCS/jack-experts-test.git

2) **Entre no diretório do frontend:**
    ```bash
    cd frontend

3) **Baixe as dependências:**
    ```bash
    npm i

4) **Após baixar as dependências, execute o projeto:**
    ```bash
    npm run start

 

