import { Type } from '@sinclair/typebox'
import { ok, fail } from './validate'

describe("Literal", () => {
  it('Number',  () => {
    const T = Type.Literal(42)
    ok(T, 42)
    
    fail(T, {})
    fail(T, [])
    fail(T, 43)
    fail(T, 'world')
    fail(T, null)
  })
  it('Boolean',  () => {
    const T = Type.Literal(true)
    ok(T, true)
    
    fail(T, false)
    fail(T, {})
    fail(T, [])
    fail(T, 43)
    fail(T, 'world')
    fail(T, null)
  })
  it('String',  () => {
    const T = Type.Literal('hello')
    ok(T, 'hello')

    fail(T, {})
    fail(T, [])
    fail(T, 42)
    fail(T, 'world')
    fail(T, null)
  })
})
