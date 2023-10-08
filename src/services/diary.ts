import diaryData from './diaries.json'
import { type DiaryEntry, type NewDiaryEntry, type NonSensitiveDiaryEntry } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}

export const findById = (id: number): NonSensitiveDiaryEntry | undefined => {
  const diary = diaries.find(d => d.id === id)
  if (diary !== undefined) {
    const { comment, ...restOfDiary } = diary
    return restOfDiary
  }
  return undefined
}

export const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility
  }))
}
