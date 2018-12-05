import React from 'react';
import abq from "../../assets/albuquerque-skyline.jpg";
import { Mask, View } from 'mdbreact';

const Header = () => {
    return (
        <>
            <header>
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
                        <h1 className="display-4">Emerson Vicuña, DDS Family Dentistry</h1>
                    </Mask>
                </View>
            </header>
        </>
    )
};
export default Header;