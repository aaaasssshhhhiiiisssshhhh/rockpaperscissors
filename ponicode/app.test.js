const rewire = require("rewire")
const app = rewire("../app")
const main = app.__get__("main")
const game = app.__get__("game")
// @ponicode
describe("main", () => {
    test("0", () => {
        let result = main()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("game", () => {
    test("0", () => {
        let result = game("user-name")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = game("user_name")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = game("user name")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = game("username")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = game("user123")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = game("")
        expect(result).toMatchSnapshot()
    })
})
