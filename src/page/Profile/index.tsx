import React from 'react'
import './styles.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineBank } from "react-icons/ai"
import { MdWork } from 'react-icons/md'

function Profile() {

    return (
        <div className="profile-content">
            <div className="user-container">
                <div className="image-container">
                    <img src="https://github.com/YuriVini.png" className="image" />
                </div>
                <h1>Yuri Vinicius</h1>
                <h3>@yuriviniciusDev</h3>
                <p>Front-end Developer</p>

            </div>
            <div className="info-container">
                <div className="icon-content">
                    <FaMapMarkerAlt size={20} color='#64C9E2' />
                    <h2>Feira de Santana/Bahia - Brasil</h2>
                </div>

                <div className="info-content">
                    <div className="icon-content">
                        <MdWork size={20} />
                        <h2>InCicle</h2>
                    </div>
                    <div className="icon-content">
                        <AiOutlineBank size={20} />
                        <h2>Uninorte</h2>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Profile
