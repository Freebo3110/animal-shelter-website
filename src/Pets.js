function Pets({anyPets}){
    return(
        <div className="pets">
            {anyPets.map((element => {
                const {id,name,age,image}=element;
                return <div key={ id } className="pet-card">
                    <img src={ image } width="400px" height="300px" alt="pet"/>
                    <div className="about">
                        <h3 className="petName">{ name }</h3>
                        <h4 className="petAge">{ age }</h4>
                    </div>
                </div>
            }))}
        </div>
    )

}

export default Pets;