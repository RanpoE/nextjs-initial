import { test, expect } from '@playwright/test';

test.describe('Todo app', () => {
  test('can add, complete, and filter todos', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('Stellar Todos')).toBeVisible();
    await expect(page.getByText('2 left')).toBeVisible();

    const input = page.getByPlaceholder('Add a todo and press enter');
    await input.fill('Automate everything');
    await page.getByRole('button', { name: 'Add' }).click();

    await expect(page.getByText('Automate everything')).toBeVisible();
    await expect(page.getByText('3 left')).toBeVisible();

    const newItem = page
      .getByRole('listitem')
      .filter({ hasText: 'Automate everything' });
    await newItem.getByRole('checkbox').check();

    await page.getByRole('button', { name: 'Completed' }).click();
    await expect(page.getByRole('list')).toContainText('Automate everything');

    await page.getByRole('button', { name: 'Clear completed' }).click();
    await expect(page.getByText('Automate everything')).not.toBeVisible();
  });
});
