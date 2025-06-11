# 🧪 Projeto de Automação com Cypress - SauceDemo

Este projeto realiza testes automatizados usando Cypress na aplicação de demonstração "https://www.saucedemo.com", simulando a jornada completa de um usuário em um e-commerce.

---

## 🚀 Funcionalidades Testadas

São executados os seguintes cenários:

### ✅ Cenários Automatizados

1. **Login com usuário inválido**  
   Verifica se o sistema exibe mensagem de erro ao tentar logar com credenciais incorretas.

2. **Login com usuário válido**  
   Confirma se o login é bem-sucedido com credenciais válidas.

3. **Visualizar detalhes de um produto**  
   Valida o acesso à página de detalhes de um produto (ex: Sauce Labs Backpack).

4. **Adicionar produto ao carrinho**  
   Garante que o item seja adicionado ao carrinho corretamente.

5. **Remover produto do carrinho**  
   Verifica se o item pode ser removido do carrinho com sucesso.

6. **Fazer checkout**  
   Simula um processo completo de compra, incluindo preenchimento de dados e finalização.

7. **Logout**  
   Verifica se o usuário consegue sair da aplicação após estar logado.

---

## 🔧 Tecnologias Utilizadas

- Cypress
- GitHub Actions
- Node.js + npm

---

## 🛠️ Como executar localmente

1. Clone o repositório:

"git clone https://github.com/Alves-Andre/AutomationTest.git"  
"cd AutomationTest"

2. Instale as dependências:

"npm install"

3. Execute os testes:

"npx cypress open"   (modo interativo)  
"npx cypress run"    (modo headless)

---

## 🔄 Pipeline Automatizada (GitHub Actions)

A pipeline está configurada para executar automaticamente todos os testes Cypress usando o navegador Chrome sempre que houver um "push" na branch "main".

### 📄 Arquivo de workflow: ".github/workflows/main.yml"

## 📂 Estrutura do Projeto

AutomationTest/  
├── cypress/  
│   ├── e2e/  
│   │   └── spec.cy.js          (Testes automatizados)  
│   └── support/  
│       └── commands.js              (Comandos customizados)  
├── .github/  
│   └── workflows/  
│       └── main.yml      (Pipeline automatizada)  
├── package.json  
└── README.md

---

## 👤 Autor

**André Alves**  
QA | Automação de Testes com Cypress  
GitHub: https://github.com/Alves-Andre

---

## 📄 Licença

Este projeto é apenas para fins educacionais e de demonstração.
