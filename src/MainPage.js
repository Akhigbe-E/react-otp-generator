import React, { Component } from 'react';
import barCodeImage from './assets/qrCodeImage.png'
import './MainPage.css'



class MainPage extends Component{
    state={
        otpArray:[
            '987 608',
            '492 382',
            '192 462',
            '513 728',
            '366 284',
            '782 362',
            '882 718',
            '812 712',
            '121 123',
            '091 288',
            '543 2016',
            '275 4128',
            '623 1932',
            '612 974',
            '454 904',
            '616 206',
            '555 676',
            '868 476',
            '263 091',
            '967 251',
            '375 208',
            '907 802',
            '684 678',
            '859 966',
            '373 968',
            '333 786',
            '978 838',
            '464 464',
            '540 926',
            '772 980',
            '552 088'

        ],
        currentOtp:882738,
        counter: 60
    }
    generateOtp = () => {
        let {otpArray} = this.state;
        otpArray.forEach((otp, index)=>{
            setTimeout(()=>{
                this.setState({
                    currentOtp: otp
                })
                this.countDown()
            }, index * 60000); 
        })
        console.log('done')
    }
    countDown = () => {
        let counter = 0
        for (let index = 59; index >= 0 ; index--) {
            counter+=1
            setTimeout(()=>{
                this.setState({
                    counter: index
                })
            }, counter*1000)
        }
       
    }
    divStyle = {
        animation: `countdown ${this.state.counter}s linear infinite forwards`
    }
    componentDidMount(){
        this.generateOtp()
    }



    render(){
        return(
            <div className="container">
                <div className="otp-style">
                    <div className="row">
                        <div className="col-sm-8 col-lg-8 otp">
                            <div className="otp-number">{this.state.currentOtp}</div>
                        </div>
                        <div className="col-sm-4 col-lg-4 counter">
                            <div className="counter-style">
                                <p>Time</p>
                                <svg>
                                    <circle r="18" cx="20" cy="20"style={this.divStyle} ></circle>
                                    <text x="12" y="25" fill="black">{this.state.counter}</text>
                                </svg>
                            </div>
                        </div>
                        
                    </div>
                    <div className="barcode-image"><img src={barCodeImage} alt='Fetching Barcode...'/></div>
                    

                </div>
            </div>
        );
    }
}
export default MainPage;