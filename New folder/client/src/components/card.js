import profilepic from '../assets/profile.png'
export function Card(){
    return(
        <div className='card'>
        <img className='ci' src={profilepic} alt='profile picture'></img>
        <h2>shifa khan</h2>
        <p>i an shifa </p>
        </div>
    );
}