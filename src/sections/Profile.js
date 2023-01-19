import { IonIcon } from "@ionic/react";
import { checkmarkCircleSharp } from "ionicons/icons";

const profile = {
    fullname: "4ddclub",
    picture:
        "https://ik.imagekit.io/soulshoes/4ddclub/logo-4ddicted-club?ik-sdk-version=javascript-1.4.3&updatedAt=1674157728791",
    socialMedia: [
        {   name: "Entre em contato", 
            url: "https://marwanzaky.com",
            icon: "fa-whatsapp"
        }
    ],
};

const colors = ["#4BE066", "#3D405B", "#81B29A", "#F2CC8F"];

function Button(props) {
    const style = {
        backgroundColor: colors[props.index],
    };

    return (
        <a href={props.url} className='button w-[80%] mx-auto' style={style}>
            {props.name}
            <i class={`fa-brands ${props.icon} fa-xl my-2 mx-2 absolute text-[${props.colors}]`}></i>
        </a>
    );
}

function Profile() {
    return (
        <section className='profile c'>
            <div className='m-auto w-full sm:w-[300px]'>
                <div className='mb-5'>
                    <div className='profile-picture'>
                        <img src={profile.picture} alt={profile.name}></img>
                    </div>
                    <h1 className='profile-fullname text-white'>
                        {profile.fullname}
                        <IonIcon
                            className='profile-fullname-check_mark'
                            src={checkmarkCircleSharp}
                        />
                    </h1>
                </div>

                <div>
                    {/* <h1 className='profile-about text-white'>About</h1> */}
                    <div className='profile-bio text-white'>
                        <p>🔥 Obtenha as últimas tendências e tênis de luxo.</p>
                        <p>🤝 Autenticidade garantida.</p>
                        <p>💎 Especializado em tênis de moda e luxo.</p>                        
                    </div>
                </div>

                <div className='social_media flex flex-col'>
                    {profile.socialMedia.map((el, i) => (
                        <Button name={el.name} url={el.url} icon={el.icon} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Profile;
