type Props = {
  children: React.ReactNode
  name: string
}

const Text = ({ children, name }: Props) => {
  return (
    <article className='brown'>
      {children}
      <span>by {name}</span>
    </article>
  )
}

export default Text
