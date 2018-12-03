import React from 'react';
import abq from "../../assets/albuquerque-skyline.jpg";
import { Mask, View } from 'mdbreact';
import Nav from "../navbar/navbar";
import FooterPage from "../footer/footer";


class Intro extends React.Component {
    render() {
        return (
            <div>
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
                            <p></p>
                        </Mask>
                    </View>
                </header>
                <FooterPage/>
            </div>
        );
    }
}

export default Intro;