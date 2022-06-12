import { getAverageStudentsCount } from './utilForTest'

export const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
}

describe('util getAverageStudentsCount', () => {
  it('should return value 120 as average students count', () => {
    expect(getAverageStudentsCount(subjects)).toBe(120)
  })

  it('should return value 0 as average students count for empty object of subjects', () => {
    expect(getAverageStudentsCount({})).toBe(0)
  })
})
