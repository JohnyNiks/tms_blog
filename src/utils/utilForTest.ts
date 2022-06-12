type Subject = {
  students: number
  teachers: number
}

type Subjects = {
  [prop: string]: Subject
}

export const getAverageStudentsCount = (subjects: Subjects): number => {
  const subjectCount = Object.keys(subjects).length
  let studentsCount = 0
  for (const subject in subjects) {
    studentsCount += subjects[subject].students
  }
  return studentsCount / subjectCount
}
