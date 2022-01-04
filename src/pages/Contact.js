import { useLocation } from "react-router-dom"

export default function Contact() {
    const queryString = useLocation().search

    return (
        <div>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde nemo fugit, eaque impedit, fugiat autem, quibusdam voluptatum consequatur placeat quam molestias. Voluptate eaque, numquam impedit ducimus quas pariatur sapiente.</p>
        </div>
    )
}
