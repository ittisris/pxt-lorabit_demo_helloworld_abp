loraBit.whenReceived(function () {
    if (loraBit.nacknowledged()) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
        if (loraBit.getReceivedPort() > 0) {
            basic.showString(loraBit.getReceivedPayload())
        }
    }
})
loraBit.reset()
loraBit.param_ABP(
"260418F5",
"8587FCF5898C6AAD62884C2310E022BC",
"0562BD0A64B6E035A8EAA8A4401B2237"
)
loraBit.param_Config(
2,
5,
loraBit_ADR.On
)
loraBit.join(loraBit_freq_Plan.AS923)
basic.forever(function () {
    if (loraBit.available()) {
        loraBit.sendPacket(loraBit_Confirmed.Uncomfirmed, 1, loraBit.packHexString("Hello, World!"))
        images.createImage(`
            . . . . #
            . . . . #
            . . . # #
            . . # # #
            # # # # #
            `).scrollImage(1, 50)
        basic.clearScreen()
        basic.pause(10000)
    } else {
        basic.pause(1000)
    }
})
