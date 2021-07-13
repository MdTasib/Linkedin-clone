const container = {
    width: '90%',
    margin: '0 auto'
}

function Container({ children }) {
    return (
        <div className={container}>
            {children}
        </div>
    )
}

export default Container;