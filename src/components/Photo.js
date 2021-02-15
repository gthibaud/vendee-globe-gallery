import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Photo = (props) =>
    <div className="photo-container">
        <Zoom>
            <LazyLoadImage
                src={props.photo.path}
                effect="opacity"
                className="photo"
                beforeLoad={() => console.log(`chargement de ${props.photo.path}`)}
                afterLoad={() => console.log(`${props.photo.path} chargée`)}
            />
        </Zoom>
        <div className="photo-metadata">
            <p>{props.photo.description}</p>
            <p className="photo-author">{props.photo.author}</p>
        </div>
    </div>

export default Photo;
