function Buttons({filteredPets}){
    return(<div className="cont">
        <button className="change" onClick ={()=>filteredPets("dogs")}>Dog</button>
        <button className="change" onClick ={()=>filteredPets("cat")}>Cat</button>
        <button className="change" onClick ={()=>filteredPets("parrot")}>Parrot</button>
        <button className="change" onClick ={()=>filteredPets("hamster")}>Hamster</button>
    </div>)
}

export default Buttons;