import nordic from '../services/assistant'

export default async (ctx, next) => {
  const getWods = await nordic.getWods('2017-01-15', '2017-01-15')
  ctx.body = getWods
}
