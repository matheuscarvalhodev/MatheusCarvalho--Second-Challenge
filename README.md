<h1 align="center"> Terceiro Desafio: Projeto de Site de Tarefas com Login e Dashboard </h1>

<h4 align="center"> 
    :tada:  Projeto finalizado  :tada:
</h4>

Este é um projeto desenvolvido em React/Typescript, que consiste em um site de tarefas com login e dashboard. Ele utiliza a API (https://latam-challenge-2.deta.dev/api/v1/docs/#/) para criar usuários, fazer login e criar tarefas, e o Axios para se comunicar com a API. Além disso, o dashboard possui um mostrador de clima conectado com a API da OpenWeatherMap.

# 🛠️ Abrir e rodar o projeto
Para instalar o projeto, siga os seguintes passos:

Clone o repositório usando o comando git clone `https://github.com/matheuscarvalhodev/MatheusCarvalho--Second-Challenge.git`
Navegue até a pasta do projeto usando o comando cd nome-do-repositorio
Instale as dependências do projeto usando o comando `npm install`
No arquivo .env na raiz do projeto, adicione as chaves criadas na sua conta no OpenWeatherMap.
```
REACT_APP_OPEN_WEATHER_API_KEY=SUA_API_KEY
```
Execute o comando npm start para iniciar a aplicação.
Abra [http://localhost:3000](http://localhost:3000) para ver o projeto no seu browser.

## :pushpin: Funcionalidades

### :white_check_mark: Criação de Usuário :information_desk_person:
<div align="center">
<img align="center" width="600" alt="image" src="https://user-images.githubusercontent.com/50754185/226232589-22e5cc2a-a6c4-4f51-8a68-55d8c4abd92d.png">
</div>
O usuário pode se cadastrar no site, inserindo os seguintes dados: First Name, Last Name, Birth Date, City, Country, Email, Password e Confirm Password. Ao clicar em "Cadastrar", a API será chamada para criar o usuário e, em caso de sucesso, o usuário será redirecionado para a tela de login.

### :lock: Tela de Login :key:
<div align="center">
<img align="center" width="600" alt="image" src="https://user-images.githubusercontent.com/50754185/226232634-79e4b1f1-cb44-47f5-94e6-59afea41b29c.png">
<img align="center" width="600" alt="image" src="https://user-images.githubusercontent.com/50754185/226232770-fc2560f0-6750-4361-9a52-c20f5f18bd85.png">
</div>
Na tela de login, o usuário pode fazer login no site inserindo o email e senha. Caso o login seja bem-sucedido, o usuário será redirecionado para o dashboard. Caso contrário, uma mensagem de erro será exibida.

## :calendar: Dashboard :clipboard:

<div align="center">
<img align="center" width="600" alt="image" src="https://user-images.githubusercontent.com/50754185/226232848-dfe86fcf-2d31-4bf4-a0b9-a1763e6f5bf5.png">
<img align="center" width="600" alt="image" src="https://user-images.githubusercontent.com/50754185/226233207-093e569f-d311-411e-877c-346d80406fad.png">
<img align="center" width="465" alt="image" src="https://user-images.githubusercontent.com/50754185/226233252-80773830-2ecc-4f0e-9f19-1de44b8af475.png">
</div>

No dashboard, o usuário pode criar tarefas, inserindo a descrição da tarefa, o dia da semana e o horário da tarefa. As tarefas são mostradas por dia da semana e apenas quando o dia é selecionado. Há um botão para deletar todas as tarefas, e cada card de tarefa criado possui um botão para deletar apenas aquela tarefa. Quando tarefas possuem o memso horário, a linha que contem as tarefas mudam de cor, e uma linha horizontal sobre todos, mas se uma tarefa for deletada, a linha some. A tela possui modais para uma melhor comunicação visual para o usuário

<div align="center">
<img align="center" width="625" alt="image" src="https://user-images.githubusercontent.com/50754185/226233343-bae14fb6-6104-4e18-9f98-13bd7130bb43.png">
</div>

Além disso, o dashboard possui um mostrador de clima que é conectado com a API da OpenWeatherMap. Para utilizar essa funcionalidade, é necessário criar uma conta na OpenWeatherMap e obter uma chave de API.

<div align="center">
<img align="center" width="118" alt="image" src="https://user-images.githubusercontent.com/50754185/226233570-6db5a43f-567b-46b9-a258-9bc2198edb5f.png">
</div>

### :arrow_right: Login e Acesso ao Dashboard :arrow_left:
O usuário só pode acessar o dashboard se estiver logado. Caso o usuario digite diretamente na URL `/dashboard` sem ter feito login, uma tela será exibida pedindo para o usuário fazer login, junto do botão para redirecionar. Quando o usuário faz login, é redirecionado para o dashboard.
<div align="center">
<img align="center" width="737" alt="image" src="https://user-images.githubusercontent.com/50754185/226233761-a7369a04-a648-4715-9646-3922d0703804.png">
</div>
Caso o usuário digite qualquer coisa na URL, uma tela de Not Found é mostrada.
<div align="center">
<img align="center" width="707" alt="image" src="https://user-images.githubusercontent.com/50754185/226233825-53737aa4-2134-4d4e-aa3b-6d8329d73e34.png">
</div>

### :red_circle: Modais de Erro e Confirmação :white_check_mark:
O site possui modais para trazer uma melhor visualização das mensagens de erro para o usuário. Esses modais serão exibidos caso ocorra algum erro na criação de usuário, login ou na criação de tarefas. Além de modais de confirmação, para que o usuario não delete suas tarefas sem querer.

<div align="center">
<img align="center" width="571" alt="image" src="https://user-images.githubusercontent.com/50754185/226233970-6afb2209-1044-4d1c-9ff0-90d0abe30e56.png">
<img align="center" width="384" alt="image" src="https://user-images.githubusercontent.com/50754185/226233424-edb751e7-c7f0-434a-a10b-36d0a7cec961.png">
<img align="center" width="373" alt="image" src="https://user-images.githubusercontent.com/50754185/226233492-18370a07-d37d-4292-a0ee-38ca8e87ad94.png">
</div>

## ✔️ Técnicas e tecnologias utilizadas

- ``React``
- ``Typescript``
- ``Styled Componente e Pure CSS``
- ``Paradigma de orientação a objetos``
- ``API (Consumo com Axios)``
- ``Clean Code e Clean Architecture``

## :stars: Contribuindo :stars:
Este projeto foi criado como parte do terceiro desafio do estágio na empresa Compass UOL. Se você tiver alguma sugestão de melhoria ou quiser contribuir com código, mande-me mensagem no Linkedin: [Matheus Carvalho](https://www.linkedin.com/in/matheus-carvalho-dev/)

# Autor
<div align="center">
| [<img src="https://github.com/matheuscarvalhodev.png" width=115><br><sub>Matheus Carvalho</sub>](https://www.linkedin.com/in/matheus-carvalho-dev/) |
| --- |

</div>
