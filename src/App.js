import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import ReactGA from 'react-ga';
import logo from './logo.svg';
import ViettelLogo from './img/viettel.jpg';
import VinaLogo from './img/vinaphone.png';
import MobiLogo from './img/mobi.png';
import GMobileLogo from './img/gmobile.jpg';
import VietnamobileLogo from './img/vietnamobile.png';
import './App.css';

ReactGA.initialize('UA-113943686-2', {
    debug: true,
    titleCase: false,
});

ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            phoneValue: '',
            carrier: ''
        };
    }

    onChange = (e) => {
        let phone = e.target.value.trim();
        phone = phone.replace(/\./g, "");
        this.setState({ phone })
        if (!this.isPhoneNumber(phone)) {
            this.setState({ phoneValue: "Số điện thoại của bạn không hợp lệ", carrier: '' });
            return;
        }

        const theFourFirstNumber = phone.substr(0, 4);
        let carrier = '';
        switch (theFourFirstNumber) {
            case "0120":
                phone = phone.replace("0120", "070");
                carrier = "Mobifone";
                break;
            case "0121":
                phone = phone.replace("0121", "079");
                carrier = "Mobifone";
                break;
            case "0122":
                phone = phone.replace("0122", "077");
                carrier = "Mobifone";
                break;
            case "0126":
                phone = phone.replace("0126", "076");
                carrier = "Mobifone";
                break;
            case "0128":
                phone = phone.replace("0128", "078");
                carrier = "Mobifone";
                break;

            // Mobi
            case "0123":
                phone = phone.replace("0123", "083");
                carrier = "Vinaphone";
                break;
            case "0124":
                phone = phone.replace("0124", "084");
                carrier = "Vinaphone";
                break;
            case "0125":
                phone = phone.replace("0125", "085");
                carrier = "Vinaphone";
                break;
            case "0127":
                phone = phone.replace("0127", "081");
                carrier = "Vinaphone";
                break;
            case "0129":
                phone = phone.replace("0129", "082");
                carrier = "Vinaphone";
                break;
            // Vinaphone
            case "0162":
                phone = phone.replace("0162", "032");
                carrier = "Viettel";
                break;
            case "0163":
                phone = phone.replace("0163", "033");
                carrier = "Viettel";
                break;
            case "0164":
                phone = phone.replace("0164", "034");
                carrier = "Viettel";
                break;
            case "0165":
                phone = phone.replace("0165", "035");
                carrier = "Viettel";
                break;
            case "0166":
                phone = phone.replace("0166", "036");
                carrier = "Viettel";
                break;
            case "0167":
                phone = phone.replace("0167", "037");
                carrier = "Viettel";
                break;
            case "0168":
                phone = phone.replace("0168", "038");
                carrier = "Viettel";
                break;
            case "0169":
                phone = phone.replace("0169", "039");
                carrier = "Viettel";
                break;
            // Viettel
            case "0186":
                phone = phone.replace("0186", "056");
                carrier = "Vietnamobile";
                break;
            case "0188":
                phone = phone.replace("0188", "058");
                carrier = "Vietnamobile";
                break;
            // Vietnammobile
            case "0199":
                phone = phone.replace("0199", "059");
                carrier = "Gmobile";
                break;
            // GMobile
        }


        this.setState({ carrier, phoneValue: phone });
    }

    onSubmit = () => {
        console.log("Submit")
    }

    isPhoneNumber(phone) {
        const regEx = /^0(1\d{9}|9\d{8})$/;
        return regEx.test(phone);
    }

    getCarrier() {
        const { carrier } = this.state;
        switch (carrier) {
            case 'Gmobile':
                return GMobileLogo;
            case 'Vietnamobile':
                return VietnamobileLogo;
            case 'Viettel':
                return ViettelLogo;
            case 'Vinaphone':
                return VinaLogo;
            case 'Mobifone':
                return MobiLogo;
            default: return null;
        }
    }

    render() {
        const { phone, phoneValue, carrier } = this.state;
        const carrierImg = this.getCarrier();

        return (
            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1 className="App-title">Công cụ chuyển đổi SĐT 2018</h1>
                    <h5> Thực hiện: Đào Nam Tiến </h5>
                    <h5> Ngày: 15/09/2018 </h5>
                </header>
                <div style={{ flex: 1, marginTop: 30, marginBottom: 30, paddingRight: '20%', paddingLeft: '20%', width: '60%' }}>
                    <h5 style={{ fontWeight: 'inherit', textAlign: "justify" }}> Theo quyết định của Bộ TT&TT, các thuê bao 11 số tại Việt Nam
                        sẽ được chuyển về 10 số. Việc chuyển đổi này sẽ được chính thức thực hiện kể từ 0h ngày 15/9.  </h5>
                    <div style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Input.TextArea
                            style={{ flex: 1, padding: 10, fontSize: 20, width: '100%', borderRadius: 10, borderColor: 'gray', alignSelf: 'center' }}
                            autosize
                            size="large"
                            value={phone}
                            onChange={this.onChange}
                            onPressEnter={this.onSubmit}
                            placeholder="Your phone here"
                        />
                        <div style={{ justifyContent: 'center' }}>
                            <Icon spin style={{ fontSize: '40px', alignItems: 'center' }} type="retweet" theme="outlined" />
                        </div>
                        <div style={{ flex: 1, position: 'relative' }}>
                            <Input.TextArea
                                style={
                                    { padding: 10, color: carrier === '' ? 'red' : 'green', fontWeight: "bold", fontSize: 20, width: '100%', borderRadius: 10, borderColor: 'gray' }
                                }
                                autosize
                                size="large"
                                disabled
                                value={phoneValue}
                                placeholder="Your new phone here"
                            />
                            {carrierImg && <img srcSet={carrierImg} width={'80%'} height={'30%'} />}
                        </div>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        Dưới đây là chi tiết cách chuyển đổi các đầu số của 5 nhà mạng Viettel, VinaPhone, MobiFone, Vietnamobile và Gmobile:


                        <h5>MobiFone</h5>

                        Đầu số 0120 chuyển đổi thành 070<br />
                        Đầu số 0121 chuyển đổi thành 079<br />
                        Đầu số 0122 chuyển đổi thành 077<br />
                        Đầu số 0126 chuyển đổi thành 076<br />
                        Đầu số 0128 chuyển đổi thành 078<br />

                        Ví dụ thuê bao: 0128.7878.888 sẽ chuyển thành 078.7878.888

                       <h5>VinaPhone</h5>

                        Đầu số 0123 chuyển đổi thành 083<br />
                        Đầu số 0124 chuyển đổi thành 084<br />
                        Đầu số 0125 chuyển đổi thành 085<br />
                        Đầu số 0127 chuyển đổi thành 081<br />
                        Đầu số 0129 chuyển đổi thành 082<br />

                        Ví dụ thuê bao: 0129.8222.888 sẽ chuyển thành 082.8222.888

                        <h5>Viettel</h5>

                        Đầu số 0162 chuyển đổi thành 032<br />
                        Đầu số 0163 chuyển đổi thành 033<br />
                        Đầu số 0164 chuyển đổi thành 034<br />
                        Đầu số 0165 chuyển đổi thành 035<br />
                        Đầu số 0166 chuyển đổi thành 036<br />
                        Đầu số 0167 chuyển đổi thành 037<br />
                        Đầu số 0168 chuyển đổi thành 038<br />
                        Đầu số 0169 chuyển đổi thành 039<br />

                        Ví dụ thuê bao: 0169.9333.999 sẽ chuyển thành: 039.9333.999

                        <h5>Vietnamobile</h5>

                        Đầu số 0186 chuyển đổi thành 056<br />
                        Đầu số 0188 chuyển đổi thành 058<br />

                        Ví dụ thuê bao: 0188.8555.888 sẽ chuyển thành: 058.8555.888

                       <h5>Gmobile</h5>

                        Đầu số 0199 chuyển đổi thành 059<br />

                        Ví dụ thuê bao: 0199.5959.999 sẽ chuyển thành: 059.5959.999<br />

                        Các thuê bao di động 10 số vẫn được giữ nguyên không thay đổi.
                    </div>
                </div>
            </div >
        );
    }
}

export default App;
