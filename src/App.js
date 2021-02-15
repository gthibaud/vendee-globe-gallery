import { useState } from "react";
import Photo from "./components/Photo";
import images from './res/images.json';

const App = () => {

    const [activeCategory, setActiveCategory] = useState(0);
    const categories = ['Tout', 'Ambiance', 'Apivia', 'Apicil', 'Banque Populaire', 'BestWestern', 'Charal', 'Bureau Vallée', 'Grégoire', 'Jean', 'LinkedOut', 'L\'Occitane', 'Maître Coq', 'SeaExplorer', 'V&B Mayenne', 'Yes We Cam'];

    return (
        <div className="app">
            <h1>Vendée Globe 2020</h1>
            <p>Voici quelques photos de l'arrivée des bateaux du Vendée Globe. Ces photos ont été prises au cours du week-end du 6 au 7 février 2021. Les appareils utilisés sont des Sony A7iii avec Zeiss 55mm.</p>
            <h2>Catégorie</h2>
            <div className="tags">
                {categories.map((category, index) =>
                    <button
                        key={index}
                        onClick={() => setActiveCategory(index)}
                        className={index == activeCategory && 'activeTag' || ''}
                    >{category}</button>
                )}
            </div>
            <div className="photo-list">
                {images.map(image => image.categories.includes(activeCategory) && <Photo photo={image} key={image.path} />)}
            </div>
            <hr></hr>
            <p className="copyright">© Grégoire Thibaud et Jean Haberer</p>
        </div>
    );
}

export default App;
