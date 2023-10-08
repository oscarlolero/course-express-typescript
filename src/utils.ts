// MEJOR USAR LIBRERIAS COMO EXPRESS VALIDATOR PARA VALIDAR LOS DATOS DE ENTRADA
import { type NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

const isString = (text: any): boolean => {
  return typeof text === 'string' || text instanceof String
}

const parseComment = (commentFromRequest: any): string => {
  if (typeof commentFromRequest !== 'string') {
    throw new Error('Incorrect or missing comment: ' + commentFromRequest)
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date: ' + dateFromRequest)
  }
  return dateFromRequest
}
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather)
}

const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility)
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather: ' + weatherFromRequest)
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility: ' + visibilityFromRequest)
  }
  return visibilityFromRequest
}

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  return {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
}
