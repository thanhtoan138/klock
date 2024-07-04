import '../scss/test.scss'
const Test = () => {
    return (
        <>
            <div className="dropdown" style={{ marginLeft: '100px' }}>
                <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                    <div className='links'>
                        <div className='hover1'>
                            <p>link 1</p>
                        </div>

                    </div>
                    <div className='links'>
                        <div className=''>
                            <p>link 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Test;