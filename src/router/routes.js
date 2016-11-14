import {UserProfile, UserComments} from '../components/User'

export default {
  path: '/user/:userId',
  name: 'user',
  children: [{
    path: 'profile',
    component: UserProfile
  }, {
    path: 'comments',
    component: UserComments
  }]
}
