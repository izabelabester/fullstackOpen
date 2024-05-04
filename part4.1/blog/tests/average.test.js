import { test, describe } from 'node:test'
import assert from 'node:assert'
import testingUtils from '../utils/for_testing.js'

describe('average', () => {
  test('of one value is the value itself', () => {
    assert.strictEqual(testingUtils.average([1]), 1)
  })

  test('of many is calculated right', () => {
    assert.strictEqual(testingUtils.average([1, 2, 3, 4, 5, 6]), 3.5)
  })

  test('of empty array is zero', () => {
    assert.strictEqual(testingUtils.average([]), 0)
  })
})