import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly campoUsuario: Locator;
  readonly campoSenha: Locator;
  readonly botaoLogin: Locator;
  readonly mensagemErro: Locator;

  constructor(page: Page) {
    this.page = page;
    this.campoUsuario = page.locator('#user-name');
    this.campoSenha = page.locator('#password');
    this.botaoLogin = page.locator('#login-button');
    this.mensagemErro = page.locator('[data-test="error"]');
  }

  async acessar(): Promise<void> {
    await this.page.goto('/');
  }

  async preencherUsuario(usuario: string): Promise<void> {
    await this.campoUsuario.fill(usuario);
  }

  async preencherSenha(senha: string): Promise<void> {
    await this.campoSenha.fill(senha);
  }

  async clicarLogin(): Promise<void> {
    await this.botaoLogin.click();
  }

  async fazerLogin(usuario: string, senha: string): Promise<void> {
    await this.preencherUsuario(usuario);
    await this.preencherSenha(senha);
    await this.clicarLogin();
  }
}