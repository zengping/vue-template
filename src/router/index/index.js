import Hello from '@/components/Hello'

export default {
  router: [
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '',
      redirect: '/hello'
    }
  ]
}
