type EmbeddedProps = {
  children: React.ReactNode
}

const Embedded = ({ children }: EmbeddedProps) => {
  return (
    <div className="bg-gray-100 p-3">
      {children}
    </div>
  )
}

export default Embedded;