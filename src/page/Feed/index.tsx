import React, { useState } from 'react';
import './styles.css';
import { AiFillEdit, AiOutlineLike } from 'react-icons/ai';
import { BsImages, BsCameraVideo, BsLockFill } from 'react-icons/bs';
import { ImAlarm } from 'react-icons/im';
import { FiChevronDown } from 'react-icons/fi';
import { FaRegCommentDots, FaRegShareSquare } from 'react-icons/fa';
import { IoEarthSharp } from 'react-icons/io5';


function Feed() {
    const [pressed, setPressed] = useState(true);
    function handleTogglePressed(){
            setPressed((prevState) => !prevState);
    }

    const [pressed2, setPressed2] = useState(true);
    function handleTogglePressed2(){
            setPressed2((prevState) => !prevState);
    }

    return (
        <div className="feed-container">
            <div className="new-post-container">
                <div className="write-content">
                    <div className="icon-write-content">
                        <AiFillEdit size={30} color="#a1a1a1" />
                        <h1>Escreva uma publicação</h1>
                    </div>
                    <div className="icon-feed-content">
                        <BsImages size={30} color="#a1a1a1" />
                        <BsCameraVideo size={30} color="#a1a1a1" />
                    </div>
                </div>
                <div className="article-container">
                    <p>ou&nbsp;</p>
                    <h3>publique um artigo&nbsp;</h3>
                    <p>na InCicle</p>
                </div>
            </div>

            <div className="post-container">
                <div className="post-content">
                    <div className="profile-post-content">
                        <div className="image-feed-container">
                            <img src="https://github.com/YuriVini.png" className="image-feed" />
                        </div>
                    </div>
                    <div className="status-post">
                        <h1>Yuri Vinicius</h1>
                        <div className="icon-post-container">
                            <div className="icon-post-content">
                                <ImAlarm size={18} color="#a1a1a1"/>
                                <h2>Há cerca de 8 horas</h2>
                            </div>
                            <div className="icon-post-content">
                                <BsLockFill size={18} color="#a1a1a1"/>
                                <h2>Somente eu</h2>
                            </div>
                        </div>
                    </div>
                    <FiChevronDown size={30} color="#221d1d" />
                </div>

                <div className="written-post">
                    <h2>Essa Publicação está configurada no modo privado "somente eu".</h2>
                </div>

                <div className="reactions-container">
                    <div className="likes-content">
                        <AiOutlineLike size={22} color="#a1a1a1"/>
                        <h3> Seja o primeiro a curtir</h3>
                    </div>
                    <div className="comment-share-content">
                        <h3>0 comentários&nbsp;</h3>
                        <h3>0 compartilhamentos</h3>
                    </div>
                </div>

                <div className="button-container">
                    <button 
                        id='1'
                        className={pressed ? "button-content" : "button-pressed-content"} 
                        type="button"
                        onClick={handleTogglePressed}    
                    >
                        <AiOutlineLike size={26} color={pressed ? "#a1a1a1" : "#64C9E2"}/>
                        <h4>Curtir</h4>
                    </button>
                    <button className="button-content" type="button">
                        <FaRegCommentDots size={26} color="#a1a1a1"/>
                        <h4>Comentar</h4>
                    </button>
                    <button className="button-content" type="button">
                        <FaRegShareSquare size={26} color="#a1a1a1"/>
                        <h4>Compartilhar</h4>
                    </button>
                </div>
            </div>

            <div className="post-container">
                <div className="post-content">
                    <div className="profile-post-content">
                        <div className="image-feed-container">
                            <img src="https://github.com/YuriVini.png" className="image-feed" />
                        </div>
                    </div>
                    <div className="status-post">
                        <h1>Yuri Vinicius</h1>
                        <div className="icon-post-container">
                            <div className="icon-post-content">
                                <ImAlarm size={18} color="#a1a1a1"/>
                                <h2>Há 8 dias</h2>
                            </div>
                            <div className="icon-post-content">
                                <IoEarthSharp size={18} color="#a1a1a1"/>
                                <h2>Público</h2>
                            </div>
                        </div>
                    </div>
                    <FiChevronDown size={30} color="#221d1d" />
                </div>

                <div className="written-post">
                    <h2>ikiikiki</h2>
                </div>

                <div className="reactions-container">
                    <div className="likes-content">
                        <AiOutlineLike size={22} color="#a1a1a1"/>
                        <h3>1 uma pessoa curtiu isso</h3>
                    </div>
                    <div className="comment-share-content">
                        <h3>0 comentários&nbsp;</h3>
                        <h3>3 compartilhamentos</h3>
                    </div>
                </div>

                <div className="button-container">
                    <button
                        className={pressed2 ? "button-content" : "button-pressed-content"} 
                        type="button"
                        onClick={handleTogglePressed2}
                    >
                        <AiOutlineLike size={26} color={pressed2 ? "#a1a1a1" : "#64C9E2"}/>
                        <h4>Curtir</h4>
                    </button>
                    <button className="button-content" type="button">
                        <FaRegCommentDots size={26} color="#a1a1a1"/>
                        <h4>Comentar</h4>
                    </button>
                    <button className="button-content" type="button">
                        <FaRegShareSquare size={26} color="#a1a1a1"/>
                        <h4>Compartilhar</h4>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Feed;
