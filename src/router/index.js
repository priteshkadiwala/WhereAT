import home from '../components/home.vue';
import accinfo from '../components/accountinfo.vue';
import create from '../components/create.vue';
import donate from '../components/donate.vue';
import invite from '../components/invite.vue';
import myats from '../components/myats.vue';
import signin from '../components/signin.vue';
import signup from '../components/signup.vue';
import report from '../components/report.vue';

export default [
  {path: '/', component: home},
  {path: '/acc', component: accinfo},
  {path: '/create', component: create},
  {path: '/donate', component: donate},
  {path: '/invite', component: invite},
  {path: '/myats', component: myats},
  {path: '/signin', component: signin},
  {path: '/signup', component: signup},
  {path: '/report', component: report}
]