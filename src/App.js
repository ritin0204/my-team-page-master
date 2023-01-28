const App = (props) => {
    return (
        <div>
            <Header title={props.team.title} description={props.team.description}/>
            <Members members={props.team.members}/>
            <Footer/>
        </div>
    );
};

const Header = (props) => {
    return (
        <div class="main">
            <h1 id="Title">{props.title}</h1>
            <div class="description">
                <h1>Who We Are</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
}


const Members = (props) => {
    const members = props.members.map((member) => {
        return <Member member={member}/>
    })
    return(
        <div class="members">
            {members}
        </div>
    )
}


const Member = (props) => {
    return (
        <div class="member-div">
            <div class="member">
                <img class="member-img" src={process.env.PUBLIC_URL+props.member.image} alt={props.member.name}/>
                <img class="member-top-img" src={process.env.PUBLIC_URL+props.member.ShadowImage} alt={props.member.name+"Shadow"}/>
                <MemberDescription member={props.member}/>
            </div>
        </div>
    );
}


const MemberDescription = (props) => {
    return(
        <div class="member-detail">
            <h1>{props.member.name}</h1>
            <ul>
                <li>Role : {props.member.rank}</li>
                <li>Village : {props.member.village}</li>
                <li>Techniqui : {props.member.power}</li>
            </ul>
        </div>
    )
}


const Footer = () => {
    return (
        <footer>
            <p>Created and developed by Ritin tiwari.</p>
        </footer>
    )
}

export default App;
