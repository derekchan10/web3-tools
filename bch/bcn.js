let mint_btn = $('#app > div > div:nth-child(2) > form > div.van-cell-group.van-cell-group--inset > div:nth-child(5) > button');
let confirm_btn = $('body > div.van-popup.van-popup--center.van-dialog > div.van-hairline--top.van-dialog__footer > button.van-button.van-button--default.van-button--large.van-dialog__confirm.van-hairline--left');


setInterval(() => {
    console.log("点击mint按钮")
    mint_btn.click();

    setTimeout(function() {
        console.log("点击确认按钮");
        confirm_btn.click()
    }, 500);

}, 500);