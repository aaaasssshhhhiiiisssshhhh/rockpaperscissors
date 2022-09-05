const rewire = require("rewire")
const index = rewire("../index")
const a = index.__get__("a")
// @ponicode
describe("a", () => {
    test("0", () => {
        let result = a()
        expect(result).toMatchSnapshot()
    })
})
