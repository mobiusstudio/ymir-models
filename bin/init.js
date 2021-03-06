import log4js from 'log4js'
import options from '../test/config/config.json'
import { configure } from '../dist/models'

const log = log4js.getLogger()

async function init() {
  const dbManager = await configure(options)
  await dbManager.rebuild()
  log.info(`Current db version: ${dbManager.version}`)
}

init().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err.stack)
})
