import { type Page, type Locator } from '@playwright/test';

export class DashboardPage {
  readonly tituloPagina: Locator;
  readonly listaProdutos: Locator;
  readonly menuLateral: Locator;
  readonly botaoMenu: Locator;
  readonly linkLogout: Locator;

  constructor(private page: Page) {
    this.tituloPagina = page.locator('.title');
    this.listaProdutos = page.locator('.inventory_list');
    this.menuLateral = page.locator('.bm-menu');
    this.botaoMenu = page.locator('#react-burger-menu-btn');
    this.linkLogout = page.locator('#logout_sidebar_link');
  }

  async abrirMenu(): Promise<void> {
    await this.botaoMenu.click();
  }

  async logout(): Promise<void> {
    await this.abrirMenu();
    await this.linkLogout.click();
  }
}