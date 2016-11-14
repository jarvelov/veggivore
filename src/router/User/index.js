import Profile from './Profile'
import Comments from './Comments'

export default {
  path: '/user/:userId',
  name: 'user',
  children: [
    Profile,
    Comments
  ]
}
