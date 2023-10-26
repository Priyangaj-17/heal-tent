import AsyncImage from '../../../../Utils/useAsyncImage'
//import ConsoleForm from '../../../../Modules/Auth/Accounts/Console/ConsoleForm'
import { Link, useNavigate } from 'react-router-dom'
import { BodyContent, BodyLowerContent, BodyUpperContent } from './BodyStyles'

const Body = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("credentials");

    
    return (
        <BodyContent className="flex fd-col">
            <div className="col-n-12 bg:primary ">
                <BodyUpperContent className="row">
                    <div className="left flex col-n-7">
                        <div className="flex fd-col js-center">
                            <p className="size:5xl color:white bold-600">Welcome, </p>
                            <p className=" size:2xl color:white">Accounting Software for Documents Clearing & <br />
                                Forwarding Establishments.</p>

                            <div className="button">

                                <button
                                    id="login-btn"
                                    className="btn btn-primary"
                                    type="submit"
                                    data-display="0"
                                    rel="nofollow"
                                    onClick={() => navigate('/multistepform/step-1')}
                                >
                                    Add Organisation
                                </button>


                            </div>
                        </div>
                    </div>
                    <div className="right flex col-n-5 w-100 h-100">
                        <AsyncImage
                            className="flex"
                            url="/src/Assets/images/logo/landing-img 1.png"
                            loadType=""
                            alt="Make Pay"
                            hasTooltip={true}
                            tooltip="Make Pay"
                            ariaLabel="Make Pay"
                        />
                    </div>
                </BodyUpperContent>
            </div>
            <BodyLowerContent className="col-n-12">
                <div className="container flex m-auto-rl">
                    <div className="flex makepay-explore">
                        <div className="flex fd-col m-auto-tb">
                            <div className="flex fd-col">
                                <p className="size:3xl bold-600">Explore Makepay</p>
                                <div className="xx">
                                    <span className="bold-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et
                                    </span>
                                </div>
                                <div className="flex link">
                                    <Link
                                        className="flex al-center  color:mute-dark btn-link"
                                        to="#"
                                    >
                                        Learnmore
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="makepay-img flex">
                        <AsyncImage
                            className=""
                            url="/src/Assets/images/logo/explore.png"
                            loadType=""
                            alt="Make Pay"
                            hasTooltip={true}
                            tooltip="Make Pay"
                            ariaLabel="Make Pay"
                        />
                    </div>
                </div>

            </BodyLowerContent>
        </BodyContent>
    )
}

export default Body