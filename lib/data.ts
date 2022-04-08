import fs from 'fs'
import path from 'path'

export function getData() {
  const fullPath = path.join(process.cwd(), 'data', 'data.json')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const parsed = JSON.parse(fileContents)
  return parsed
}
