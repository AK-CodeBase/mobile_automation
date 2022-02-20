describe('Android test trail', () => {
    it('Step 1 find element of that app by accessibility Id', async () => {
 
        //defining the elements
        const animationElement = await $('~App');

        //click on the same
        await animationElement.click();

        //assertion
        const action = await $('~Action Bar');
        await expect(await action.isDisplayed()).toBe(true,"Expect NFC tab to be displayed in the application");

    });

    it('Writing locators using uiautomator elements', async () => {
        
    });
});