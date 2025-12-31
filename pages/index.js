import { getCookie } from 'cookies-next'
import { verifica } from '../services/user'

// Components
import Card from '../src/components/card/card'
import Header from '../src/components/header/header'

export default function Home() {
  return (
    <div>
      Página segura - Prefil do usuário
      <Header />
      <Card title="Minha Sala"></Card>
    </div>
  )
}

export const getServerSideProps = async ({req, res}) => {
   try {
    const token = getCookie('authorization', { req, res})
    if (!token) throw new Error('Token Inválido')

    verifica(token)
    return {
      props: {}
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props: {}
    }
  }
}