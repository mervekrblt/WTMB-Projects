import test from "ava"
import {sum} from '../library.js'

test('sum of 1 and 2 should be 3.00', t => {
    const actualResult = sum(1,2)
    const expectedResult = 3.00
    t.is(actualResult, expectedResult)
})

test('sum of 0.3 and 0.6 should be 0.9', t => {
    const actualResult = sum(0.3,0.6)
    const expectedResult = 0.90
    t.is(actualResult, expectedResult)
})

test('sum of merve and melis should be mervemelis', t => {
    const actualResult = sum("merve","melis")
    const expectedResult = "merve melis"
    t.is(actualResult, expectedResult)
})