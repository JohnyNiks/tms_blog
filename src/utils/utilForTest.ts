type Subject = {
  students: number
  teachers: number
}

type Subjects = {
  [prop: string]: Subject
}

export const getAverageStudentsCount = (subjects: Subjects): number | null => {
  const isInvalidArgs =
    typeof subjects !== 'object' || Array.isArray(subjects) || !subjects

  if (isInvalidArgs) return null

  const subjectCount = Object.keys(subjects).length

  if (!subjectCount) return null

  let studentsCount = 0
  for (const subject in subjects) {
    studentsCount += subjects[subject].students ?? 0
  }
  return studentsCount / subjectCount
}
