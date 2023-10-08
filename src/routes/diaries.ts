import express from 'express'
import { findById, getNonSensitiveEntries } from '../services/diary'
import { toNewDiaryEntry } from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(getNonSensitiveEntries())
})

router.get('/:id', (req, res) => {
  const getId = +req.params.id
  const diary = findById(getId)
  res.send(diary)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    res.send(newDiaryEntry)
  } catch (e) {
    res.status(400).send(e)
  }
})

export default router
