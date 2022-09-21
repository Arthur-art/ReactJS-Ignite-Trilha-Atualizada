import { styled } from '../styles'

const Button = styled('button', {
  background: '$rocketseat',
  border: 'none',
  borderRadius: '5px',
  width: '5rem',
  height: '2rem',
  fontSize: '1.2rem',
  cursor: 'pointer',
  '&:hover': {
    opacity: '0.8',
  },
  transition: '0.3s',
})

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>Click</Button>
    </div>
  )
}
