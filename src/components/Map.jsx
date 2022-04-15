import React, { useRef, useEffect, useState } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import '../styles.css';

const Map = () => {

    mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhaXJlMTIzNDU2NzgiLCJhIjoiY2wxeGNoZmduMDBsYTNpbXRvYWtmbXkzeiJ9.2_d4igbbYVzzjw3XZpp7DA';

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(2.3522219);
    const [lat, setLat] = useState(48.856614);
    const [zoom, setZoom] = useState(11.5);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        map.current.on('load', () => {
            map.current.loadImage(
                'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
                (error, image) => {
                    if (error) throw error;
                    map.current.addImage('custom-marker', image);
                
                map.current.addSource('points', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': '',
                    }
                });

                map.current.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'points',
                    'layout': {
                      'icon-image': 'custom-marker',
                      'text-field': ['get', 'nom_tournage'],
                      'text-font': [
                        'Open Sans Semibold',
                        'Arial Unicode MS Bold'
                      ],
                      'text-offset': [0, 1.25],
                      'text-anchor': 'top'
                    }
                  });
                }
            );
        });
    }, []);

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
};

export default Map;