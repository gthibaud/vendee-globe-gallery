import { useState, useEffect } from "react";
import Photo from "./components/Photo";
import images from './res/images.json';
import ReactGA from 'react-ga';

ReactGA.initialize('G-S1EYW4TX50', { debug: true});

const App = () => {

    const [activeCategory, setActiveCategory] = useState(0);
    const categories = ['Tout', 'Ambiance', 'Apivia', 'Apicil', 'Banque Populaire', 'BestWestern', 'Charal', 'Bureau Vallée', 'Grégoire', 'Jean', 'LinkedOut', 'L\'Occitane', 'Maître Coq', 'SeaExplorer', 'V&B Mayenne', 'Yes We Cam'];

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <div className="app">
            <h1>Les pontons du Vendée Globe</h1>
            <p>Voici quelques photos de l'arrivée des bateaux du Vendée Globe. Ces photos ont été prises par Grégoire Thibaud et Jean Haberer au cours du week-end du 6 au 7 février 2021. Les appareils utilisés sont des Sony A7iii avec des objectifs Zeiss 55mm.</p>
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
            <p className="copyright">© Grégoire Thibaud et Jean Haberer — <a href="mailto:gregoire.thibo@gmail.com">gregoire.thibo@gmail.com</a></p>
        </div>
    );
}

export default App;
