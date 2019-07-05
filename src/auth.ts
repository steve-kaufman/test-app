import Express from 'express'
import bcrypt from 'bcrypt'
import User from './User'

const saltRounds = 10

export async function signIn (
  req: Express.Request,
  res: Express.Response
): Promise<void> {
  let { email, password } = req.body
  let user = await User.findOne({ where: { email } })
  if (!user) {
    res.json({ success: false })
    return
  }
  let success = await bcrypt.compare(password, user.password)
  res.json({ success })
}

export async function signUp (
  req: Express.Request,
  res: Express.Response
): Promise<void> {
  let { username, email, password } = req.body
  if (await User.findOne({ where: { email } })) {
    res.json({ success: false })
    return
  }
  let hash = await bcrypt.hash(password, saltRounds)
  User.create({ username, email, password: hash })
  res.json({ success: true })
}
