import test from 'node:test'
import assert from 'node:assert'
import testingUtils from '../utils/for_testing.js'

test('reverse of a', () => {
  const result = testingUtils.reverse('a')

  assert.strictEqual(result, 'a')
})

test('reverse of react', () => {
  const result = testingUtils.reverse('react')

  assert.strictEqual(result, 'tcaer')
})

test('reverse of saippuakauppias', () => {
  const result = testingUtils.reverse('saippuakauppias')

  assert.strictEqual(result, 'saippuakauppias')
})