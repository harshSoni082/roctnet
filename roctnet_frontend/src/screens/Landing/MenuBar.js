import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

import SignIn from './modals/SignIn';

class MenuBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        }
    }

    showModal() {
        this.setState({modalVisible: !this.state.modalVisible,})
    }

    render() {
        return (
            <div style={{float: "right",}}>
                <Row className="signin-buttons" gutter={[0, 0]}>
                    <Col span={24}>
                        <div style={{float: 'right', marginRight: '70%',}}>
                            <Button type="primary" size="medium" onClick={this.showModal.bind(this)} style={{background: 'transparent', border: '1px solid rgb(0, 232, 185)', color: 'rgb(0, 232, 185)'}}>
                                <span>Sign In</span>
                            </Button>
                        </div>
                    </Col>
                </Row>

                {
                    this.state.modalVisible && <SignIn visible={this.state.modalVisible} callback={this.showModal.bind(this)} />
                }
            </div>
        );
    }
}

export default MenuBar;