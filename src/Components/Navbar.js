import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
import { searchbar } from '../Store/slices/NewsSlice'
import { useDispatch } from 'react-redux' 
const Navbar = ({ first, setfirst }) => {
const dispatch=useDispatch();

    const [search, setsearch] = useState('')

    const toggle = () => {
        if (first === 'light') {
            setfirst('dark')

        }
        else {
            setfirst('light')

        }
    }

    const handleinput = (event) => {
    const tar = event.target.value;
    setsearch(tar);
    dispatch(searchbar(tar));
}
    return (
        <>
            <nav className={` conatiner-fluid sticky-top navbar navbar-expand-custom navbar-expand-lg ${first === 'dark' ? 'bg-dark' : ''}`} style={first === 'dark' ? {} : {
                background: 'linear-gradient(to right, #667eea, #764ba2)'
            }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><span className='News'>News</span> <span className='World'>World</span></Link>
                    <button className="navbar-toggler text-bg-light  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className=" justify-content-space-evenly collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul className=" flex-nowrap navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="  text-light nav-link active" aria-current="page" to="/">Home <i className="bi bi-house-door"></i></Link>
                            </li>

                            <li className="nav-item">
                                <Link className=" text-light nav-link active" aria-current="page" to="/business">Business <i className="bi bi-briefcase"></i></Link>
                            </li>
                            <li className="nav-item">

                                <Link className=" text-light nav-link active" aria-current="page" to="/entertainment">Entertainment <i className="bi bi-tv"></i></Link>
                            </li>


                            <li className="nav-item  ">
                                <Link className=" text-light nav-link active" aria-current="page" to="/health">Health <i className="bi bi-heart-pulse"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-light nav-link active" aria-current="page" to="/general">General <i className="bi bi-globe"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-light nav-link active" aria-current="page" to="/science">Science <i className="bi bi-funnel"></i>  </Link>
                            </li>
                            <li className="nav-item d-flex  ">
                                <Link className=" text-light nav-link active" aria-current="page" to="/sports">Sports <i className="fas fa-basketball-ball"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-light nav-link active" aria-current="page" to="/Technology">Technology <i className="bi bi-laptop"></i></Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control formcon   me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleinput} value={search} />

                        </form>
                        <button onClick={toggle} className="btn  logo btn-light">
                            {
                                first === 'light' ? <i class="bi bi-moon-stars"></i> : <i class="bi bi-brightness-high" />

                            }
                        </button>

                    </div>
                </div>

            </nav>





            <form className={`d-flex hello2 sticky-top ${first === 'dark' ? 'bg-dark' : ''}`}
                style={first === 'dark' ? {} : { background: 'linear-gradient(to right, #667eea, #764ba2)' }}
                role="search">

                <input  onChange={handleinput}
                    className=" form-control formcontrol1 me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ paddingLeft: "10px" }}
                />

            </form>



        </>
    )
}

export default Navbar
