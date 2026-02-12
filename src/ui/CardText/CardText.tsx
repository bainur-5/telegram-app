
export default function CardText({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`cardText ${className}`}>
      {children}
    </div>
  )
}