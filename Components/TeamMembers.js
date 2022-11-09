import React from 'react'
import Image from 'next/image'
function TeamMembers() {
  return (
    <div className='team_members_div'>
        <h1 className='text-center'>Our Team</h1>
        <p className='text-center'> We are accountable to each other and to our
            shareholders to operate in a professionally responsible and operationally effective manner.
        </p>
        <div className='team_img_div'>
            <span className='team_img_span p-0'>
                <div className='team_img'>
                    <Image
                        src="/team-member-1.jpeg"
                        objectFit='fill'
                        layout='fill'
                        className='img'
                        alt="Picture Of The Chairman"
                    />
                </div>
                <div className='team_img_text'>
                    <p>Chairman/CEO</p>
                    <h1>Daniel Jacob A.</h1>
                    <ul className='team_social_icons'>
                        <a href='#'><i className="bi bi-instagram"></i></a>
                        <a href='#'><i className="bi bi-facebook"></i></a>
                        <a href='#'><i className="bi bi-twitter"></i></a>
                        <a href='#'><i className="bi bi-envelope"></i></a>
                    </ul>
                </div> 
            </span>  
            <span  className='team_img_span p-0'>
                <div className='team_img'>
                    <Image
                        src="/team-member-5.jpeg"
                        objectFit='fill'
                        layout='fill'
                        className='img'
                        alt="Picture Of The Executive Director"
                    /> 
                </div>
                <div className='team_img_text'>
                    <p>Executive Director</p>
                    <h1>Dr. Paul Hassan Akpa</h1>
                    <ul className='team_social_icons'>
                        <a href='#'><i className="bi bi-instagram"></i></a>
                        <a href='#'><i className="bi bi-facebook"></i></a>
                        <a href='#'><i className="bi bi-twitter"></i></a>
                        <a href='#'><i className="bi bi-envelope"></i></a>
                    </ul>
                </div> 
            </span>  
            <span  className='team_img_span p-0'>
                <div className='team_img'>
                    <Image
                        src="/team-member-4.jpeg"
                        objectFit='fill'
                        layout='fill'
                        className='img'
                        alt="Picture Of The Executive Director"
                    /> 
                </div>
                <div className='team_img_text'>
                    <p>Executive Director</p>
                    <h1>Dr. Sagir G. Muktar</h1>
                    <ul className='team_social_icons'>
                        <a href='#'><i className="bi bi-instagram"></i></a>
                        <a href='#'><i className="bi bi-facebook"></i></a>
                        <a href='#'><i className="bi bi-twitter"></i></a>
                        <a href='#'><i className="bi bi-envelope"></i></a>
                    </ul>
                </div> 
            </span>  
            <span  className='team_img_span p-0'>
                <div className='team_img'>
                    <Image
                        src="/team-member-6.jpeg"
                        objectFit='fill'
                        layout='fill'
                        className='img'
                        alt="Picture Of The Executive Director"
                    /> 
                </div>
                <div className='team_img_text'>
                    <p>Executive Director</p>
                    <h1>Mr. Oyedeji Adegoke O.</h1>
                    <ul className='team_social_icons'>
                        <a href='#'><i className="bi bi-instagram"></i></a>
                        <a href='#'><i className="bi bi-facebook"></i></a>
                        <a href='#'><i className="bi bi-twitter"></i></a>
                        <a href='#'><i className="bi bi-envelope"></i></a>
                    </ul>
                </div> 
            </span> 
            <span  className='team_img_span p-0'>
                <div className='team_img'>
                    <Image  
                        src="/team-member-2.jpeg"
                        objectFit='fill'
                        layout='fill'
                        className='img'
                        alt="Picture Of The Legal Advisor"
                    /> 
                </div>
                <div className='team_img_text'>
                    <p>Legal Advisor</p>
                    <h1>Bar. Simon Tabji Baltai</h1>
                    <ul className='team_social_icons'>
                        <a href='#'><i className="bi bi-instagram"></i></a>
                        <a href='#'><i className="bi bi-facebook"></i></a>
                        <a href='#'><i className="bi bi-twitter"></i></a>
                        <a href='#'><i className="bi bi-envelope"></i></a>
                    </ul>
                </div> 
            </span>  
            <span  className='team_img_span p-0'>
                <div className='team_img'>
                    <Image
                        src="/team-member-3.jpeg"
                        objectFit="fill"
                        layout='fill'
                        className='img'
                        alt="Picture Of The Non-Excutive Director"
                    /> 
                </div>
                <div className='team_img_text'>
                    <p>Non-Excutive Director</p>
                    <h1>Mr. Isreal U. Shaibu</h1>
                    <ul className='team_social_icons'>
                        <a href='#'><i className="bi bi-instagram"></i></a>
                        <a href='#'><i className="bi bi-facebook"></i></a>
                        <a href='#'><i className="bi bi-twitter"></i></a>
                        <a href='#'><i className="bi bi-envelope"></i></a>
                    </ul>
                </div> 
            </span>  
        </div>     
    </div>
  )
}

export default TeamMembers