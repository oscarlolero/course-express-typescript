import diaryData from './diaries.json'
import { type DiaryEntry } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const addEntry = (): void => {}
