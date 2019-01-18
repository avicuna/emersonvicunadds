import React from 'react';
import abq from "../../assets/albuquerque-skyline.jpg";
import { Mask, View } from 'mdbreact';

const Header = (props) => {
    return (
        <>
            <header>
                <View>
                    <img
                        src={abq}
                        alt="stuff"
                        className="img-fluid abq"
                    />
                    <Mask overlay=""
                          style={{ flexDirection: "column" }}
                          className="flex-center  text-white text-center"
                    >
                        <h1 className="display-3">Emerson Vicuña, DDS Family Dentistry</h1>
                        <h2>Albuquerque, New Mexico</h2>
                    </Mask>
                </View>
            </header>
        </>
    )
};
export default Header;