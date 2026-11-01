import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';

type AuthFixtures = {
  dashboardPage: DashboardPage;
};

export const test = base.extend<AuthFixtures>({
  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.acessar();
    await loginPage.fazerLogin('standard_user', 'secret_sauce');

    const dashboardPage = new DashboardPage(page);

    await expect(dashboardPage.tituloPagina).toHaveText('Products');
    await expect(dashboardPage.listaProdutos).toBeVisible();

    await use(dashboardPage);
  },
});

export { expect };