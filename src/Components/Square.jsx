import "./Square.css"

export default function SquareTurn(props){
    const {children, isSelected}= props

    const className=`turn ${isSelected?'on':''}`
    
    return(
        <div className={className}>
            {children}
        </div>
    )
}