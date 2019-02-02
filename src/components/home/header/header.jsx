import React from 'react';
import abq from "../../../assets/albuquerque-skyline.jpg";
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
                    <Mask overlay=""
                          style={{ flexDirection: "column" }}
                          className="flex-center  text-white text-center"
                    >
                        <p className="home-header-1">Emerson Vicuña, DDS Family Dentistry</p>
                        <p className="home-header-2">Albuquerque, New Mexico</p>
                    </Mask>
                </View>
            </header>
        </>
    )
};
export default Header;