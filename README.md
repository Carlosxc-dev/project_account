[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[EXPRESS__BADGE]: https://img.shields.io/badge/express-005CFE?style=for-the-badge&logo=express

<h1 align="center" style="font-weight: bold;">Project Account 💻</h1>

![express][EXPRESS__BADGE]
![typescript][TYPESCRIPT__BADGE]
![javascript][JAVASCRIPT__BADGE]
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

<p align="center">
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a> •
 <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
  <b>Simple description of what your project do or how to use it.</b>
</p>

<h2 id="started">🚀 Getting started</h2>

How to run my project locally

<h3>Prerequisites</h3>

list all prerequisites necessary for running my project:

- [NodeJS](https://github.com/)
- [Git](https://github.com)
- [postgres](https://www.postgresql.org/)
- [vscode](https://code.visualstudio.com/)

<h3>Cloning</h3>

How to clone my project

```bash
git clone https://github.com/Carlosxc-dev/project_account.git
```

<h3> Environment Variables</h2>

Use the `process.env.SERVER_PORT` as reference to create your configuration file `.env` with your environment variables

```yaml
DATABASE_URL="{bancoDados}://{user}:{password}@localhost:{port}/{nameDatabase}?schema=public"
SERVER_PORT = {port}
```

<h3>Starting</h3>

How to start your project

```bash
cd project_account
npm run dev
```

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route | description  
|----------------------|-----------------------------------------------------
| <kbd>GET /authenticate</kbd> | retrieves user info see [response details](#get-auth-detail)
| <kbd>POST /authenticate</kbd> | authenticate user into the api see [request details](#post-auth-detail)

<h3 id="get-auth-detail">GET /authenticate</h3>

**RESPONSE**

```json
{
  "name": "Fernanda Kipper",
  "age": 20,
  "email": "her-email@gmail.com"
}
```

<h3 id="post-auth-detail">POST /authenticate</h3>

**REQUEST**

```json
{
  "username": "fernandakipper",
  "password": "4444444"
}
```

**RESPONSE**

```json
{
  "token": "OwoMRHsaQwyAgVoc3OXmL1JhMVUYXGGBbCTK0GBgiYitwQwjf0gVoBmkbuyy0pSi"
}
```

<h2 id="colab">🤝 Collaborators</h2>

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/61745249?s=400&u=743a07edff42551fed704856e78c3a9e3f556580&v=4" width="100px;" alt="Carlos Profile Picture"/><br>
        <sub>
          <b>Carlos Henrique</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h3>Documentations that might help</h3>

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
