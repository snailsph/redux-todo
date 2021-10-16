const rewire = require("rewire")
const VisibleTodoList = rewire("./VisibleTodoList")
const getVisibleTodos = VisibleTodoList.__get__("getVisibleTodos")
const mapStateToProps = VisibleTodoList.__get__("mapStateToProps")
// @ponicode
describe("getVisibleTodos", () => {
    test("0", () => {
        let param1 = [[false, true, false], [true, true, true], [true, true, false]]
        let callFunction = () => {
            getVisibleTodos(param1, "SHOW_ALL")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[true, true, true], [true, true, false], [true, true, true]]
        let callFunction = () => {
            getVisibleTodos(param1, "SHOW_ACTIVE")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [[false, true, false], [false, true, false], [false, true, false]]
        let callFunction = () => {
            getVisibleTodos(param1, "SHOW_ALL")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [[true, true, false], [false, true, true], [false, true, true]]
        let callFunction = () => {
            getVisibleTodos(param1, "SHOW_ALL")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [[false, false, false], [true, false, false], [false, false, true]]
        let callFunction = () => {
            getVisibleTodos(param1, "SHOW_ACTIVE")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getVisibleTodos([], Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ todos: true, visibilityFilter: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ todos: true, visibilityFilter: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ todos: false, visibilityFilter: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ todos: false, visibilityFilter: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
