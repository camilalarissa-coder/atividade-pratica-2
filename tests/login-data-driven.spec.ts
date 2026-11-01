import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { listaUsuarios } from '../data/usuarios.data.js';

for (const cenario of listaUsuarios) {
  test(`Login: ${cenario.descricao}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.acessar();
    await loginPage.fazerLogin(cenario.usuario, cenario.senha);

    if (cenario.sucesso) {
      await expect(dashboardPage.tituloPagina).toHaveText(
        cenario.mensagemEsperada
      );
    } else {
      await expect(loginPage.mensagemErro).toContainText(
        cenario.mensagemEsperada
      );
    }
  });
}