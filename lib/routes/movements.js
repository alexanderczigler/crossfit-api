import rethink from '../services/rethink'

export default async (ctx, next) => {
  const movements = await rethink.getMovements()
  ctx.body = movements
}
