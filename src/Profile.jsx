function Profile(){
    return(
        <>
        <h1>ProfileCard challenge</h1>
        <ProfileCard
            name="Bhanu"
            age={23}
            greeting={
                <div>
                    <strong>hii Bhanu,have a wonderful day</strong>
                </div>
            }            
        >
            <p>Hobbies:Reading,Writting</p>
            <button>Contact</button>

            
        </ProfileCard>

        <ProfileCard
            name="Don"
            age={20}
            greeting={
                <div>
                    <strong>hii Don,have a wonderful day</strong>
                </div>
            }            
        >
            <p>Hobbies:Reading,Writting</p>
            <button>Contact</button>

            
        </ProfileCard>
        </>
    );
}
export default Profile;

function ProfileCard(props){
    return(
        <>
        <h2>Name:{props.name}</h2>
        <p>Age:{props.age}</p>
        <p>{props.greeting}</p>
        <div>{props.children}</div>
        </>
    )
}