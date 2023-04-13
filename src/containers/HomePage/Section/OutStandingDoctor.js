import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class OutStandingDoctor extends Component {

    render() {
    
        return (
            <div className='section-share section-outstanding-doctor section-specialty'>
            <div className='section-container'>
                <div className='section-header'>
                    <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                    <button className='btn-section'>xem thêm</button>
                </div>
                <div className='section-body '>
                <Slider {...this.props.settings}>
                <div className='section-customize'>
                    <div className='customize-border'>
                    <div className='outer-bg'>
                    <div className='bg-image section-outstanding-doctor'></div>

                    </div>
                    <div className='position text-center'>
                    <div className=''>Giáo sư tiến sĩ</div>
                    <div className=''>Cơ xương khớp 1</div>
                    </div>
                    </div>
                </div>
                <div className='section-customize'>
                    <div className='customize-border'>
                    <div className='outer-bg'>
                    <div className='bg-image section-outstanding-doctor'></div>

                    </div>
                    <div className='position text-center'>
                    <div className=''>Giáo sư tiến sĩ</div>
                    <div className=''>Cơ xương khớp 2</div>
                    </div>
                    </div>
                </div>
                <div className='section-customize'>
                <div className='customize-border'>

                    <div className='outer-bg'>
                    <div className='bg-image section-outstanding-doctor'></div>

                    </div>
                    <div className='position text-center'>
                    <div className=''>Giáo sư tiến sĩ</div>
                    <div className=''>Cơ xương khớp 3</div>
                    </div>
                    </div>
                </div>
                <div className='section-customize'>
                <div className='customize-border'>

                    <div className='outer-bg'>
                    <div className='bg-image section-outstanding-doctor'></div>

                    </div>
                    <div className='position text-center'>
                    <div className=''>Giáo sư tiến sĩ</div>
                    <div className=''>Cơ xương khớp 4</div>
                    </div>
                    </div>
                </div>
                <div className='section-customize'>
                <div className='customize-border'>

                    <div className='outer-bg'>
                    <div className='bg-image section-outstanding-doctor'></div>

                    </div>
                    <div className='position text-center'>
                    <div className=''>Giáo sư tiến sĩ</div>
                    <div className=''>Cơ xương khớp 5</div>
                    </div>
                    </div>
                </div>
                <div className='section-customize'>
                <div className='customize-border'>

                    <div className='outer-bg'>
                    <div className='bg-image section-outstanding-doctor'></div>

                    </div>
                    <div className='position text-center'>
                    <div className=''>Giáo sư tiến sĩ</div>
                    <div className=''>Cơ xương khớp 6</div>
                    </div>
                    </div>
                </div>
                
            </Slider>
                </div>
           
            </div>
           </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
