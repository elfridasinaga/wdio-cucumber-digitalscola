const { $ } = require('@wdio/globals')

class DashboardPage{

    get addToCartButton() {
        return $('//*[@id="add-to-cart-sauce-labs-backpack"]')
    }

    get cartButton() {
        return $('//*[@id="shopping_cart_container"]/a')
    }

    async validateOnPage() {
        await expect(this.addToCartButton).toBeDisplayed()
    }

    async clickAddCartButton() {
        await this.addToCartButton.click()
        await browser.pause(2000)
    }

    async clickCartButton(){
        await this.cartButton.click()
        await browser.pause(3000)
    }
}

module.exports = new DashboardPage();