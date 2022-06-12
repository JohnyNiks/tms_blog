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

it('average students count should be 120', () => {
  expect(getAverageStudentsCount(subjects)).toBe(120)
})
