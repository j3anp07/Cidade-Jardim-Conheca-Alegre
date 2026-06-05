## [Cidade Jardim: Conheça Alegre]

## 📝 Descrição do Projeto
Este projeto consiste em uma aplicação web funcional de um formulário de contato integrado a um fluxo de automação local utilizando o **n8n** rodando via **Docker**. 
Conheça a cidade mais bonita do Sul do Espirito Santo (Conhecida pela natureza, edifícios históricos e o famoso festival de música.)

Nesse projeto, vamos apresentar a cidade de Alegre. Localizada no sul do Espírito Santo, é carinhosamente conhecida como "Cidade Jardim". O título se deve à grande quantidade de praças bem cuidadas, ruas arborizadas e floridas que encantam os visitantes na região do Caparaó. 

O objetivo principal é capturar as informações preenchidas pelo usuário (Nome, E-mail e Mensagem), tratá-las no frontend por meio de validações em JavaScript e enviá-las de forma assíncrona para um Webhook ativo. 
---

## 📸 Demonstração da Aplicação
Aqui está o registro visual do formulário web coletando e disparando os dados com sucesso para a nossa automação:

![Demonstração do site funcionando](./img/Captura%20de%20tela%202026-06-05%20093024.png)
---

## 🛠️ Tecnologias Utilizadas
A arquitetura do projeto foi construída utilizando as seguintes tecnologias e ferramentas:

* **HTML5 & CSS3:** Estruturação e estilização visual da interface do formulário de contato.
* **JavaScript (ES6+):** Lógica de manipulação do DOM, validação de campos obrigatórios e gerenciamento de requisições assíncronas utilizando a Fetch API.
* **n8n:** Plataforma de automação de fluxos (*Workflow Automation*) configurada com nós de gatilho e resposta de Webhook.
* **Docker Desktop:** Tecnologia de conteinerização utilizada para rodar a instância do n8n localmente de forma isolada, persistente e sem conflitos de portas de rede.

---

## 🚀 Como Rodar o Projeto Localmente

Siga o passo a passo abaixo para clonar, configurar e executar todo o ecossistema na sua máquina:

### 1. Pré-requisitos
* Ter o [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e ativo.
* Ter um editor de código (como o VS Code) com a extensão **Live Server** instalada.

### 2. Inicializando o Servidor n8n (via Docker)
Para criar e manter o contêiner ativo em segundo plano e configurado com as permissões de CORS necessárias para os testes locais, abra o terminal do seu computador e execute o seguinte comando:

```bash
docker run -d --restart unless-stopped --name n8n_exercicio -p 5679:5678 -e N8N_CORS_ALLOWED_ORIGINS=* -v n8n_data_exercicio:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

Nota de Configuração: O contêiner foi mapeado estrategicamente para a porta 5679 do seu computador host para evitar quaisquer conflitos com outras instâncias ativas do n8n.

### 3. Configuração do Fluxo (Workflow) no n8n
1. Acesse o painel do n8n no seu navegador através do endereço: `http://localhost:5679`
2. Crie um novo fluxo de trabalho adicionando e interligando os seguintes nós:
   * **Webhook (Gatilho):** Configurado com o método `POST` e o parâmetro *Respond* definido para `Using 'Respond to Webhook' Node`.
   * **Respond to Webhook (Resposta):** Configurado com o tipo de resposta definido para `JSON`, contendo a estrutura de sucesso:
       ```json
       {
         "status": "ok"
       }
       ```
3. Salve o fluxo e clique no botão **Publish** (Publicar) no canto superior direito para deixá-lo ativo.

### 4. Executando o Frontend
1. Abra a pasta do seu projeto no VS Code.
2. Certifique-se de que a variável `webhookUrl` dentro do seu arquivo `script.js` esteja apontando para o endereço correto gerado pelo seu n8n (usando a porta `5679`).
3. Clique com o botão direito no arquivo `index.html` e selecione **Open with Live Server**.
4. Preencha o formulário e realize o envio de teste. Você poderá acompanhar o histórico de dados recebidos acessando a aba **Executions (Execuções)** no painel do seu n8n.

---

## 🔗 Link do Site Publicado (GitHub Pages)
A interface do usuário e o frontend deste projeto foram publicados e podem ser acessados publicamente através do link abaixo:

👉 **[Acesse o site publicado no GitHub Pages](https://j3anp07.github.io/Cidade-Jardim-Conheca-Alegre/)**
