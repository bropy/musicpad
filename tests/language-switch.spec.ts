import { test, expect } from '@playwright/test'

test.describe('Language Switcher', () => {
  test('should change language from English to German and verify h1 tag changes', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/')

    // Wait for the page to load
    await page.waitForLoadState('networkidle')

    // Verify the initial English h1 text in hero section
    const heroHeading = page.locator('h1').first()
    await expect(heroHeading).toContainText('Want to Know Your')
    await expect(heroHeading).toContainText('Real IQ Score?')

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    // Wait for footer to be visible
    await page.waitForSelector('footer')

    // Click the language dropdown button in footer
    const languageButton = page.locator('footer button', { hasText: 'English' })
    await expect(languageButton).toBeVisible()
    await languageButton.click()

    // Wait for dropdown to appear and click Deutsch
    const deutschOption = page.locator('button', { hasText: 'Deutsch' })
    await expect(deutschOption).toBeVisible()
    await deutschOption.click()

    // Wait for navigation and page reload
    await page.waitForLoadState('networkidle')

    // Verify URL changed to German locale
    await expect(page).toHaveURL(/\/de/)

    // Scroll back to top to see hero section
    await page.evaluate(() => window.scrollTo(0, 0))

    // Verify the h1 tag now shows German text
    const germanHeroHeading = page.locator('h1').first()
    await expect(germanHeroHeading).toContainText('Möchten Sie Ihren')
    await expect(germanHeroHeading).toContainText('echten IQ-Wert wissen?')

    // Verify footer language button now shows "Deutsch"
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    const deutschButton = page.locator('footer button', { hasText: 'Deutsch' })
    await expect(deutschButton).toBeVisible()
  })

  test('should change language from German to English and verify h1 tag changes', async ({ page }) => {
    // Navigate to German version
    await page.goto('/de')

    // Wait for the page to load
    await page.waitForLoadState('networkidle')

    // Verify the initial German h1 text
    const heroHeading = page.locator('h1').first()
    await expect(heroHeading).toContainText('Möchten Sie Ihren')
    await expect(heroHeading).toContainText('echten IQ-Wert wissen?')

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    // Click the language dropdown button in footer
    const languageButton = page.locator('footer button', { hasText: 'Deutsch' })
    await expect(languageButton).toBeVisible()
    await languageButton.click()

    // Wait for dropdown and click English
    const englishOption = page.locator('button', { hasText: 'English' })
    await expect(englishOption).toBeVisible()
    await englishOption.click()

    // Wait for navigation
    await page.waitForLoadState('networkidle')

    // Verify URL changed to English locale (default, no /en prefix)
    await expect(page).not.toHaveURL(/\/de/)

    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0))

    // Verify the h1 tag now shows English text
    const englishHeroHeading = page.locator('h1').first()
    await expect(englishHeroHeading).toContainText('Want to Know Your')
    await expect(englishHeroHeading).toContainText('Real IQ Score?')

    // Verify footer button shows "English"
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    const englishButton = page.locator('footer button', { hasText: 'English' })
    await expect(englishButton).toBeVisible()
  })

  test('should verify all main sections are translated when switching language', async ({ page }) => {
    // Start on English page
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Check "Available Tests" section in English
    const testsHeadingEN = page.locator('h1', { hasText: 'Available Tests' })
    await expect(testsHeadingEN).toBeVisible()

    // Switch to German
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    const languageButton = page.locator('footer button', { hasText: 'English' })
    await languageButton.click()
    
    const deutschOption = page.locator('button', { hasText: 'Deutsch' })
    await deutschOption.click()
    
    await page.waitForLoadState('networkidle')

    // Check "Available Tests" section is now in German
    const testsHeadingDE = page.locator('h1', { hasText: 'Verfügbare Tests' })
    await expect(testsHeadingDE).toBeVisible()
  })
})

