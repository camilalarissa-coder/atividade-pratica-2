import { test, expect } from '../fixtures/auth.fixture.js';

test('Deve exibir os produtos após o login', async ({ dashboardPage }) => {
  await expect(dashboardPage.tituloPagina).toHaveText('Products');
  await expect(dashboardPage.listaProdutos).toBeVisible();
});

test('Deve permitir sair da conta', async ({ dashboardPage, page }) => {
  await dashboardPage.logout();

  await expect(page).toHaveURL('/');
});
