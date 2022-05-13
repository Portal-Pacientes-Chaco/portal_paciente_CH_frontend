import { useState } from "react";
import notImg from '../../assets/statics/no-image-found.png';
import * as MdIcon from 'react-icons/md';
import { environment } from "../../environments/environments.demo";

const ImgRotate = ({ img }) => {

    const baseUrl = environment.baseURL
    const nImg = notImg 
    //rotate img
    const [rotate, setRotate] = useState(false);
    const [deg, setDeg] = useState(0);
    const rotateRigth = () => {
        setRotate(true)
        setDeg(deg + 90)
    }
    const rotateLeft = () => {
        setRotate(true)
        setDeg(deg - 90)
    }

    return (
        <div className="mb-3 d-flex flex-column align-items-center">
        <div className="d-flex w-100 justify-content-end">
            <div className="my-tooltip">
                <a className='text-secondary btn-icon' onClick={(e) => rotateLeft()}><MdIcon.MdRotateLeft /></a>
                <span className="tiptext">
                   Rotar a la izquierda
                </span>
            </div>
            <div className="my-tooltip">
                <a className='text-secondary btn-icon' onClick={(e) => rotateRigth()}><MdIcon.MdRotateRight /></a>
                <span className="tiptext">
                   Rotar a la derecha
                </span>
            </div>
        </div>
            <div className="admin-patient__img-container">
                <img className={`admin-patient__img ${rotate ? 'rotate-img' : ''}`} style={{ transform: `rotate(${deg}deg)` }} src={img ? `${baseUrl+img}` : nImg } alt={`document patient`} />
            </div>
        </div>
    )
}

export default ImgRotate