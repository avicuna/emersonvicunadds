import React from 'react';
import abq from "../../assets/albuquerque-skyline.jpg";
import { Mask, View } from 'mdbreact';
import Nav from "../navbar/navbar";
import FooterPage from "../footer/footer";
import MapContainer from "../map/map-container";


class Intro extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Nav/>
                    <View>
                        <img
                            src={abq}
                            alt="stuff"
                            className="img-fluid abq"
                        />
                        <Mask overlay="indigo-light"
                              style={{ flexDirection: "column" }}
                              className="flex-center  text-white text-center"
                        >
                            <h1 className="display-4">Emerson Vicuna, DDS Family Dentistry</h1>
                        </Mask>
                    </View>
                </header>
                <main>
                    <MapContainer/>
                </main>
                <FooterPage/>
            </>
        );
    }
}

export default Intro;