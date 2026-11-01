# Atividade Prática 2: Arquitetura E2E — POM, Fixture de Sessão e Data-Driven

Projeto desenvolvido para praticar automação de testes com Playwright e TypeScript.

### Testes realizados
- Login com usuário válido.
- Login com usuário bloqueado.
- Login com senha incorreta.
- Acesso à página de produtos.
- Logout.

### Organização das pastas
- data: dados dos usuários.
- fixtures: configuração do login.
- pages: páginas do sistema.
- tests: testes automatizados.

### Como executar
npm install

npx playwright install chromium

npx playwright test

### Resultado
Todos os 5 testes foram executados com sucesso.