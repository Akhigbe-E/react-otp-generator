import React, { Component } from 'react';
import barCodeImage from './assets/qrCodeImage.png'
import './MainPage.css'



class MainPage extends Component{
    state={
        otpArray:[
            '987608',
            '492382',
            '192462',
            '513728',
            '366284',
            '782362',
            '882718',
            '812712',
            '121123',
            '091288',
            '543201',
            '275418',
            '623132',
            '612974',
            '454904',
            '616206',
            '555676',
            '868476',
            '263091',
            '967251',
        ],
        currentOtp:'987608',
        counter: 60
    }
    generateOtp = () => {
        let {otpArray} = this.state;
        // while(true){}
        otpArray.forEach((otp, index)=>{
            setTimeout(()=>{
                this.setState({
                    currentOtp: otp
                })
                this.countDown()
            }, index * 60000); 
        })
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
                    <div className="page-header">
                        <div className="instruction"><h2>Your OTP</h2></div> 
                    </div>
                    <div className='content'>
                        {/* <div className="row">
                        <div className="col-sm-8 col-lg-8 otp"> */}
                            <div className="otp-number">{this.state.currentOtp.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}</div>
                        {/* </div>
                        <div className="col-sm-4 col-lg-4 counter"> */}
                            <div className="counter-style">
                                {/* <p>Time</p> */}
                                <svg>
                                    <circle r="18" cx="20" cy="20"style={this.divStyle} ></circle>
                                    <text x="12" y="25" fill="black">{this.state.counter}</text>
                                </svg>
                            </div>
                        {/* </div> */}
                        
                    {/* </div> */}
                    </div>
                    <hr className="line"/>
                    <div className="page-header-s">
                        <div className="instruction"><h2>Scan this code</h2></div> 
                    </div>
                    <div className="barcode-image"><img src={barCodeImage} alt='Fetching Barcode...'/></div>
                    

                </div>
            </div>
        );
    }
}
export default MainPage;