import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {
    
    return (
        <div className="border border-gray-400 rounded-md p-4 my-4">
            <h3 className="text-xl font-bold">{title}</h3>
            {isVisible ? (
                <button
                onClick={()=>setIsVisible(false)}
                className="cursor-pointer bg-gray-200 p-2 font-semibold" >
                    Hide
                    </button> 
            ):(
                <button 
                onClick={()=>setIsVisible(true)}
                className="cursor-pointer bg-gray-200 p-2 font-semibold">
                    Show
                    </button>
            )}
        {isVisible && <p>{description}</p>}
        </div>    
    )    
};
    
const Instamart = () =>{
    const [visibleSection , setVisibleSection] = useState("");
    const handleToggleVisibility = (value) => {                            
        setVisibleSection(prevVisibleSection => 
            prevVisibleSection === value ? "" : value
        );
        //If the value matches the current visibleSection, it means the section is already visible, so it sets visibleSection to an empty string (""), effectively hiding the section.
        //If the value doesn't match the current visibleSection, it means the section is not visible, so it sets visibleSection to the value, making that section visible.
    };
    return(
        <div>
            <h1 className="font-bold p-2 m-2 text-3xl">Instamart</h1>
            <Section
            title={"About Instamart"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
            }
            isVisible={visibleSection ===  "about"}
            setIsVisible={() => handleToggleVisibility("about")}
        />

<Section
            title={"Team Instamart"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
            }
            isVisible={visibleSection ===  "team"}
            setIsVisible={() => handleToggleVisibility("team")}
            />

<Section
            title={"Careers"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
            }
            isVisible={visibleSection ===  "career"}
            setIsVisible={() => handleToggleVisibility("career")}
            />
            
        </div>
    )
};
export default Instamart;


