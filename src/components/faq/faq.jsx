import React from 'react';
import {Jumbotron} from 'mdbreact';

const Faq = (props) => {
    const {text} = props;
    const onClick = (e) => {
        e.target.classList.toggle("active");
        let panel = e.target.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = 1500 + "px";
        }
    };
    return (
        <div style={{textAlign: 'center'}} className="custom-jumbotron">
            <Jumbotron>
                <p className="faq-header">{text.home.faq.title}</p>
                <button className="accordion" onClick={onClick}>{text.home.faq.firstAppointment.title}</button>
                <div className="panel">
                    <button className="accordion" onClick={onClick}>{text.home.faq.firstAppointment.questions[1]}</button>
                    <div className="panel">
                        <p>{text.home.faq.firstAppointment.answers[1]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.firstAppointment.questions[2]}</button>
                    <div className="panel">
                        <p>{text.home.faq.firstAppointment.answers[2]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.firstAppointment.questions[3]}</button>
                    <div className="panel">
                        <p>{text.home.faq.firstAppointment.answers[3]}</p>
                        <ul>
                            <li>{text.home.faq.firstAppointment.answers.list[1]}</li>
                            <li>{text.home.faq.firstAppointment.answers.list[2]}</li>
                            <li>{text.home.faq.firstAppointment.answers.list[3]}</li>
                            <li>{text.home.faq.firstAppointment.answers.list[4]}</li>
                        </ul>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.firstAppointment.questions[4]}</button>
                    <div className="panel">
                        <p>{text.home.faq.firstAppointment.answers[4]}</p>
                    </div>
                </div>
                <button className="accordion" onClick={onClick}>{text.home.faq.preventive.title}</button>
                <div className="panel">
                    <button className="accordion" onClick={onClick}>{text.home.faq.preventive.questions[2]}</button>
                    <div className="panel">
                        <p>{text.home.faq.preventive.answers[2]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.preventive.questions[3]}</button>
                    <div className="panel">
                        <p>{text.home.faq.preventive.answers[3]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.preventive.questions[4]}</button>
                    <div className="panel">
                        <p>{text.home.faq.preventive.answers[4]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.preventive.questions[5]}</button>
                    <div className="panel">
                        <p>{text.home.faq.preventive.answers[5]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.preventive.questions[6]}</button>
                    <div className="panel">
                        <p>{text.home.faq.preventive.answers[6][1]}</p>
                        <p>{text.home.faq.preventive.answers[6][2]}</p>
                        <p>{text.home.faq.preventive.answers[6][3]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.preventive.questions[7]}</button>
                    <div className="panel">
                        <p>{text.home.faq.preventive.answers[7]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.preventive.questions[8]}</button>
                    <div className="panel">
                        <p>{text.home.faq.preventive.answers[8]}</p>
                    </div>
                </div>
                <button className="accordion" onClick={onClick}>{text.home.faq.general.title}</button>
                <div className="panel">
                    <button className="accordion" onClick={onClick}>{text.home.faq.general.questions[1]}</button>
                    <div className="panel">
                        <p>{text.home.faq.general.answers[1]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.general.questions[2]}</button>
                    <div className="panel">
                        <p>{text.home.faq.general.answers[2]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.general.questions[3]}</button>
                    <div className="panel">
                        <p>{text.home.faq.general.answers[3]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.general.questions[4]}</button>
                    <div className="panel">
                        <p>{text.home.faq.general.answers[4]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.general.questions[5]}</button>
                    <div className="panel">
                        <p>{text.home.faq.general.answers[5]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.general.questions[6]}</button>
                    <div className="panel">
                        <p>{text.home.faq.general.answers[6]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.general.questions[7]}</button>
                    <div className="panel">
                        <p>{text.home.faq.general.answers[7]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.general.questions[8]}</button>
                    <div className="panel">
                        <p>{text.home.faq.general.answers[8][1]}</p>
                        <p>{text.home.faq.general.answers[8][2]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.general.questions[9]}</button>
                    <div className="panel">
                        <p>{text.home.faq.general.answers[9][1]}</p>
                        <p>{text.home.faq.general.answers[9][2]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.general.questions[10]}</button>
                    <div className="panel">
                        <p>{text.home.faq.general.answers[10][1]}</p>
                        <ul>
                            <li>{text.home.faq.general.answers[10].list[1]}</li>
                            <li>{text.home.faq.general.answers[10].list[2]}</li>
                            <li>{text.home.faq.general.answers[10].list[3]}</li>
                            <li>{text.home.faq.general.answers[10].list[4]}</li>
                            <li>{text.home.faq.general.answers[10].list[5]}</li>
                            <li>{text.home.faq.general.answers[10].list[6]}</li>
                            <li>{text.home.faq.general.answers[10].list[7]}</li>
                        </ul>
                        <p>{text.home.faq.general.answers[10][2]}</p>
                    </div>
                </div>
                <button className="accordion" onClick={onClick}>{text.home.faq.family.title}</button>
                <div className="panel">
                    <button className="accordion" onClick={onClick}>{text.home.faq.family.questions[1]}</button>
                    <div className="panel">
                        <p>{text.home.faq.family.answers[1]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.family.questions[2]}</button>
                    <div className="panel">
                        <p>{text.home.faq.family.answers[2]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.family.questions[3]}</button>
                    <div className="panel">
                        <p>{text.home.faq.family.answers[3]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.family.questions[4]}</button>
                    <div className="panel">
                        <p>{text.home.faq.family.answers[4]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.family.questions[5]}</button>
                    <div className="panel">
                        <p>{text.home.faq.family.answers[5]}</p>
                    </div>
                </div>
                <button className="accordion" onClick={onClick}>{text.home.faq.cosmetic.title}</button>
                <div className="panel">
                    <button className="accordion" onClick={onClick}>{text.home.faq.cosmetic.questions[1]}</button>
                    <div className="panel">
                        <p>{text.home.faq.cosmetic.answers[1]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.cosmetic.questions[2]}</button>
                    <div className="panel">
                        <p>{text.home.faq.cosmetic.answers[2]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.cosmetic.questions[3]}</button>
                    <div className="panel">
                        <p>{text.home.faq.cosmetic.answers[3]}</p>
                    </div>
                </div>

                <button className="accordion" onClick={onClick}>{text.home.faq.emergencies.title}</button>
                <div className="panel">
                    <button className="accordion" onClick={onClick}>{text.home.faq.emergencies.questions[1]}</button>
                    <div className="panel">
                        <p>{text.home.faq.emergencies.answers[1][1]}</p>
                        <p>{text.home.faq.emergencies.answers[1][2]}</p>
                        <p>{text.home.faq.emergencies.answers[1][3]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.emergencies.questions[2]}</button>
                    <div className="panel">
                        <p>{text.home.faq.emergencies.answers[2][1]}</p>
                        <p>{text.home.faq.emergencies.answers[2][2]}</p>
                        <p>{text.home.faq.emergencies.answers[2][3]}</p>
                    </div>
                    <button className="accordion" onClick={onClick}>{text.home.faq.emergencies.questions[3]}</button>
                    <div className="panel">
                        <p>{text.home.faq.emergencies.answers[3][1]}</p>
                        <p>{text.home.faq.emergencies.answers[3][2]}</p>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
};

export default Faq;