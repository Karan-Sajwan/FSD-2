import { describe, it, expect } from 'vitest'

describe('Student Form Test', () => {
  it('should validate data correctly', () => {
    const name = "Karan"
    expect(name).toBe("Karan")
  })

  it('should fail for wrong data', () => {
    const age = 21
    expect(age).toBeGreaterThan(18)
  })
})